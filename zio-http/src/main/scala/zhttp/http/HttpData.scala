package zhttp.http

import io.netty.buffer.{ByteBuf, Unpooled}
import zio.blocking.Blocking.Service.live.effectBlocking
import zio.stream.ZStream
import zio.{Chunk, Task, UIO}

import java.nio.charset.Charset
import java.nio.file.Files

/**
 * Holds HttpData that needs to be written on the HttpChannel
 */
sealed trait HttpData { self =>

  /**
   * Returns true if HttpData is a stream
   */
  def isChunked: Boolean = self match {
    case HttpData.BinaryStream(_) => true
    case _                        => false
  }

  /**
   * Returns true if HttpData is empty
   */
  def isEmpty: Boolean = self match {
    case HttpData.Empty => true
    case _              => false
  }

  def toByteBuf: Task[ByteBuf] = {
    self match {
      case HttpData.Text(text, charset)  => UIO(Unpooled.copiedBuffer(text, charset))
      case HttpData.BinaryChunk(data)    => UIO(Unpooled.copiedBuffer(data.toArray))
      case HttpData.BinaryByteBuf(data)  => UIO(data)
      case HttpData.Empty                => UIO(Unpooled.EMPTY_BUFFER)
      case HttpData.BinaryStream(stream) =>
        stream
          .asInstanceOf[ZStream[Any, Throwable, ByteBuf]]
          .fold(Unpooled.compositeBuffer())((c, b) => c.addComponent(b))
      case HttpData.File(file)           =>
        effectBlocking {
          val fileContent = Files.readAllBytes(file.toPath)
          Unpooled.copiedBuffer(fileContent)
        }
    }
  }
}

object HttpData {

  /**
   * Helper to create empty HttpData
   */
  def empty: HttpData = Empty

  /**
   * Helper to create HttpData from ByteBuf
   */
  def fromByteBuf(byteBuf: ByteBuf): HttpData = HttpData.BinaryByteBuf(byteBuf)

  /**
   * Helper to create HttpData from chunk of bytes
   */
  def fromChunk(data: Chunk[Byte]): HttpData = BinaryChunk(data)

  /**
   * Helper to create HttpData from Stream of bytes
   */
  def fromStream(stream: ZStream[Any, Throwable, Byte]): HttpData =
    HttpData.BinaryStream(stream.mapChunks(chunks => Chunk(Unpooled.wrappedBuffer(chunks.toArray))))

  /**
   * Helper to create HttpData from Stream of string
   */
  def fromStream(stream: ZStream[Any, Throwable, String], charset: Charset = HTTP_CHARSET): HttpData =
    HttpData.BinaryStream(stream.map(str => Unpooled.copiedBuffer(str, charset)))

  def fromStreamByteBuf(stream: ZStream[Any, Throwable, ByteBuf]): HttpData =
    HttpData.BinaryStream(stream)

  /**
   * Helper to create HttpData from String
   */
  def fromString(text: String, charset: Charset = HTTP_CHARSET): HttpData = Text(text, charset)

  /**
   * Helper to create HttpData from contents of a file
   */
  def fromFile(file: java.io.File): HttpData = File(file)

  private[zhttp] final case class Text(text: String, charset: Charset)                   extends HttpData
  private[zhttp] final case class BinaryChunk(data: Chunk[Byte])                         extends HttpData
  private[zhttp] final case class BinaryByteBuf(data: ByteBuf)                           extends HttpData
  private[zhttp] final case class BinaryStream(stream: ZStream[Any, Throwable, ByteBuf]) extends HttpData
  private[zhttp] final case class File(file: java.io.File)                               extends HttpData
  private[zhttp] case object Empty                                                       extends HttpData
}
