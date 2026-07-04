import { useEffect } from "react";
import Icon from "./Icon";

export default function Modal({ isOpen, onClose, children, title }) {
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && onClose?.();
    if (isOpen) document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 backdrop-blur-sm p-4"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl max-w-3xl w-full max-h-[88vh] overflow-y-auto shadow-2xl animate-[fadeIn_0.25s_ease]"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between px-6 py-4 border-b border-primary-50 sticky top-0 bg-white z-10">
          {title && <h3 className="text-lg font-bold text-primary-700">{title}</h3>}
          <button
            onClick={onClose}
            className="w-9 h-9 flex items-center justify-center rounded-full bg-primary-50 text-primary-600 hover:bg-gold hover:text-white transition-colors"
            aria-label="إغلاق"
          >
            <Icon name="close" size={16} strokeWidth={2} />
          </button>
        </div>
        <div className="p-6">{children}</div>
      </div>
    </div>
  );
}