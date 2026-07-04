import wilayaData from "../data/wilayaData";

export async function getWilayas() {
  await new Promise((r) => setTimeout(r, 300));
  return wilayaData;
}
