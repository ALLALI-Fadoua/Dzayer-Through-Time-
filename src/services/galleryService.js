import galleryData from "../data/galleryData";

export async function getGalleryItems() {
  await new Promise((r) => setTimeout(r, 300));
  return galleryData;
}
