import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import Button from "../../components/common/Button";
import logo from "../../assets/images/logo.png";

export default function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      await login(username, password);
      navigate("/admin/dashboard");
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-primary-800 flex items-center justify-center px-5">
      <div className="bg-white rounded-2xl p-8 w-full max-w-md shadow-2xl">
        <div className="text-center mb-8">
          <img
            src={logo}
            alt="دزاير عبر الزمن"
            className="w-16 h-16 mx-auto mb-4"
          />
          <h1 className="text-xl font-extrabold text-primary-800">فضاء الإدارة</h1>
          <p className="text-xs text-primary-400 mt-1">دزاير عبر الزمن</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-bold text-primary-700 mb-1.5">اسم المستخدم</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="admin"
              className="w-full px-4 py-2.5 rounded-xl border border-primary-200 focus:border-gold focus:outline-none text-sm"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-bold text-primary-700 mb-1.5">كلمة المرور</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="w-full px-4 py-2.5 rounded-xl border border-primary-200 focus:border-gold focus:outline-none text-sm"
              required
            />
          </div>

          {error && <p className="text-sm text-red-600 font-semibold">{error}</p>}

          <Button type="submit" variant="primary" className="w-full justify-center" disabled={loading}>
            {loading ? "جاري الدخول..." : "تسجيل الدخول"}
          </Button>
        </form>
      </div>
    </div>
  );
}