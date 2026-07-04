const arabicMonths = [
  "جانفي", "فيفري", "مارس", "أفريل", "ماي", "جوان",
  "جويلية", "أوت", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر",
];

export function formatArabicDate(date) {
  const d = new Date(date);
  if (isNaN(d)) return date;
  return `${d.getDate()} ${arabicMonths[d.getMonth()]} ${d.getFullYear()}`;
}

export function yearsSince(year) {
  return CURRENT_YEAR_CONST() - year;
}

function CURRENT_YEAR_CONST() {
  return 2026;
}
