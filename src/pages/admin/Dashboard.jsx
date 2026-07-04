import timelineData from "../../data/timelineData";
import eventsData from "../../data/eventsData";
import galleryData from "../../data/galleryData";
import wilayaData from "../../data/wilayaData";
import AdminStatCard from "../../components/admin/AdminStatCard";
import Icon from "../../components/common/Icon";
import { useAuth } from "../../context/AuthContext";

export default function Dashboard() {
  const { user } = useAuth();

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-extrabold text-primary-800">مرحباً، {user?.name || "مدير الموقع"} 👋</h1>
        <p className="text-primary-400 text-sm mt-1">نظرة عامة على محتوى موقع دزاير عبر الزمن</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
        <AdminStatCard icon={<Icon name="calendar" size={22} />} label="سنوات الخط الزمني" value={timelineData.length} />
        <AdminStatCard icon={<Icon name="event" size={22} />} label="الأحداث التاريخية" value={eventsData.length} accent="gold" />
        <AdminStatCard icon={<Icon name="image" size={22} />} label="الصور والفيديوهات" value={galleryData.length} />
        <AdminStatCard icon={<Icon name="wilaya" size={22} />} label="الولايات المضافة" value={wilayaData.length} accent="gold" />
      </div>

      <div className="bg-white rounded-2xl border border-primary-100/60 p-6">
        <h2 className="font-bold text-primary-800 mb-4">آخر الأحداث المضافة</h2>
        <div className="space-y-3">
          {eventsData.slice(-5).reverse().map((e) => (
            <div key={e.id} className="flex items-center justify-between py-2 border-b border-primary-50 last:border-0">
              <div>
                <p className="font-semibold text-primary-800 text-sm">{e.title}</p>
                <p className="text-xs text-primary-400">{e.date}</p>
              </div>
              <span className="text-xs px-3 py-1 rounded-full bg-primary-50 text-primary-600 font-bold">
                {e.category}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}