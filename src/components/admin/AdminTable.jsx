import Icon from "../common/Icon";

export default function AdminTable({ columns, rows, onEdit, onDelete }) {
  return (
    <div className="bg-white rounded-2xl border border-primary-100/60 overflow-hidden">
      <table className="w-full text-sm">
        <thead className="bg-primary-50 text-primary-700">
          <tr>
            {columns.map((c) => (
              <th key={c.key} className="px-4 py-3 text-right font-bold">{c.label}</th>
            ))}
            <th className="px-4 py-3 text-right font-bold">إجراءات</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.id} className="border-t border-primary-50 hover:bg-primary-50/50">
              {columns.map((c) => (
                <td key={c.key} className="px-4 py-3 text-primary-800">{row[c.key]}</td>
              ))}
              <td className="px-4 py-3">
                <div className="flex gap-2">
                  <button
                    onClick={() => onEdit?.(row)}
                    className="w-8 h-8 flex items-center justify-center rounded-lg bg-primary-100 text-primary-700 hover:bg-primary-600 hover:text-white transition-colors"
                    aria-label="تعديل"
                  >
                    <Icon name="pencil" size={15} strokeWidth={1.8} />
                  </button>
                  <button
                    onClick={() => onDelete?.(row)}
                    className="w-8 h-8 flex items-center justify-center rounded-lg bg-red-50 text-red-600 hover:bg-red-600 hover:text-white transition-colors"
                    aria-label="حذف"
                  >
                    <Icon name="trash" size={15} strokeWidth={1.8} />
                  </button>
                </div>
              </td>
            </tr>
          ))}
          {!rows.length && (
            <tr>
              <td colSpan={columns.length + 1} className="text-center py-10 text-primary-400">
                لا توجد بيانات بعد.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}