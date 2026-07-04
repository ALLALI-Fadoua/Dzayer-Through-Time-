import timelineData from "../data/timelineData";

export async function getYears() {
  await new Promise((r) => setTimeout(r, 300));
  return timelineData;
}

export async function getYearById(id) {
  await new Promise((r) => setTimeout(r, 200));
  return timelineData.find((y) => y.id === Number(id)) || null;
}
