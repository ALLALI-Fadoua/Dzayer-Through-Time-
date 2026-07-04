import { generalStats, populationGrowth, gdpGrowth, universityGrowth } from "../data/statisticsData";

export async function getGeneralStats() {
  await new Promise((r) => setTimeout(r, 250));
  return generalStats;
}

export async function getGrowthCharts() {
  await new Promise((r) => setTimeout(r, 250));
  return { populationGrowth, gdpGrowth, universityGrowth };
}
