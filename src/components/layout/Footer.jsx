import { Link } from "react-router-dom";
import Icon from "../common/Icon";
import logoImg from "../../assets/images/logo-light.png";

const socials = [
  { icon: "facebook", href: "#", label: "Facebook" },
  { icon: "instagram", href: "#", label: "Instagram" },
  { icon: "x_twitter", href: "#", label: "X" },
  { icon: "linkedin", href: "#", label: "LinkedIn" },
];

export default function Footer() {
  return (
    <footer className="bg-primary-800 text-cream">
      <div className="max-w-7xl mx-auto px-5 lg:px-8 py-14 grid grid-cols-1 md:grid-cols-4 gap-10">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <img
              src={logoImg}
              alt="دزاير عبر الزمن"
              className="w-12 h-12 lg:w-14 lg:h-14 rounded-full object-cover shrink-0"
            />
            <div>
              <p className="font-extrabold text-lg">دزاير عبر الزمن</p>
              <p className="text-xs text-primary-200">1962 — 2026</p>
            </div>
          </div>
          <p className="text-sm text-primary-100 leading-relaxed">
            منصة رقمية تفاعلية توثق مسيرة الجزائر من الاستقلال إلى اليوم.
          </p>
        </div>

        <div>
          <h4 className="font-bold text-gold mb-4">روابط سريعة</h4>
          <ul className="space-y-2 text-sm text-primary-100">
            {[["الرئيسية", "/"], ["عبر الزمن", "/timeline"], ["الأحداث", "/events"], ["معرض الصور", "/gallery"]].map(([l, h]) => (
              <li key={h}><Link to={h} className="hover:text-gold transition-colors">{l}</Link></li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-gold mb-4">المزيد</h4>
          <ul className="space-y-2 text-sm text-primary-100">
            {[["الإحصائيات", "/statistics"], ["المدن والولايات", "/map"], ["عن المشروع", "/about"], ["فضاء الإدارة", "/admin/login"]].map(([l, h]) => (
              <li key={h}><Link to={h} className="hover:text-gold transition-colors">{l}</Link></li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-gold mb-4">تواصل معنا</h4>
          <p className="text-sm text-primary-100 mb-3">contact@dzayer-zaman.dz</p>
          <div className="flex gap-3">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                aria-label={s.label}
                className="w-9 h-9 rounded-full bg-primary-700 flex items-center justify-center hover:bg-gold hover:text-primary-800 transition-colors"
              >
                <Icon name={s.icon} size={16} strokeWidth={1.8} />
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t border-primary-700 py-5">
        <p className="text-center text-xs text-primary-300">
          © 2026 دزاير عبر الزمن — جميع الحقوق محفوظة | تصميم وتطوير Alfa Web
        </p>
      </div>
    </footer>
  );
}