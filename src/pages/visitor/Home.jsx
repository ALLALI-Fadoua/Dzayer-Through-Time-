import { Link } from "react-router-dom";
import Icon from "../../components/common/Icon";
import heroImg from "../../assets/images/hero-algeria.png";

/* ── Images principales par année (mêmes fichiers que timelineData.js) ─── */
import independenceImg from "../../assets/images/عيد الإستقلال__.jpg";
import foundationsImg from "../../assets/images/بناء الأسس.jpg";
import developmentImg from "../../assets/images/التوسع والتنمية.jpg";
import transformationsImg1 from "../../assets/images/مرحلة التحولات1.jpg";
import reconciliationImg from "../../assets/images/الانفتاح والمصالحة.jpg";
import infrastructureImg3 from "../../assets/images/تحديث البنى التحتية3.jpg";
import newAlgeriaImg from "../../assets/images/الجزائر الجديدة.jpg";
import prosperityImg from "../../assets/images/ازدهار الجزائر.jpg";

/* ── Images chronologiques (photo principale uniquement, pas la gallery) ── */
const timelineYears = [
  { year: 1962, img: independenceImg },
  { year: 1970, img: foundationsImg },
  { year: 1980, img: developmentImg },
  { year: 1990, img: transformationsImg1 },
  { year: 2000, img: reconciliationImg },
  { year: 2010, img: infrastructureImg3 },
  { year: 2020, img: newAlgeriaImg },
  { year: 2026, img: prosperityImg },
];

/* ── Bطاقات الأقسام السفلية ─────────────────────────────── */
const featureCards = [
  {
    label: "لحظات من التاريخ",
    icon: "clock",
    to: "/events",
    img: independenceImg,
    darkOverlay: true,
  },
  {
    label: "أرقام وتطور",
    icon: "trend",
    to: "/statistics",
    img: null,
    bg: "#0B3D2E",
    chart: true,
  },
  {
    label: "مدن ومعالم الجزائر",
    icon: "map",
    to: "/map",
    img: "https://images.unsplash.com/photo-1539020140153-e479b8c22e70?q=80&w=600&auto=format&fit=crop",
    darkOverlay: true,
  },
  {
    label: "من الماضي إلى المستقبل",
    icon: "compass",
    to: "/timeline",
    img: prosperityImg,
    darkOverlay: true,
  },
];

