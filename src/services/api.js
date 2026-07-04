// طبقة API مركزية — حالياً تعمل بدون اتصال حقيقي (Mock Mode)
// عند ربط Backend حقيقي، يكفي تفعيل axios/fetch هنا دون تغيير بقية المشروع

const USE_MOCK = true;
const BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:3000/api";

async function request(endpoint, options = {}) {
  if (USE_MOCK) {
    console.warn(`[Mock Mode] تم استدعاء ${endpoint} لكن التطبيق يعمل حالياً بـ Mock Data`);
    return Promise.resolve(null);
  }

  const res = await fetch(`${BASE_URL}${endpoint}`, {
    headers: { "Content-Type": "application/json" },
    ...options,
  });

  if (!res.ok) {
    throw new Error(`خطأ في الطلب: ${res.status}`);
  }
  return res.json();
}

export default { request, BASE_URL, USE_MOCK };
