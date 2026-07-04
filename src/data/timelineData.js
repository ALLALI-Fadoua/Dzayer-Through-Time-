import independenceImg from "../assets/images/عيد الإستقلال__.jpg";
import independenceImg2 from "../assets/images/عيد الإستقلال2.jpg";
import independenceImg3 from "../assets/images/عيد الإستقلال3.jpg";
import independenceImg4 from "../assets/images/عيد الإستقلال4.jpg";
import independenceImg5 from "../assets/images/عيد الإستقلال5.jpg";

import foundationsImg from "../assets/images/بناء الأسس.jpg";
import foundationsImg1 from "../assets/images/بناء الأسس1.jpg";
import foundationsImg2 from "../assets/images/بناء الأسس2.jpg";
import foundationsImg3 from "../assets/images/بناء الأسس3.jpg";
import foundationsImg4 from "../assets/images/بناء الأسس4.jpg";

import developmentImg from "../assets/images/التوسع والتنمية.jpg";
import developmentImg1 from "../assets/images/التوسع والتنمية1.jpg";
import developmentImg3 from "../assets/images/التوسع والتنمية3.jpg";
import developmentImg4 from "../assets/images/التوسع والتنمية4.jpg";

import transformationsImg1 from "../assets/images/مرحلة التحولات1.jpg";
import transformationsImg2 from "../assets/images/مرحلة التحولات2.jpg";
import transformationsImg3 from "../assets/images/مرحلة التحولات3.jpg";

import reconciliationImg from "../assets/images/الانفتاح والمصالحة.jpg";
import reconciliationImg1 from "../assets/images/الانفتاح والمصالحة1.jpg";
import reconciliationImg2 from "../assets/images/الانفتاح والمصالحة2.jpg";

import infrastructureImg from "../assets/images/تحديث البنى التحتية.jpg";
import infrastructureImg1 from "../assets/images/تحديث البنى التحتية1.jpg";
import infrastructureImg2 from "../assets/images/تحديث البنى التحتية2.jpg";
import infrastructureImg3 from "../assets/images/تحديث البنى التحتية3.jpg";

import newAlgeriaImg from "../assets/images/الجزائر الجديدة.jpg";
import newAlgeriaImg1 from "../assets/images/الجزائر الجديدة1.jpg";
import newAlgeriaImg2 from "../assets/images/الجزائر الجديدة2.jpg";
import newAlgeriaImg3 from "../assets/images/الجزائر الجديدة3.jpg";
import newAlgeriaImg4 from "../assets/images/الجزائر الجديدة4.jpg";

import prosperityImg from "../assets/images/ازدهار الجزائر.jpg";
import prosperityImg1 from "../assets/images/ازدهار الجزائر1.jpg";
import prosperityImg2 from "../assets/images/ازدهار الجزائر2.webp";
import prosperityImg3 from "../assets/images/ازدهار الجزائر3.jpg";
import prosperityImg4 from "../assets/images/ازدهار الجزائر4.jpg";

