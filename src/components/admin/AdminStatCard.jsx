export default function AdminStatCard({ icon, label, value, accent = "primary" }) {
  const accentClass =
    accent === "gold" ? "text-gold bg-gold/10" : "text-primary-600 bg-primary-50";
  return (
    <div className="bg-white rounded-2xl p-5 border border-primary-100/60 flex items-center gap-4">
      <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-xl ${accentClass}`}>
        {icon}
      </div>
      <div>
        <p className="text-2xl font-extrabold text-primary-800">{value}</p>
        <p className="text-xs text-primary-400 font-semibold">{label}</p>
      </div>
    </div>
  );
}
