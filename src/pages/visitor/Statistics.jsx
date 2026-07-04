import { generalStats, populationGrowth, gdpGrowth, universityGrowth } from "../../data/statisticsData";
import StatCard from "../../components/statistics/StatCard";
import GrowthChart from "../../components/statistics/GrowthChart";

export default function Statistics() {
  return (
    <div className="max-w-6xl mx-auto px-5 lg:px-8 py-14">
      <div className="text-center mb-10">
        <h1 className="section-title inline-block text-3xl md:text-4xl font-extrabold text-primary-800 mb-3">
          الإحصائيات
        </h1>
        <p className="text-primary-400 mt-4 max-w-2xl mx-auto">
          تطور الأرقام في مختلف المجالات منذ الاستقلال إلى اليوم.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-14">
        {generalStats.map((s) => (
          <StatCard key={s.id} {...s} />
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <GrowthChart title="تطور عدد السكان (بالمليون)" data={populationGrowth} color="#0B3D2E" suffix="M" />
        <GrowthChart title="تطور الناتج المحلي الإجمالي (مليار $)" data={gdpGrowth} color="#C9A227" suffix="$" />
      </div>
      <GrowthChart title="تطور عدد الجامعات" data={universityGrowth} color="#1F6B4D" />
    </div>
  );
}
