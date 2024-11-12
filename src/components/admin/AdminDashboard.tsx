import React from 'react';
import { Ad } from '../../types';
import { Users, TrendingUp, BarChart } from 'lucide-react';

interface AdminDashboardProps {
  onLogout: () => void;
}

export default function AdminDashboard({ onLogout }: AdminDashboardProps) {
  const [ads] = React.useState<Ad[]>([
    {
      id: '1',
      title: 'Auriculares Inalámbricos Premium',
      description: 'Experimenta un sonido cristalino con nuestros últimos auriculares inalámbricos.',
      imageUrl: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e',
      targetUrl: 'https://example.com/auriculares',
      clicks: 243,
      cost: 0.50,
      active: true,
      targetAudience: ['tecnología', 'música'],
    },
    {
      id: '2',
      title: 'Reloj Inteligente Deportivo',
      description: 'Monitorea tus objetivos de salud y ejercicio con seguimiento avanzado.',
      imageUrl: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30',
      targetUrl: 'https://example.com/reloj',
      clicks: 189,
      cost: 0.75,
      active: true,
      targetAudience: ['deportes', 'tecnología'],
    },
  ]);

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <h1 className="text-xl font-bold text-gray-800">Panel de Administración</h1>
            <div className="flex items-center space-x-4">
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
        {/* Metrics Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">Usuarios Conectados</p>
                <p className="text-2xl font-semibold text-gray-800">127</p>
              </div>
              <Users className="h-8 w-8 text-blue-500" />
            </div>
            <div className="mt-4">
              <div className="flex items-center">
                <span className="text-green-500 text-sm">+12.5%</span>
                <span className="text-gray-500 text-sm ml-2">vs hora anterior</span>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">Total de Clics</p>
                <p className="text-2xl font-semibold text-gray-800">432</p>
              </div>
              <TrendingUp className="h-8 w-8 text-blue-500" />
            </div>
            <div className="mt-4">
              <div className="flex items-center">
                <span className="text-green-500 text-sm">+8.2%</span>
                <span className="text-gray-500 text-sm ml-2">vs hora anterior</span>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">CTR Promedio</p>
                <p className="text-2xl font-semibold text-gray-800">3.45%</p>
              </div>
              <BarChart className="h-8 w-8 text-blue-500" />
            </div>
            <div className="mt-4">
              <div className="flex items-center">
                <span className="text-green-500 text-sm">+1.2%</span>
                <span className="text-gray-500 text-sm ml-2">vs hora anterior</span>
              </div>
            </div>
          </div>
        </div>

        {/* Most Viewed Ads */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 mb-8">
          <div className="p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Anuncios Más Vistos</h2>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Anuncio
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Clics
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      CTR
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Ingresos
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {ads.sort((a, b) => b.clicks - a.clicks).map((ad) => (
                    <tr key={ad.id}>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <img
                            src={ad.imageUrl}
                            alt={ad.title}
                            className="h-10 w-10 rounded-lg object-cover"
                          />
                          <div className="ml-4">
                            <div className="text-sm font-medium text-gray-900">
                              {ad.title}
                            </div>
                            <div className="text-sm text-gray-500">
                              {ad.targetAudience.join(', ')}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {ad.clicks.toLocaleString()}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {((ad.clicks / 1000) * 100).toFixed(2)}%
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        ${(ad.clicks * ad.cost).toFixed(2)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Active Advertisements */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200">
          <div className="p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Anuncios Activos</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {ads.map((ad) => (
                <div key={ad.id} className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
                  <img
                    src={ad.imageUrl}
                    alt={ad.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-gray-800">{ad.title}</h3>
                    <p className="text-sm text-gray-600 mt-1">{ad.description}</p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {ad.targetAudience.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="mt-4 flex justify-between items-center text-sm text-gray-500">
                      <span>{ad.clicks} clics</span>
                      <span>${ad.cost.toFixed(2)} por clic</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}