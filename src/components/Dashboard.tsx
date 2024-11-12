import React from 'react';
import { User, Ad } from '../types';
import AdBanner from './AdBanner';
import { Clock, Database, Calendar, ChevronRight } from 'lucide-react';

interface DashboardProps {
  user: User;
  onLogout: () => void;
}

export default function Dashboard({ user, onLogout }: DashboardProps) {
  const [ads] = React.useState<Ad[]>([
    {
      id: '1',
      title: 'Auriculares Inalámbricos Premium',
      description: 'Experimenta un sonido cristalino con nuestros últimos auriculares inalámbricos.',
      imageUrl: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e',
      targetUrl: 'https://example.com/auriculares',
      clicks: 243,
      cost: 0.50,
    },
    {
      id: '2',
      title: 'Reloj Inteligente Deportivo',
      description: 'Monitorea tus objetivos de salud y ejercicio con seguimiento avanzado.',
      imageUrl: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30',
      targetUrl: 'https://example.com/reloj',
      clicks: 189,
      cost: 0.75,
    },
  ]);

  const handleAdClick = (adId: string) => {
    console.log(`Anuncio clickeado: ${adId}`);
    // Aquí normalmente harías una llamada a la API para registrar el clic
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <h1 className="text-xl font-bold text-gray-800">Portal de Anuncios</h1>
            <div className="flex items-center space-x-4">
              <span className="text-gray-600">{user.email}</span>
              <button
                onClick={onLogout}
                className="text-gray-600 hover:text-gray-800"
              >
                Cerrar Sesión
              </button>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Data Summary Section */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Resumen de Datos</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center space-x-3">
              <Clock className="h-8 w-8 text-blue-500" />
              <div>
                <p className="text-sm text-gray-500">Tiempo de Sesión</p>
                <p className="text-lg font-semibold text-gray-800">45 minutos</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <Database className="h-8 w-8 text-blue-500" />
              <div>
                <p className="text-sm text-gray-500">Datos Utilizados</p>
                <p className="text-lg font-semibold text-gray-800">256 MB</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <Calendar className="h-8 w-8 text-blue-500" />
              <div>
                <p className="text-sm text-gray-500">Última Conexión</p>
                <p className="text-lg font-semibold text-gray-800">
                  {new Date().toLocaleString()}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Ads Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ads.map((ad) => (
            <AdBanner key={ad.id} ad={ad} onAdClick={handleAdClick} />
          ))}
        </div>

        {/* Admin Panel Button */}
        {user.email.includes('admin') && (
          <div className="mt-8 flex justify-center">
            <button
              onClick={() => window.location.reload()}
              className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <span>Panel de Administración</span>
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        )}
      </main>
    </div>
  );
}