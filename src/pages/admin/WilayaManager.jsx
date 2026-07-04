import { useState } from "react";
import wilayaData from "../../data/wilayaData";
import AdminTable from "../../components/admin/AdminTable";
import Button from "../../components/common/Button";

const columns = [
  { key: "id", label: "رقم الولاية" },
  { key: "name", label: "الاسم" },
  { key: "population", label: "عدد السكان" },
  { key: "founded", label: "تُعرف بـ" },
];

export default function WilayaManager() {
  const [rows, setRows] = useState(wilayaData);

  function handleDelete(row) {
    if (confirm(`هل تريد حذف ولاية ${row.name}؟`)) {
      setRows(rows.filter((r) => r.id !== row.id));
    }
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-extrabold text-primary-800">إدارة الولايات</h1>
        <Button variant="gold" onClick={() => alert("هذه نسخة Mock — الإضافة غير مفعّلة بعد.")}>
          + إضافة ولاية
        </Button>
      </div>
      <AdminTable
        columns={columns}
        rows={rows}
        onEdit={() => alert("التعديل غير مفعّل في النسخة التجريبية.")}
        onDelete={handleDelete}
      />
    </div>
  );
}
