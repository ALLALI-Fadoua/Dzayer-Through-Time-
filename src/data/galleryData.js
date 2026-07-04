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

// بيانات معرض الصور — نفس الصور، السنوات والعناوين المستعملة في timelineData.js
// كل عنصر يستعمل المفتاح "src" لأن GalleryGrid.jsx يقرأ item.src فقط
const galleryData = [
  // 1962 - الاستقلال
  { id: 1, type: "image", year: 1962, title: "الاستقلال", category: "تاريخي", src: independenceImg },
  { id: 2, type: "image", year: 1962, title: "الاستقلال", category: "تاريخي", src: independenceImg2 },
  { id: 3, type: "image", year: 1962, title: "الاستقلال", category: "تاريخي", src: independenceImg3 },
  { id: 4, type: "image", year: 1962, title: "الاستقلال", category: "تاريخي", src: independenceImg4 },
  { id: 5, type: "image", year: 1962, title: "الاستقلال", category: "تاريخي", src: independenceImg5 },

  // 1970 - بناء الأسس
  { id: 6, type: "image", year: 1970, title: "بناء الأسس", category: "اقتصادي", src: foundationsImg },
  { id: 7, type: "image", year: 1970, title: "بناء الأسس", category: "اقتصادي", src: foundationsImg1 },
  { id: 8, type: "image", year: 1970, title: "بناء الأسس", category: "اقتصادي", src: foundationsImg2 },
  { id: 9, type: "image", year: 1970, title: "بناء الأسس", category: "اقتصادي", src: foundationsImg3 },
  { id: 10, type: "image", year: 1970, title: "بناء الأسس", category: "اقتصادي", src: foundationsImg4 },

  // 1980 - التوسع والتنمية
  { id: 11, type: "image", year: 1980, title: "التوسع والتنمية", category: "تعليم", src: developmentImg },
  { id: 12, type: "image", year: 1980, title: "التوسع والتنمية", category: "تعليم", src: developmentImg1 },
  { id: 13, type: "image", year: 1980, title: "التوسع والتنمية", category: "تعليم", src: developmentImg3 },
  { id: 14, type: "image", year: 1980, title: "التوسع والتنمية", category: "تعليم", src: developmentImg4 },

  // 1990 - مرحلة التحولات
  { id: 15, type: "image", year: 1990, title: "مرحلة التحولات", category: "إعلام", src: transformationsImg1 },
  { id: 16, type: "image", year: 1990, title: "مرحلة التحولات", category: "إعلام", src: transformationsImg2 },
  { id: 17, type: "image", year: 1990, title: "مرحلة التحولات", category: "إعلام", src: transformationsImg3 },

  // 2000 - الانفتاح والمصالحة
  { id: 18, type: "image", year: 2000, title: "الانفتاح والمصالحة", category: "اجتماعي", src: reconciliationImg },
  { id: 19, type: "image", year: 2000, title: "الانفتاح والمصالحة", category: "اجتماعي", src: reconciliationImg1 },
  { id: 20, type: "image", year: 2000, title: "الانفتاح والمصالحة", category: "اجتماعي", src: reconciliationImg2 },

  // 2010 - تحديث البنى التحتية
  { id: 21, type: "image", year: 2010, title: "تحديث البنى التحتية", category: "بنية تحتية", src: infrastructureImg },
  { id: 22, type: "image", year: 2010, title: "تحديث البنى التحتية", category: "بنية تحتية", src: infrastructureImg1 },
  { id: 23, type: "image", year: 2010, title: "تحديث البنى التحتية", category: "بنية تحتية", src: infrastructureImg2 },
  { id: 24, type: "image", year: 2010, title: "تحديث البنى التحتية", category: "بنية تحتية", src: infrastructureImg3 },

  // 2020 - الجزائر الجديدة
  { id: 25, type: "image", year: 2020, title: "الجزائر الجديدة", category: "سياسي", src: newAlgeriaImg },
  { id: 26, type: "image", year: 2020, title: "الجزائر الجديدة", category: "سياسي", src: newAlgeriaImg1 },
  { id: 27, type: "image", year: 2020, title: "الجزائر الجديدة", category: "سياسي", src: newAlgeriaImg2 },
  { id: 28, type: "image", year: 2020, title: "الجزائر الجديدة", category: "سياسي", src: newAlgeriaImg3 },
  { id: 29, type: "image", year: 2020, title: "الجزائر الجديدة", category: "سياسي", src: newAlgeriaImg4 },

  // 2026 - من الماضي إلى المستقبل
  { id: 30, type: "image", year: 2026, title: "من الماضي إلى المستقبل", category: "عمران", src: prosperityImg },
  { id: 31, type: "image", year: 2026, title: "من الماضي إلى المستقبل", category: "عمران", src: prosperityImg1 },
  { id: 32, type: "image", year: 2026, title: "من الماضي إلى المستقبل", category: "عمران", src: prosperityImg2 },
  { id: 33, type: "image", year: 2026, title: "من الماضي إلى المستقبل", category: "عمران", src: prosperityImg3 },
  { id: 34, type: "image", year: 2026, title: "من الماضي إلى المستقبل", category: "عمران", src: prosperityImg4 },
];

export default galleryData;