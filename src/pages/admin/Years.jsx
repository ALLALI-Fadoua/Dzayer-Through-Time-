import { useState } from "react";
import timelineData from "../../data/timelineData";
import AdminTable from "../../components/admin/AdminTable";
import Modal from "../../components/common/Modal";
import Button from "../../components/common/Button";

const columns = [
  { key: "year", label: "السنة" },
  { key: "title", label: "العنوان" },
  { key: "summary", label: "الملخص" },
];

export default function Years() {
  const [rows, setRows] = useState(timelineData.map((t) => ({ ...t, summary: t.summary.slice(0, 50) + "..." })));
  const [editing, setEditing] = useState(null);

  function handleDelete(row) {
    if (confirm(`هل تريد حذف سنة ${row.year}؟`)) {
      setRows(rows.filter((r) => r.id !== row.id));
    }
  }

  function handleSave(e) {
    e.preventDefault();
    setRows(rows.map((r) => (r.id === editing.id ? editing : r)));
    setEditing(null);
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-extrabold text-primary-800">إدارة السنوات</h1>
        <Button variant="gold" onClick={() => alert("هذه نسخة Mock — الإضافة غير مفعّلة بعد.")}>
          + إضافة سنة
        </Button>
      </div>

      <AdminTable columns={columns} rows={rows} onEdit={setEditing} onDelete={handleDelete} />

      <Modal isOpen={!!editing} onClose={() => setEditing(null)} title="تعديل السنة">
        {editing && (
          <form onSubmit={handleSave} className="space-y-4">
            <div>
              <label className="block text-sm font-bold text-primary-700 mb-1.5">العنوان</label>
              <input
                value={editing.title}
                onChange={(e) => setEditing({ ...editing, title: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl border border-primary-200 focus:border-gold focus:outline-none text-sm"
              />
            </div>
            <div>
              <label className="block text-sm font-bold text-primary-700 mb-1.5">الملخص</label>
              <textarea
                value={editing.summary}
                onChange={(e) => setEditing({ ...editing, summary: e.target.value })}
                rows={3}
                className="w-full px-4 py-2.5 rounded-xl border border-primary-200 focus:border-gold focus:outline-none text-sm"
              />
            </div>
            <Button type="submit" variant="primary" className="w-full justify-center">
              حفظ التعديلات
            </Button>
          </form>
        )}
      </Modal>
    </div>
  );
}
