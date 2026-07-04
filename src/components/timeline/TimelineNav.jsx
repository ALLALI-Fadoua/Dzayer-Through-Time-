import Icon from "../common/Icon";
// ^ adjust this path if your Icon.jsx lives elsewhere (e.g. "../../components/common/Icon")

// Mapped by YEAR (not by item.icon) so this works immediately regardless of
// what's currently stored in timelineData.js. If you add new years later,
// add an entry here too — otherwise it falls back to the "info" icon.
const ICON_NAME_BY_YEAR = {
  2026: "rocket", // future / innovation
  2020: "device_phone", // digital transformation
  2010: "truck", // infrastructure / transport
  2000: "globe", // globalization / opening up
  1990: "screen", // media era
  1980: "academic_cap", // education push
  1970: "building_library", // nation-building / institutions
  1962: "flag", // independence
};

// Circle sizes grow with the breakpoint so they fill the available track width
// instead of staying a fixed 56px on large screens. Keep CIRCLE_SIZES and
// LINE_OFFSETS in sync (offset = size / 2) so the connector line stays centered.
const CIRCLE_SIZES =
  "w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 xl:w-24 xl:h-24";
const LINE_OFFSETS = "top-6 sm:top-7 md:top-8 lg:top-10 xl:top-12";

export default function TimelineNav({ years, activeYear, onSelect }) {
  return (
    <div className="relative">
      <div
        className={`absolute ${LINE_OFFSETS} left-0 right-0 h-[2px] bg-primary-100 hidden md:block`}
      />

      <div
        className="overflow-x-auto pb-3 md:pb-0 md:overflow-visible"
        style={{
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
      >
        <style>{`
          .timeline-nav-track::-webkit-scrollbar {
            display: none;
          }
        `}</style>

        <div className="timeline-nav-track flex gap-3 md:gap-0 w-full">
          {years.map((item) => {
            const isActive = item.year === activeYear;
            const iconName = ICON_NAME_BY_YEAR[item.year];

            return (
              <button
                key={item.id}
                onClick={() => onSelect(item.year)}
                className="relative flex flex-col items-center gap-2 shrink-0 md:flex-1 md:shrink group"
              >
                <span
                  className={`${CIRCLE_SIZES} rounded-full flex items-center justify-center border-2 transition-all duration-300 z-10 ${
                    isActive
                      ? "bg-gold border-gold text-primary-800 scale-110 shadow-lg"
                      : "bg-white border-primary-200 text-primary-500 group-hover:border-gold group-hover:text-gold-dark"
                  }`}
                >
                  <Icon
                    name={iconName || "info"}
                    size="50%"
                    strokeWidth={1.75}
                    color="currentColor"
                  />
                </span>
                <span
                  className={`text-xs md:text-sm font-bold ${
                    isActive ? "text-gold-dark" : "text-primary-500"
                  }`}
                >
                  {item.year}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}