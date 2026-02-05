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
  achievements,
  isFlagship,
  chapterIndex,
  tagline,
  "heroImageUrl": heroImage.asset->url,
  mission,
  overview,
  features
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
  achievements,
  isFlagship,
  chapterIndex,
  tagline,
  "heroImageUrl": heroImage.asset->url,
  mission,
  overview,
  features
}`;

export const allChapterSlugsQuery = `*[_type == "chapter"] { "societyId": societyId.current }`;
