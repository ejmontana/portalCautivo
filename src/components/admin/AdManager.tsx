import React from 'react';
import { Ad } from '../../types';
import { PlusCircle, Edit2, Trash2 } from 'lucide-react';

export default function AdManager() {
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
    // More ads would be loaded from the backend
  ]);

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold text-gray-800">Gestión de Anuncios</h2>
        <button className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
          <PlusCircle className="h-5 w-5" />
          <span>Nuevo Anuncio</span>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {ads.map((ad) => (
          <div key={ad.id} className="bg-white rounded-lg shadow-sm border border-gray-200">
            <img
              src={ad.imageUrl}
              alt={ad.title}
              className="w-full h-48 object-cover rounded-t-lg"
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

              <div className="mt-4 flex justify-end space-x-2">
                <button className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg">
                  <Edit2 className="h-5 w-5" />
                </button>
                <button className="p-2 text-red-600 hover:bg-red-50 rounded-lg">
                  <Trash2 className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}