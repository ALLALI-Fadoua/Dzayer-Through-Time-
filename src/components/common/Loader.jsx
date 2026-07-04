export default function Loader({ label = "جاري التحميل..." }) {
  return (
    <div className="flex flex-col items-center justify-center py-16 gap-4">
      <div className="w-12 h-12 rounded-full border-4 border-primary-100 border-t-gold animate-spin" />
      <p className="text-primary-600 text-sm font-medium">{label}</p>
    </div>
  );
}
