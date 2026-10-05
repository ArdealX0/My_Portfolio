// Smaller display copies; links to original photos and project evidence stay intact.
export function imagePreview(src) {
  return `/optimized/${src.split("/").pop().replace(/\.(png|jpg)$/i, ".webp")}`
}
