import { useEffect, useRef } from "react";

// Hook لإضافة تأثير الظهور التدريجي عند التمرير
export default function useScrollReveal(options = { threshold: 0.15 }) {
  const ref = useRef(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        node.classList.add("visible");
        observer.unobserve(node);
      }
    }, options);

    node.classList.add("reveal");
    observer.observe(node);

    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return ref;
}
