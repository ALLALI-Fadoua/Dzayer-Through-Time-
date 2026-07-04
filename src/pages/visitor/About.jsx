import Icon from "../../components/common/Icon";

const sections = [
  { icon: "home",     title: "الرئيسية",       desc: "نبذة عن المشروع وبداية الرحلة." },
  { icon: "clock",    title: "عبر الزمن",       desc: "خط زمني تفاعلي من 1962 إلى 2026." },
  { icon: "calendar", title: "الأحداث",         desc: "أهم الأحداث والمحطات في تاريخ الجزائر." },
  { icon: "chart",    title: "الإحصائيات",      desc: "تطور الأرقام في مختلف المجالات عبر السنوات." },
  { icon: "map",      title: "المدن",           desc: "تطور أهم المدن الجزائرية صور ومعلومات." },
  { icon: "image",    title: "معرض الصور",      desc: "صور أرشيفية ونادرة عبر مختلف الحقب." },
  { icon: "star",     title: "إنجازات الجزائر", desc: "أبرز الإنجازات الوطنية في شتى المجالات." },
  { icon: "info",     title: "عن المشروع",      desc: "حول الموقع، الهدف والمصدر." },
];

export default function About() {
  return (
    <div className="max-w-5xl mx-auto px-5 lg:px-8 py-14">
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-extrabold mb-2" style={{ color: "#0B3D2E" }}>
          عن المشروع
        </h1>
        <div className="w-12 h-1 mx-auto rounded-full mt-3" style={{ backgroundColor: "#C9A227" }} />
      </div>

      <div className="bg-white rounded-2xl p-8 mb-10 shadow-sm border border-gray-100">
        <p className="text-gray-700 leading-relaxed text-lg">
          <strong style={{ color: "#0B3D2E" }}>دزاير عبر الزمن</strong> هي منصة ويب تفاعلية تدعو الزوار لاستكشاف مسيرة الجزائر منذ استقلالها سنة 1962 إلى يومنا هذا. عبر خط زمني غامر، يسلّط الموقع الضوء على الأحداث البارزة، الإنجازات الوطنية، الإحصائيات، الصور التاريخية، وكذلك التحولات التي عرفها الوطن على مدى العقود.
        </p>
        <p className="text-gray-700 leading-relaxed text-lg mt-4">
          هدف المشروع هو الحفاظ على الذاكرة الجماعية، وتثمين التراث التاريخي الجزائري، وتقديم تجربة رقمية عصرية.
        </p>
      </div>

      <h2 className="text-xl font-extrabold mb-6 text-center" style={{ color: "#0B3D2E" }}>
        أقسام الموقع
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
        {sections.map((s) => (
          <div key={s.title} className="bg-white rounded-2xl p-5 text-center border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-10 h-10 rounded-xl flex items-center justify-center mx-auto mb-3" style={{ backgroundColor: "#EDE8DC" }}>
              <Icon name={s.icon} size={20} color="#0B3D2E" strokeWidth={1.5} />
            </div>
            <h3 className="font-bold mb-1 text-sm" style={{ color: "#0B3D2E" }}>{s.title}</h3>
            <p className="text-xs text-gray-500 leading-relaxed">{s.desc}</p>
          </div>
        ))}
      </div>

      <div className="rounded-2xl p-8 text-center" style={{ backgroundColor: "#0B3D2E", color: "#fff" }}>
        <p className="text-xl font-extrabold mb-2">64 سنة من النضال، البناء والتطور...</p>
        <p style={{ color: "#C9A227" }}>وهذه حكاية مستمرة 🇩🇿</p>
      </div>
    </div>
  );
}
