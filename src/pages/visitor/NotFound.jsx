import { Link } from "react-router-dom";
import Button from "../../components/common/Button";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-5">
      <p className="text-7xl font-extrabold text-gold mb-4">404</p>
      <h1 className="text-2xl font-bold text-primary-800 mb-3">الصفحة غير موجودة</h1>
      <p className="text-primary-400 mb-8">عذراً، الصفحة التي تبحث عنها غير متوفرة.</p>
      <Button as={Link} to="/" variant="primary">
        العودة للرئيسية
      </Button>
    </div>
  );
}
