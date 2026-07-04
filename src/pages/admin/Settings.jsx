import { useState } from "react";
import Button from "../../components/common/Button";
import { useAuth } from "../../context/AuthContext";

export default function Settings() {
  const { user } = useAuth();
  const [siteName, setSiteName] = useState("دزاير عبر الزمن");
  const [tagline, setTagline] = useState("رحلة الجزائر من 1962 إلى اليوم");

  function handleSave(e) {
    e.preventDefault();
    alert("تم حفظ الإعدادات (نسخة Mock).");
  }

  return (
    <div className="max-w-2xl">
      <h1 className="text-2xl font-extrabold text-primary-800 mb-6">الإعدادات العامة</h1>

      <form onSubmit={handleSave} className="bg-white rounded-2xl border border-primary-100/60 p-6 space-y-5">
        <div>
          <label className="block text-sm font-bold text-primary-700 mb-1.5">اسم الموقع</label>
          <input
            value={siteName}
            onChange={(e) => setSiteName(e.target.value)}
            className="w-full px-4 py-2.5 rounded-xl border border-primary-200 focus:border-gold focus:outline-none text-sm"
          />
        </div>
        <div>
          <label className="block text-sm font-bold text-primary-700 mb-1.5">الوصف المختصر</label>
          <input
            value={tagline}
            onChange={(e) => setTagline(e.target.value)}
            className="w-full px-4 py-2.5 rounded-xl border border-primary-200 focus:border-gold focus:outline-none text-sm"
          />
        </div>
        <div>
          <label className="block text-sm font-bold text-primary-700 mb-1.5">اسم المدير</label>
          <input
            value={user?.name || ""}
            disabled
            className="w-full px-4 py-2.5 rounded-xl border border-primary-100 bg-primary-50 text-sm text-primary-400"
          />
        </div>
        <Button type="submit" variant="primary">
          حفظ الإعدادات
        </Button>
      </form>
    </div>
  );
}
