import { useState, useMemo } from "react";
import galleryData from "../../data/galleryData";
import GalleryGrid from "../../components/gallery/GalleryGrid";
import Modal from "../../components/common/Modal";

export default function Gallery() {
  const [selected, setSelected] = useState(null);
  const [yearFilter, setYearFilter] = useState("الكل");

  const years = ["الكل", ...Array.from(new Set(galleryData.map((g) => g.year))).sort()];

  const filtered = useMemo(() => {
    if (yearFilter === "الكل") return galleryData;
    return galleryData.filter((g) => g.year === yearFilter);
  }, [yearFilter]);

  return (
    <div className="max-w-6xl mx-auto px-5 lg:px-8 py-14">
      <div className="text-center mb-10">
        <h1 className="section-title inline-block text-3xl md:text-4xl font-extrabold text-primary-800 mb-3">
          معرض الصور
        </h1>
        <p className="text-primary-400 mt-4 max-w-2xl mx-auto">
          صور أرشيفية ونادرة توثق محطات بارزة من تاريخ الجزائر عبر مختلف الحقب.
        </p>
      </div>

      <div className="flex gap-2 overflow-x-auto scrollbar-none mb-8 justify-center">
        {years.map((y) => (
          <button
            key={y}
            onClick={() => setYearFilter(y)}
            className={`px-4 py-2 rounded-full text-xs font-bold shrink-0 transition-colors ${
              yearFilter === y ? "bg-primary text-cream" : "bg-white border border-primary-200 text-primary-600"
            }`}
          >
            {y}
          </button>
        ))}
      </div>

      <GalleryGrid items={filtered} onSelect={setSelected} />

      <Modal isOpen={!!selected} onClose={() => setSelected(null)} title={selected?.title}>
        {selected && (
          <div>
            <img src={selected.src} alt={selected.title} className="w-full rounded-xl mb-4 max-h-[60vh] object-cover" />
            <div className="flex items-center gap-3">
              <span className="px-3 py-1 rounded-full bg-gold/15 text-gold-dark text-xs font-bold">
                {selected.year}
              </span>
              <span className="px-3 py-1 rounded-full bg-primary-50 text-primary-600 text-xs font-bold">
                {selected.category}
              </span>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
}
