import { formatNumber } from "../../utils/helpers";
import Icon from "../common/Icon";
// ^ adjust this path if Icon.jsx lives elsewhere

// Mapped by LABEL (not by whatever `icon` value the page currently passes),
// same approach as TimelineNav's ICON_NAME_BY_YEAR. This works immediately
// regardless of what Statistics.jsx sends (emoji, wrong name, etc.).
// Add new entries here if you add new stat cards later.
const ICON_NAME_BY_LABEL = {
  "الولايات": "map",
  "مستخدمي الإنترنت": "globe",
  "طول الطرقات": "road",
  "المستشفيات": "hospital",
  "الجامعات": "academic_cap",
  "عدد السكان": "users",
};

export default function StatCard({ icon, value, unit, label }) {
  // Priority: label mapping > whatever icon prop was passed > fallback
  const iconName = ICON_NAME_BY_LABEL[label] || icon;

  return (
    <div className="bg-primary-700 text-cream rounded-2xl p-6 text-center hover:bg-primary-800 transition-colors">
      <div className="flex justify-center mb-3">
        <Icon name={iconName} size={32} strokeWidth={1.5} color="#C9A227" />
      </div>
      <p className="text-3xl font-extrabold text-gold mb-1">
        {formatNumber(value)}
        <span className="text-base font-bold text-gold">+</span>
      </p>
      <p className="text-xs text-primary-200 mb-1">{unit}</p>
      <p className="text-sm font-semibold">{label}</p>
    </div>
  );
}