export default function Home() {
  return (
    <div style={{ backgroundColor: "#EDE8DC", fontFamily: "'Cairo', 'Tajawal', sans-serif" }}>

      {/* ═══════════════════════════════════════
          HERO — photo à droite, texte à gauche
      ═══════════════════════════════════════ */}
      <section style={{ backgroundColor: "#EDE8DC" }} className="max-w-7xl mx-auto px-6 lg:px-10 pt-3 lg:pt-4 pb-4">
        {/*
          En RTL naturel : le premier élément du flux se place à droite,
          le second à gauche. Donc l'image en premier = droite,
          le texte en second = gauche. Pas besoin de hack dir="ltr".
        */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.45fr_1fr] gap-6 lg:gap-16 items-center min-h-[380px]">

          {/* ── Illustration hero (DROITE, fond libre sans carte) ─── */}
          <div className="relative order-1 overflow-hidden" style={{ aspectRatio: "1615 / 974", width: "100%" }}>
            <img
              src={heroImg}
              alt="معالم الجزائر عبر الزمن"
              className="w-full h-full object-cover"
            />

            {/* Fondu haut */}
            <div style={{
              position: "absolute", inset: 0,
              background: "linear-gradient(to bottom, #EDE8DC 0%, rgba(237,232,220,0) 14%)"
            }} />
            {/* Fondu bas */}
            <div style={{
              position: "absolute", inset: 0,
              background: "linear-gradient(to top, #EDE8DC 0%, rgba(237,232,220,0) 18%)"
            }} />
            {/* Fondu gauche (vers le texte) */}
            <div style={{
              position: "absolute", inset: 0,
              background: "linear-gradient(to right, #EDE8DC 0%, rgba(237,232,220,0.5) 8%, rgba(237,232,220,0) 26%)"
            }} />
            {/* Fondu droit (léger, juste pour casser la ligne nette) */}
            <div style={{
              position: "absolute", inset: 0,
              background: "linear-gradient(to left, #EDE8DC 0%, rgba(237,232,220,0) 5%)"
            }} />
          </div>

          {/* ── Texte (GAUCHE) ─── */}
          <div className="py-8 lg:py-12 order-2">
            <h1 className="font-extrabold leading-tight mb-4" style={{ fontSize: "clamp(2.4rem,5vw,3.6rem)", color: "#0B3D2E" }}>
              دزاير عبر الزمن
            </h1>

            {/* Divider doré */}
            <div className="flex items-center gap-3 mb-5">
              <div style={{ width: 48, height: 2, backgroundColor: "#C9A227", borderRadius: 2 }} />
              <span style={{ color: "#C9A227", fontWeight: 700, fontSize: 14 }}>من 1962 إلى اليوم</span>
              <div style={{ width: 48, height: 2, backgroundColor: "#C9A227", borderRadius: 2 }} />
            </div>

            <p className="mb-8 leading-relaxed" style={{ color: "#4A4A4A", fontSize: 15, maxWidth: 420 }}>
              اكتشف كيف تطورت الجزائر عبر العقود من الاستقلال إلى الحاضر.
            </p>

            <Link
              to="/timeline"
              className="inline-flex items-center gap-3 font-bold transition-all hover:opacity-90 hover:-translate-y-0.5"
              style={{
                backgroundColor: "#0B3D2E",
                color: "#fff",
                padding: "12px 32px",
                borderRadius: 9999,
                fontSize: 15,
                boxShadow: "0 4px 16px rgba(11,61,46,0.25)",
              }}
            >
              <span>ابدأ الرحلة</span>
              <Icon name="arrow" size={18} color="#C9A227" />
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          TIMELINE STRIP — chevauche le bas du hero
      ═══════════════════════════════════════ */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 -mt-4 lg:-mt-8 pb-5">
        <div className="rounded-3xl p-5 shadow-lg" style={{ backgroundColor: "#F8F4EA" }}>

          {/* Images horizontales */}
          <div dir="ltr" className="flex gap-2.5 overflow-x-auto pb-3" style={{ scrollbarWidth: "none" }}>
            {timelineYears.map((t, i) => (
              <Link
                key={t.year}
                to="/timeline"
                className="shrink-0 relative group rounded-xl overflow-hidden shadow-md"
                style={{ width: 132, height: 112, flexShrink: 0 }}
              >
                <img
                  src={t.img}
                  alt={t.year}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  style={{ filter: i < 3 ? "grayscale(0.7)" : "grayscale(0)" }}
                />
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 60%)" }} />
                <span style={{
                  position: "absolute", bottom: 8, right: 10,
                  color: "#fff", fontWeight: 800, fontSize: 13,
                  textShadow: "0 1px 4px rgba(0,0,0,0.5)"
                }}>{t.year}</span>
              </Link>
            ))}
          </div>

          {/* Ligne de points */}
          <div dir="ltr" className="relative mt-4 px-1">
            <div style={{
              position: "absolute", top: 11, left: 12, right: 12,
              height: 2, backgroundColor: "#E5E0D5", borderRadius: 2
            }} />
            <div className="flex justify-between items-start">
              {timelineYears.map((t, i) => {
                const isLast = i === timelineYears.length - 1;
                return (
                  <Link key={t.year} to="/timeline" className="flex flex-col items-center gap-1.5 group" style={{ zIndex: 1 }}>
                    <div style={{
                      width: 22, height: 22, borderRadius: "50%",
                      backgroundColor: isLast ? "#0B3D2E" : "#fff",
                      border: isLast ? "none" : "2px solid #CCC",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      boxShadow: "0 1px 4px rgba(0,0,0,0.12)",
                      transition: "border-color 0.2s",
                    }} className="group-hover:border-yellow-500">
                      {isLast
                        ? <span style={{ color: "#C9A227", fontWeight: 900, fontSize: 14 }}>+</span>
                        : <svg viewBox="0 0 24 24" width="11" height="11" fill="none" stroke="#999" strokeWidth="1.5"><path d="M12 2a10 10 0 1010 10A10 10 0 0012 2zm0 4v4l3 3" strokeLinecap="round" strokeLinejoin="round"/></svg>
                      }
                    </div>
                    <span style={{ fontSize: 11, fontWeight: 700, color: "#999" }}>{t.year}</span>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          4 FEATURE CARDS
      ═══════════════════════════════════════ */}
      <section className="max-w-7xl mx-auto px-6 lg:px-10 py-4">
        <div dir="ltr" className="grid grid-cols-2 lg:grid-cols-4 gap-4">

          {featureCards.map((c) => (
            <Link
              key={c.label}
              to={c.to}
              dir="rtl"
              className="relative rounded-2xl overflow-hidden group shadow-md flex flex-col justify-end"
              style={{ height: 160 }}
            >
              {/* Background */}
              {c.img
                ? <img src={c.img} alt={c.label} className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                : <div className="absolute inset-0" style={{ backgroundColor: c.bg }} />
              }

              {/* Chart visuel pour "أرقام وتطور" */}
              {c.chart && (
                <div dir="ltr" className="absolute inset-0 flex items-end justify-center pb-8 px-4 gap-1">
                  {[25, 40, 32, 55, 45, 70, 60, 88].map((h, i) => (
                    <div key={i} className="flex-1 rounded-sm"
                      style={{
                        height: `${h}%`,
                        backgroundColor: i === 7 ? "#C9A227" : "rgba(201,162,39,0.35)",
                        maxWidth: 14,
                      }}
                    />
                  ))}
                </div>
              )}

              {/* Overlay gradient */}
              {c.darkOverlay && (
                <div className="absolute inset-0"
                  style={{ background: "linear-gradient(to top, rgba(0,0,0,0.78) 0%, rgba(0,0,0,0.15) 55%, transparent 100%)" }}
                />
              )}
              {c.chart && (
                <div className="absolute inset-0"
                  style={{ background: "linear-gradient(to top, rgba(0,0,0,0.5) 0%, transparent 60%)" }}
                />
              )}

              {/* Label + icon */}
              <div className="relative flex items-center justify-between px-4 pb-4 z-10">
                <span style={{ color: "#fff", fontWeight: 700, fontSize: 14 }}>{c.label}</span>
                <div style={{
                  width: 34, height: 34, borderRadius: "50%",
                  backgroundColor: "rgba(255,255,255,0.12)",
                  border: "1px solid rgba(255,255,255,0.3)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  flexShrink: 0,
                }}>
                  <Icon name={c.icon} size={16} color="#fff" strokeWidth={1.8} />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ═══════════════════════════════════════
          TICKER BOTTOM — beige + or
      ═══════════════════════════════════════ */}
      <section className="py-5 overflow-hidden" style={{ backgroundColor: "#EDE8DC" }}>
        <div
          dir="ltr"
          className="flex items-center whitespace-nowrap"
          style={{ animation: "ticker 35s linear infinite" }}
        >
          {[...Array(5)].map((_, i) => (
            <span key={i} className="inline-flex items-center gap-4 px-6 shrink-0" style={{ fontSize: 14, fontWeight: 600, color: "#1A1A1A" }}>
              <span style={{ color: "#C9A227" }}>✦</span>
              <span>—</span>
              <span>🇩🇿</span>
              <span>64 سنة من الكفاح، البناء، والتطور...</span>
              <span style={{ color: "#C9A227" }}>وهذه الحكاية مستمرة</span>
              <span>—</span>
              <span style={{ color: "#C9A227" }}>✦</span>
            </span>
          ))}
        </div>
      </section>

    </div>
  );
}