const timelineData = [
  {
    id: 1,
    year: 1962,
    title: "الاستقلال",
    icon: "🕊️",
    summary: "استرجاع الجزائر لسيادتها الوطنية بعد 132 سنة من الاستعمار الفرنسي ونضال شعبي طويل.",
    highlights: [
      "إعلان استقلال الجزائر في 5 جويلية 1962",
      "تأسيس أول حكومة جزائرية مستقلة",
      "انطلاق مرحلة بناء الدولة الوطنية",
      "عودة مئات الآلاف من اللاجئين إلى الوطن",
    ],
    image: independenceImg,
    gallery: [
      independenceImg2,
      independenceImg3,
      independenceImg4,
      independenceImg5,
    ],
  },
  {
    id: 2,
    year: 1970,
    title: "بناء الأسس",
    icon: "🏗️",
    summary: "انطلاق مرحلة التأميمات الكبرى وبداية النهضة الصناعية في عهد بناء الاقتصاد الوطني.",
    highlights: [
      "تأميم المحروقات وبداية النهضة الصناعية (1971)",
      "مشاريع البنية التحتية الكبرى",
      "تطور قطاعي التعليم والصحة",
      "نمو الاقتصاد الوطني بشكل ملحوظ",
    ],
    image: foundationsImg,
    gallery: [
      foundationsImg1,
      foundationsImg2,
      foundationsImg3,
      foundationsImg4,
    ],
  },
  {
    id: 3,
    year: 1980,
    title: "التوسع والتنمية",
    icon: "🎓",
    summary: "توسع كبير في شبكة الجامعات والمؤسسات التعليمية ودخول الجزائر مرحلة جديدة من التحديث.",
    highlights: [
      "افتتاح عشرات الجامعات عبر التراب الوطني",
      "تطور شبكة النقل والمواصلات",
      "بروز جيل جديد من الكفاءات الوطنية",
      "تنويع النشاط الاقتصادي والصناعي",
    ],
    image: developmentImg,
    gallery: [
      developmentImg1,
      developmentImg3,
      developmentImg4,
    ],
  },
  {
    id: 4,
    year: 1990,
    title: "مرحلة التحولات",
    icon: "📺",
    summary: "عقد شهد تحولات سياسية واقتصادية عميقة وانفتاحاً إعلامياً غير مسبوق.",
    highlights: [
      "انفتاح المشهد الإعلامي والسياسي",
      "إصلاحات اقتصادية هيكلية",
      "صمود الدولة الجزائرية ووحدة الشعب",
      "بداية التعافي الاقتصادي أواخر العقد",
    ],
    image: transformationsImg1,
    gallery: [
      transformationsImg2,
      transformationsImg3,
    ],
  },
  {
    id: 5,
    year: 2000,
    title: "الانفتاح والمصالحة",
    icon: "🌍",
    summary: "استعادة السلم الأهلي وانطلاق برامج التنمية الكبرى وعودة الجزائر لمكانتها الإقليمية.",
    highlights: [
      "ميثاق الوئام المدني والمصالحة الوطنية",
      "إطلاق برامج الإنعاش الاقتصادي",
      "تطور قطاع الاتصالات والإنترنت",
      "مشاريع البنية التحتية الكبرى (الطريق السيار)",
    ],
    image: reconciliationImg,
    gallery: [
      reconciliationImg1,
      reconciliationImg2,
    ],
  },
  {
    id: 6,
    year: 2010,
    title: "تحديث البنى التحتية",
    icon: "🚄",
    summary: "إنجازات كبرى في النقل والتعمير وتحسين جودة حياة المواطن عبر كامل الوطن.",
    highlights: [
      "تدشين مترو وترامواي الجزائر العاصمة",
      "إنجاز الطريق السيار شرق-غرب",
      "توسع المدن الجديدة والسكن",
      "تطور قطاعي الصحة والتعليم العالي",
    ],
    image: infrastructureImg3,
    gallery: [
      infrastructureImg1,
      infrastructureImg2,
      infrastructureImg,
    ],
  },
  {
    id: 7,
    year: 2020,
    title: "الجزائر الجديدة",
    icon: "🇩🇿",
    summary: "حراك شعبي سلمي وإصلاحات مؤسساتية ترسم ملامح جزائر جديدة قائمة على الشفافية.",
    highlights: [
      "الحراك الشعبي السلمي لفيفري 2019",
      "تعديل الدستور وإصلاحات مؤسساتية",
      "دعم الاقتصاد الرقمي والمؤسسات الناشئة",
      "مواجهة جائحة كوفيد-19 بنجاح",
    ],
    image: newAlgeriaImg,
    gallery: [
      newAlgeriaImg1,
      newAlgeriaImg2,
      newAlgeriaImg3,
      newAlgeriaImg4,
    ],
  },
  {
    id: 8,
    year: 2026,
    title: "من الماضي إلى المستقبل",
    icon: "🚀",
    summary: "جزائر طموحة تستثمر في الطاقات المتجددة والتكنولوجيا وتستعد لعقود قادمة من الازدهار.",
    highlights: [
      "مشاريع الطاقات المتجددة الكبرى",
      "تطور المدن الذكية والاقتصاد الرقمي",
      "استثمارات ضخمة في الشباب والابتكار",
      "إشعاع الجزائر إقليمياً ودولياً",
    ],
    image: prosperityImg,
    gallery: [
      prosperityImg1,
      prosperityImg2,
      prosperityImg3,
      prosperityImg4,
    ],
  },
];

export default timelineData;