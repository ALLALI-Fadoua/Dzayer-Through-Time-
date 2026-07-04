import { useState } from "react";
import timelineData from "../../data/timelineData";
import TimelineNav from "../../components/timeline/TimelineNav";
import TimelineDetail from "../../components/timeline/TimelineDetail";
import Loader from "../../components/common/Loader";
import useFetch from "../../hooks/useFetch";
import { getYears } from "../../services/yearService";

export default function Timeline() {
  const { data, loading } = useFetch(getYears, []);
  const [activeYear, setActiveYear] = useState(1962);

  const years = data || timelineData;
  const activeItem = years.find((y) => y.year === activeYear) || years[0];

  if (loading) return <Loader label="جاري تحميل الخط الزمني..." />;

  return (
    <div className="max-w-6xl mx-auto px-5 lg:px-8 py-14">
      <div className="text-center mb-12">
        <h1 className="section-title inline-block text-3xl md:text-4xl font-extrabold text-primary-800 mb-3">
          عبر الزمن
        </h1>
        <p className="text-primary-400 mt-4 max-w-2xl mx-auto">
          اختر سنة من الخط الزمني لاكتشاف أبرز الأحداث والإنجازات في تلك الحقبة.
        </p>
      </div>

      <div className="mb-12">
        <TimelineNav years={years} activeYear={activeYear} onSelect={setActiveYear} />
      </div>

      <TimelineDetail item={activeItem} />
    </div>
  );
}
