export default function Card({ children, className = "", hover = true, padding = "p-6" }) {
  return (
    <div
      className={`bg-white rounded-2xl border border-primary-100/60 shadow-[0_8px_30px_rgba(11,61,46,0.06)] ${padding} ${
        hover ? "transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_14px_36px_rgba(11,61,46,0.12)]" : ""
      } ${className}`}
    >
      {children}
    </div>
  );
}
