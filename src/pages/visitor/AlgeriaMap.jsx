import { useState } from "react";
import wilayaData from "../../data/wilayaData";
import AlgeriaSvgMap from "../../components/map/AlgeriaSvgMap";
import Card from "../../components/common/Card";

export default function AlgeriaMap() {
  const [active, setActive] = useState(wilayaData[0]);

  return (
    <div className="max-w-6xl mx-auto px-5 lg:px-8 py-14">
      <div className="text-center mb-10">
        <h1 className="section-title inline-block text-3xl md:text-4xl font-extrabold text-primary-800 mb-3">
          المدن والولايات
        </h1>
        <p className="text-primary-400 mt-4 max-w-2xl mx-auto">
          استكشف أبرز ولايات الجزائر ومعلوماتها عبر الخريطة التفاعلية.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
        <div className="lg:col-span-3">
          <AlgeriaSvgMap wilayas={wilayaData} activeId={active?.id} onSelect={setActive} />
        </div>

        <div className="lg:col-span-2">
          {active && (
            <Card>
              <h3 className="text-2xl font-extrabold text-primary-800 mb-2">{active.name}</h3>
              <p className="text-xs font-bold text-gold mb-4">ولاية رقم {active.id}</p>
              <p className="text-sm text-primary-600 leading-relaxed mb-5">{active.description}</p>
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-primary-50 rounded-xl p-4 text-center">
                  <p className="text-xs text-primary-400 mb-1">عدد السكان</p>
                  <p className="font-bold text-primary-800">{active.population}</p>
                </div>
                <div className="bg-primary-50 rounded-xl p-4 text-center">
                  <p className="text-xs text-primary-400 mb-1">يُعرف بـ</p>
                  <p className="font-bold text-primary-800">{active.founded}</p>
                </div>
              </div>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
}
