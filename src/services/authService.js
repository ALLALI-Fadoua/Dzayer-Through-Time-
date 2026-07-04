// خدمة المصادقة — Mock Mode
const MOCK_ADMIN = { username: "admin", password: "admin123" };

export async function login(username, password) {
  await new Promise((r) => setTimeout(r, 600));
  if (username === MOCK_ADMIN.username && password === MOCK_ADMIN.password) {
    const fakeToken = "mock-jwt-token-" + Date.now();
    localStorage.setItem("dzayer_admin_token", fakeToken);
    return { success: true, token: fakeToken, user: { name: "مدير الموقع", username } };
  }
  throw new Error("اسم المستخدم أو كلمة المرور غير صحيحة");
}

export function logout() {
  localStorage.removeItem("dzayer_admin_token");
}

export function getToken() {
  return localStorage.getItem("dzayer_admin_token");
}

export function isAuthenticated() {
  return !!getToken();
}
