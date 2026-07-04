export default function GalleryGrid({ items, onSelect }) {
  if (!items?.length) {
    return <p className="text-center text-primary-400 py-16">لا توجد نتائج مطابقة.</p>;
  }
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {items.map((item) => (
        <button
          key={item.id}
          onClick={() => onSelect(item)}
          className="relative group rounded-xl overflow-hidden aspect-square"
        >
          <img
            src={item.src}
            alt={item.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary-900/85 via-primary-900/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-3">
            <p className="text-cream text-sm font-bold text-right">{item.title}</p>
            <p className="text-gold text-xs text-right">{item.year}</p>
          </div>
        </button>
      ))}
    </div>
  );
}
