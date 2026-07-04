import { useState, useMemo } from "react";
import geoData from "../../data/algeriaWilayas.json";
// ^ adjust this path — put algeriaWilayas.json in src/data/ (or wherever your
// other data files like timelineData.js live) and update the import accordingly.

const { viewBox, wilayas: GEO_WILAYAS } = geoData;
// GEO_WILAYAS: [{ code: "16", slug: "algiers-16", nameLatin: "Algiers", nameAr: "الجزائر", d: "..." }, ...]
// Real boundaries for all 69 wilayas (source: chemsallioua/Algeria69WilayaMap, MIT licensed).

/**
 * @param wilayas  optional array of YOUR extra wilaya data (population, description, etc).
 *                 Matched to the real map data by `code`, `id`, `slug`, or `name`/`nameLatin`.
 * @param activeId the wilaya `code` to highlight (e.g. "16" for Alger), not the old x/y id.
 * @param onSelect called with { code, slug, nameLatin, nameAr, ...yourExtraData }
 */
export default function AlgeriaSvgMap({ wilayas, activeId, onSelect }) {
  const [hoveredCode, setHoveredCode] = useState(null);

  const extraByCode = useMemo(() => {
    const map = {};
    if (wilayas) {
      wilayas.forEach((w) => {
        const key = w.code ?? w.id ?? w.slug;
        if (key != null) map[String(key)] = w;
      });
    }
    return map;
  }, [wilayas]);

  const findExtra = (geo) =>
    extraByCode[geo.code] ||
    extraByCode[geo.slug] ||
    wilayas?.find(
      (w) => w.name && w.name.toLowerCase() === geo.nameLatin.toLowerCase()
    );

  const hovered = GEO_WILAYAS.find((w) => w.code === hoveredCode);
  const active = GEO_WILAYAS.find((w) => String(w.code) === String(activeId));
  const displayed = hovered || active;

  return (
    <div className="relative bg-primary-50 rounded-3xl p-6 md:p-10 overflow-hidden">
      {/* Name readout above the map — much more reliable than floating a label
          over an irregular path shape */}
      <div className="text-center mb-4 h-12">
        {displayed && (
          <div className="inline-flex flex-col items-center gap-0.5">
            <span className="text-lg font-extrabold text-primary-800">
              {displayed.nameAr}
            </span>
            <span className="text-xs font-semibold text-primary-400 uppercase tracking-wide">
              {displayed.nameLatin}
            </span>
          </div>
        )}
      </div>

      <div className="relative w-full max-w-2xl mx-auto">
        <svg viewBox={viewBox} className="w-full h-auto">
          <g transform="translate(-862.86 -943.66)">
            {GEO_WILAYAS.map((w) => {
              const isActive = String(w.code) === String(activeId);
              const isHovered = w.code === hoveredCode;
              return (
                <path
                  key={w.code}
                  d={w.d}
                  onClick={() => onSelect({ ...w, ...findExtra(w) })}
                  onMouseEnter={() => setHoveredCode(w.code)}
                  onMouseLeave={() => setHoveredCode(null)}
                  strokeWidth={6}
                  className={`stroke-white cursor-pointer transition-colors duration-200 ${
                    isActive
                      ? "fill-primary-700"
                      : isHovered
                      ? "fill-primary-400"
                      : "fill-primary-600/25 hover:fill-primary-400"
                  }`}
                >
                  <title>
                    {w.nameAr} — {w.nameLatin}
                  </title>
                </path>
              );
            })}
          </g>
        </svg>
      </div>
    </div>
  );
}