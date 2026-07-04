import { useState, useMemo } from "react";
import eventsData from "../../data/eventsData";
import { CATEGORIES } from "../../utils/constants";
import Card from "../../components/common/Card";
import Icon from "../../components/common/Icon";

export default function Events() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("الكل");

  const filtered = useMemo(() => {
    return eventsData
      .filter((e) => (category === "الكل" ? true : e.category === category))
      .filter((e) => {
        const q = query.trim().toLowerCase();
        if (!q) return true;
        return (
          e.title.toLowerCase().includes(q) ||
          String(e.year).includes(q) ||
          e.description.toLowerCase().includes(q)
        );
      })
      .sort((a, b) => a.year - b.year);
  }, [query, category]);

  return (
    <div className="max-w-6xl mx-auto px-5 lg:px-8 py-14">
      <div className="text-center mb-10">
        <h1 className="section-title inline-block text-3xl md:text-4xl font-extrabold text-primary-800 mb-3">
          الأحداث التاريخية
        </h1>
        <p className="text-primary-400 mt-4 max-w-2xl mx-auto">
          أبرز المحطات والأحداث التي شكلت مسيرة الجزائر منذ الاستقلال.
        </p>
      </div>

      {/* Search + filters */}
      <div className="flex flex-col md:flex-row gap-4 mb-10">
        <div className="flex-1 relative">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="ابحث عن سنة أو حدث..."
            className="w-full px-5 py-3 rounded-full border border-primary-200 focus:border-gold focus:outline-none text-sm"
          />
          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-primary-300">
            <Icon name="search" size={16} strokeWidth={1.8} />
          </span>
        </div>
        <div className="flex gap-2 overflow-x-auto scrollbar-none">
          {CATEGORIES.map((c) => (
            <button
              key={c}
              onClick={() => setCategory(c)}
              className={`px-4 py-2 rounded-full text-xs font-bold shrink-0 transition-colors ${
                category === c ? "bg-primary text-cream" : "bg-white border border-primary-200 text-primary-600"
              }`}
            >
              {c}
            </button>
          ))}
        </div>
      </div>

      {/* Timeline list */}
      <div className="relative border-r-2 border-primary-100 pr-8 space-y-8">
        {filtered.map((e) => (
          <div key={e.id} className="relative">
            <span className="absolute -right-[39px] top-2 w-4 h-4 rounded-full bg-gold border-4 border-cream" />
            <Card className="!p-0 overflow-hidden" hover>
              <div className="flex flex-col md:flex-row">
                <div className="w-full md:w-56 h-44 shrink-0">
                  <img
                    src={e.image}
                    alt={e.title}
                    className="w-full h-full object-cover object-center"
                  />
                </div>
                <div className="p-5 flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-gold font-extrabold">{e.year}</span>
                    <span className="text-[11px] px-2 py-0.5 rounded-full bg-primary-50 text-primary-600 font-bold">
                      {e.category}
                    </span>
                  </div>
                  <h3 className="font-bold text-primary-800 mb-1">{e.title}</h3>
                  <p className="text-xs text-primary-400 mb-2">{e.date}</p>
                  <p className="text-sm text-primary-600 leading-relaxed">{e.description}</p>
                </div>
              </div>
            </Card>
          </div>
        ))}
        {!filtered.length && (
          <p className="text-center text-primary-400 py-10">لا توجد أحداث مطابقة لبحثك.</p>
        )}
      </div>
    </div>
  );
}