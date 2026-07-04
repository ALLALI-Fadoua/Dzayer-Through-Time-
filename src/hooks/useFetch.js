import { useEffect, useState } from "react";

// Hook بسيط لمحاكاة جلب البيانات (يستعمل حالياً Mock Data)
// لاحقاً يمكن استبدال الدالة الممررة بنداء API حقيقي عبر services/api.js
export default function useFetch(fetcherFn, deps = []) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let active = true;
    setLoading(true);
    setError(null);

    Promise.resolve(fetcherFn())
      .then((res) => {
        if (active) setData(res);
      })
      .catch((err) => {
        if (active) setError(err);
      })
      .finally(() => {
        if (active) setLoading(false);
      });

    return () => {
      active = false;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);

  return { data, loading, error };
}
