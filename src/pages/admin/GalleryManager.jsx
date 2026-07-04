import { useState } from "react";
import galleryData from "../../data/galleryData";
import Button from "../../components/common/Button";
import Icon from "../../components/common/Icon";

export default function GalleryManager() {
  const [rows, setRows] = useState(galleryData);

  function handleDelete(id) {
    if (confirm("هل تريد حذف هذا العنصر؟")) {
      setRows(rows.filter((r) => r.id !== id));
    }
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-extrabold text-primary-800">إدارة الصور والفيديوهات</h1>
        <Button variant="gold" icon={<Icon name="plus" size={16} strokeWidth={2} />} onClick={() => alert("هذه نسخة Mock — الرفع غير مفعّل بعد.")}>
          رفع صورة/فيديو
        </Button>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {rows.map((item) => (
          <div key={item.id} className="bg-white rounded-xl overflow-hidden border border-primary-100/60 group relative">
            <img src={item.src} alt={item.title} className="w-full h-32 object-cover" />
            <div className="p-3">
              <p className="text-xs font-bold text-primary-800 truncate">{item.title}</p>
              <p className="text-[11px] text-primary-400">{item.year}</p>
            </div>
            <button
              onClick={() => handleDelete(item.id)}
              className="absolute top-2 left-2 w-7 h-7 flex items-center justify-center rounded-full bg-red-600 text-white opacity-0 group-hover:opacity-100 transition-opacity"
            >
              <Icon name="close" size={14} strokeWidth={2} />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}