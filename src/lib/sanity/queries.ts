export const allChaptersQuery = `*[_type == "chapter"] | order(founded desc) {
  _id,
  societyId,
  name,
  displayName,
  location,
  description,
  stats,
  founded,
  tallyContactFormId,
  "strategists": strategists[]-> {
    _id,
    name,
    role,
    roleLabel,
    "photoUrl": photo.asset->url
  },
  achievements
}`;

export const chapterBySlugQuery = `*[_type == "chapter" && societyId.current == $societyId][0] {
  _id,
  societyId,
  name,
  displayName,
  location,
  description,
  stats,
  founded,
  tallyContactFormId,
  "strategists": strategists[]-> {
    _id,
    name,
    role,
    roleLabel,
    "photoUrl": photo.asset->url
  },
  achievements
}`;

export const allChapterSlugsQuery = `*[_type == "chapter"] { "societyId": societyId.current }`;
