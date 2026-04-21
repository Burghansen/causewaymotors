const basePath = "/causewaymotors";

export default function imageLoader({ src }) {
  if (src.startsWith("/") && !src.startsWith(basePath)) {
    return `${basePath}${src}`;
  }
  return src;
}
