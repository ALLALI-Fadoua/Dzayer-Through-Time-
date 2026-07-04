// استيراد الصور المحلية من مجلد assets/images
// ملاحظة: Vite يتعامل مع الصور كوحدات (modules)، لذلك لازم import وليس مجرد كتابة المسار كنص
import heroAlgeria from "../assets/images/عيد الإستقلال__.jpg";
import izdiharAlgeria from "../assets/images/ازدهار الجزائر3.jpg";
import izdiharAlgeria5 from "../assets/images/صورة-صفحة-5-1.jpg";
import izdiharAlgeria6 from "../assets/images/5e136c5c-9a27-426b-a33f-3b1b32fe9162.webp";
import izdiharAlgeria1 from "../assets/images/ازدهار الجزائر1.jpg";
import izdiharAlgeria2 from "../assets/images/ChatGPT Image 4 juil. 2026, 06_25_42.png";
import izdiharAlgeria3 from "../assets/images/الانفتاح والمصالحة2.jpg";
import infitahMoussalaha from "../assets/images/7b5ec9e0-5c0b-11ef-b970-9f202720b57a.jpg.webp";
import infitahMoussalaha1 from "../assets/images/الجزائر الجديدة3.jpg";
import infitahMoussalaha9 from "../assets/images/الانفتاح والمصالحة.jpg";

// بيانات تجريبية للأحداث التاريخية البارزة
const eventsData = [
  {
    id: 1,
    year: 1962,
    date: "05 جويلية 1962",
    title: "إعلان استقلال الجزائر",
    category: "سياسي",
    description: "اليوم التاريخي الذي استرجعت فيه الجزائر سيادتها الكاملة بعد كفاح طويل.",
    image: heroAlgeria,
  },
  {
    id: 2,
    year: 1963,
    date: "سبتمبر 1963",
    title: "أول دستور جزائري",
    description: "المصادقة على أول دستور للجمهورية الجزائرية الحديثة.",
    category: "سياسي",
    image: izdiharAlgeria6,
  },
  {
    id: 3,
    year: 1971,
    date: "24 فيفري 1971",
    title: "تأميم المحروقات",
    description: "قرار تاريخي استعادت به الجزائر السيادة الكاملة على ثرواتها النفطية والغازية.",
    category: "اقتصادي",
    image: izdiharAlgeria,
  },
  {
    id: 4,
    year: 1989,
    date: "فيفري 1989",
    title: "دستور التعددية",
    description: "اعتماد دستور جديد يكرس التعددية الحزبية وحرية التعبير.",
    category: "سياسي",
    image: izdiharAlgeria2,
  },
  {
    id: 5,
    year: 1999,
    date: "سبتمبر 1999",
    title: "ميثاق الوئام المدني",
    description: "استفتاء شعبي حول مشروع الوئام المدني لإنهاء العشرية السوداء.",
    category: "اجتماعي",
    image: infitahMoussalaha,
  },
  {
    id: 6,
    year: 2006,
    date: "2006",
    title: "إنطلاق أشغال الطريق السيار شرق-غرب",
    description: "أحد أكبر مشاريع البنية التحتية في إفريقيا بطول يفوق 1200 كم.",
    category: "بنية تحتية",
    image: izdiharAlgeria3,
  },
  {
    id: 7,
    year: 2011,
    date: "نوفمبر 2011",
    title: "تدشين مترو الجزائر",
    description: "افتتاح أول خط مترو في الجزائر العاصمة وشمال إفريقيا.",
    category: "بنية تحتية",
    image: infitahMoussalaha9,
  },
  {
    id: 8,
    year: 2019,
    date: "22 فيفري 2019",
    title: "انطلاق الحراك الشعبي",
    description: "حراك شعبي سلمي واسع طالب بالتغيير والإصلاح المؤسساتي.",
    category: "اجتماعي",
    image: infitahMoussalaha1,
  },
  {
    id: 9,
    year: 2020,
    date: "نوفمبر 2020",
    title: "تعديل الدستور",
    description: "استفتاء شعبي على تعديل دستوري يعزز الحقوق والحريات.",
    category: "سياسي",
    image: izdiharAlgeria5,
  },
  {
    id: 10,
    year: 2023,
    date: "2023",
    title: "إطلاق برنامج الطاقات المتجددة",
    description: "مخطط وطني طموح لإنتاج الكهرباء من الطاقة الشمسية.",
    category: "اقتصادي",
    image: izdiharAlgeria1,
  },
];

export default eventsData;