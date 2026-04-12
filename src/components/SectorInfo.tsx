import { Crown, Zap } from 'lucide-react';

export default function SectorInfo() {
  return (
    <div className="bg-white rounded-lg shadow-sm p-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Setores</h2>

      <div className="space-y-6">
        <div className="border-2 border-cyan-400 rounded-lg p-6 bg-gradient-to-br from-cyan-50 to-blue-50">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-cyan-400 rounded-lg">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900">PISTA</h3>
          </div>

          <p className="text-lg font-semibold text-cyan-700 mb-3">
            Conforto e uma experiência diferenciada.
          </p>

          <p className="text-gray-700 leading-relaxed">
            O setor pista oferece banheiros exclusivos e uma vista privilegiada do palco, garantindo mais comodidade para você curtir cada momento do evento com qualidade e tranquilidade.
          </p>
        </div>

        <div className="border-2 border-amber-400 rounded-lg p-6 bg-gradient-to-br from-amber-50 to-yellow-50">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-amber-400 rounded-lg">
              <Crown className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900">TROPICAL LOUNGE</h3>
          </div>

          <p className="text-lg font-semibold text-amber-700 mb-3">
            Exclusividade, sofisticação e o máximo de conforto.
          </p>

          <p className="text-gray-700 leading-relaxed">
            O Tropical Lounge conta com open bar completo, com a maior variedade de bebidas alcoólicas e não alcoólicas e Open Food, além de atendimento exclusivo para uma experiência premium. Você também terá banheiros privativos e uma vista privilegiada do palco, aproveitando o evento com total comodidade e estilo.
          </p>
        </div>
      </div>
    </div>
  );
}
