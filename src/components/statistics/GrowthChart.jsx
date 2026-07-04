// رسم بياني بسيط بالأعمدة باستخدام SVG/Tailwind فقط (بدون مكتبات خارجية)
export default function GrowthChart({ title, data, color = "#C9A227", suffix = "" }) {
  const max = Math.max(...data.map((d) => d.value));
  return (
    <div className="bg-white rounded-2xl p-6 border border-primary-100/60">
      <h4 className="font-bold text-primary-700 mb-6">{title}</h4>
      <div className="flex items-end gap-3 h-48">
        {data.map((d) => (
          <div key={d.year} className="flex-1 flex flex-col items-center gap-2 h-full group">
            <span className="text-[11px] font-bold text-primary-500 opacity-0 group-hover:opacity-100 transition-opacity">
              {d.value}{suffix}
            </span>
            {/* Fixed-height bar zone so percentage heights below actually resolve */}
            <div className="w-full flex-1 flex items-end">
              <div
                className="w-full rounded-t-lg transition-all duration-500"
                style={{
                  height: `${(d.value / max) * 100}%`,
                  backgroundColor: color,
                  minHeight: "6px",
                }}
              />
            </div>
            <span className="text-[11px] text-primary-400 font-semibold">{d.year}</span>
          </div>
        ))}
      </div>
    </div>
  );
}