export default function Manga(
  image,
  title,
  alias,
  type,
  currentChapter,
  status,
  published,
  genre,
  demographic,
  serialization,
  author,
  synopsis
) {
  this.image = image;
  this.title = title;
  this.alias = alias;
  this.type = type;
  this.currentChapter = currentChapter;
  this.status = status;
  this.published = published;
  this.genre = genre;
  this.demographic = demographic;
  this.serialization = serialization;
  this.author = author;
  this.synopsis = synopsis;
}
