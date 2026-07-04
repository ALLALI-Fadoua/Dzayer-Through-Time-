import { useState } from "react";
import Modal from "../common/Modal";
// ^ adjust this path if your Modal.jsx lives elsewhere (same folder as Icon.jsx)

export default function TimelineDetail({ item }) {
  const [selectedImage, setSelectedImage] = useState(null);

  if (!item) return null;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center bg-primary-700 text-cream rounded-3xl p-6 md:p-10 overflow-hidden relative">
      <div>
        <span className="inline-block px-4 py-1 rounded-full bg-gold text-primary-800 font-extrabold text-sm mb-4">
          {item.year}
        </span>
        <h3 className="text-2xl md:text-3xl font-extrabold mb-3">{item.title}</h3>
        <p className="text-primary-100 leading-relaxed mb-6">{item.summary}</p>
        <ul className="space-y-3">
          {item.highlights.map((h, idx) => (
            <li key={idx} className="flex items-start gap-3 text-sm text-primary-50">
              <span className="text-gold mt-0.5">✓</span>
              <span>{h}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="space-y-3">
        {/* Main image */}
        <div className="relative rounded-2xl overflow-hidden h-72 md:h-96 shadow-2xl">
          <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-primary-900/60 to-transparent" />
        </div>

        {/* Gallery thumbnails grid — click to open full image in modal */}
        {item.gallery && item.gallery.length > 0 && (
          <div className="grid grid-cols-4 gap-2">
            {item.gallery.map((src, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setSelectedImage(src)}
                className="relative aspect-square rounded-lg overflow-hidden border-2 border-transparent hover:border-gold focus:border-gold outline-none transition-colors group"
              >
                <img
                  src={src}
                  alt={`${item.title} ${idx + 1}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Full-size image modal */}
      <Modal
        isOpen={!!selectedImage}
        onClose={() => setSelectedImage(null)}
        title={item.title}
      >
        {selectedImage && (
          <img
            src={selectedImage}
            alt={item.title}
            className="w-full h-auto rounded-xl"
          />
        )}
      </Modal>
    </div>
  );
}