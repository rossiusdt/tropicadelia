import { Calendar, MapPin, Share2 } from 'lucide-react';

export default function EventHero() {
  return (
    <div className="bg-gradient-to-br from-slate-900 via-purple-950 to-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-8 items-start">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Tropicadelia Festival: O Despertar
            </h1>

            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <Calendar className="w-5 h-5 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold">26 set - 2026 - 13:00</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold">Evento presencial em <span className="text-blue-400">Parque de Exposições Governador Ney Braga - LONDRINA/PR</span></p>
                </div>
              </div>
            </div>

          </div>

          <div className="relative">
            <div className="relative rounded-lg overflow-hidden shadow-2xl border-4 border-white">
              <img
                src="/bannertropicadelia.jpg"
                alt="Tropicadelia Festival: O Despertar"
                className="w-full object-contain"
              />
            </div>

            <button className="absolute top-4 right-4 bg-white text-blue-600 px-4 py-2 rounded-full font-semibold flex items-center gap-2 shadow-lg hover:bg-gray-50 transition-colors">
              <Share2 className="w-4 h-4" />
              COMPARTILHAR
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
