import { useState } from "react";
import { generalStats } from "../../data/statisticsData";
import Button from "../../components/common/Button";
import Icon from "../../components/common/Icon";

// خريطة تحويل الإيموجي القديم إلى أيقونة احترافية بلون واحد
const iconMap = {
  "🏥": "hospital",
  "🎓": "academic_cap",
  "👥": "users",
  "🗺️": "wilaya",
  "🌐": "globe",
  "🛣️": "road",
};

export default function StatisticsManager() {
  const [rows, setRows] = useState(generalStats);

  function updateValue(id, value) {
    setRows(rows.map((r) => (r.id === id ? { ...r, value: Number(value) || 0 } : r)));
  }

  function handleSave() {
    alert("تم حفظ الإحصائيات (نسخة Mock — لا يتم حفظها بشكل دائم).");
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-extrabold text-primary-800">إدارة الإحصائيات</h1>
        <Button variant="gold" onClick={handleSave}>
          حفظ التغييرات
        </Button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {rows.map((s) => (
          <div key={s.id} className="bg-white rounded-2xl p-5 border border-primary-100/60">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-xl bg-primary-50 text-primary-600 flex items-center justify-center">
                <Icon name={iconMap[s.icon] || "chart"} size={20} />
              </div>
              <p className="font-bold text-primary-800 text-sm">{s.label}</p>
            </div>
            <input
              type="number"
              value={s.value}
              onChange={(e) => updateValue(s.id, e.target.value)}
              className="w-full px-4 py-2.5 rounded-xl border border-primary-200 focus:border-gold focus:outline-none text-sm font-bold"
            />
            <p className="text-xs text-primary-400 mt-2">{s.unit}</p>
          </div>
        ))}
      </div>
    </div>
  );
}