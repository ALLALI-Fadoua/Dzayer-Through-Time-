import eventsData from "../data/eventsData";

export async function getEvents() {
  await new Promise((r) => setTimeout(r, 300));
  return eventsData;
}

export async function searchEvents(query) {
  await new Promise((r) => setTimeout(r, 200));
  const q = query.trim().toLowerCase();
  if (!q) return eventsData;
  return eventsData.filter(
    (e) =>
      e.title.toLowerCase().includes(q) ||
      String(e.year).includes(q) ||
      e.category.toLowerCase().includes(q)
  );
}
