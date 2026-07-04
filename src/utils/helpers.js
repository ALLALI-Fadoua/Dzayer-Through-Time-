export function classNames(...args) {
  return args.filter(Boolean).join(" ");
}

export function formatNumber(num) {
  if (num === undefined || num === null) return "";
  return new Intl.NumberFormat("ar-DZ").format(num);
}

export function truncate(text, length = 120) {
  if (!text) return "";
  return text.length > length ? text.slice(0, length) + "..." : text;
}
