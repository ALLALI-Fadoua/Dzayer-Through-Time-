import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import Icon from "../common/Icon";
import logoImg from "../../assets/images/logo-light.png";

const items = [
  { to: "/admin/dashboard", label: "لوحة التحكم", icon: "dashboard" },
  { to: "/admin/years", label: "إدارة السنوات", icon: "clock" },
  { to: "/admin/events", label: "إدارة الأحداث", icon: "event" },
  { to: "/admin/gallery", label: "الصور والفيديوهات", icon: "image" },
  { to: "/admin/statistics", label: "الإحصائيات", icon: "chart" },
  { to: "/admin/wilayas", label: "الولايات", icon: "wilaya" },
  { to: "/admin/settings", label: "الإعدادات", icon: "settings" },
];

export default function Sidebar() {
  const { logout } = useAuth();
  const navigate = useNavigate();

  return (
    <aside className="w-64 shrink-0 bg-primary-700 text-cream h-screen sticky top-0 flex flex-col overflow-y-auto">
      <div className="px-6 py-6 border-b border-primary-600 flex items-center gap-3">
        <img
          src={logoImg}
          alt="دزاير عبر الزمن"
          className="w-10 h-10 rounded-full object-cover shrink-0"
        />
        <div>
          <p className="font-bold text-sm">لوحة الإدارة</p>
          <p className="text-[11px] text-primary-200">دزاير عبر الزمن</p>
        </div>
      </div>

      <nav className="flex-1 px-3 py-5 space-y-1">
        {items.map((i) => (
          <NavLink
            key={i.to}
            to={i.to}
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold transition-colors ${
                isActive ? "bg-gold text-primary-800" : "text-primary-100 hover:bg-primary-600"
              }`
            }
          >
            <Icon name={i.icon} size={18} strokeWidth={1.8} className="shrink-0" />
            {i.label}
          </NavLink>
        ))}
      </nav>

      <div className="p-4 border-t border-primary-600">
        <button
          onClick={() => {
            logout();
            navigate("/admin/login");
          }}
          className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-primary-800 hover:bg-red-700 text-sm font-bold transition-colors"
        >
          <Icon name="logout" size={16} strokeWidth={1.8} />
          تسجيل الخروج
        </button>
      </div>
    </aside>
  );
}