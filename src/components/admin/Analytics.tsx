import React from 'react';
import { BarChart, Activity, Users, DollarSign } from 'lucide-react';

export default function Analytics() {
  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Usuarios Activos</p>
              <p className="text-2xl font-semibold text-gray-800">1,234</p>
            </div>
            <Users className="h-8 w-8 text-blue-500" />
          </div>
          <div className="mt-4">
            <div className="flex items-center">
              <span className="text-green-500 text-sm">+12.5%</span>
              <span className="text-gray-500 text-sm ml-2">vs mes anterior</span>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Clics en Anuncios</p>
              <p className="text-2xl font-semibold text-gray-800">5,678</p>
            </div>
            <Activity className="h-8 w-8 text-blue-500" />
          </div>
          <div className="mt-4">
            <div className="flex items-center">
              <span className="text-green-500 text-sm">+8.2%</span>
              <span className="text-gray-500 text-sm ml-2">vs mes anterior</span>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Ingresos</p>
              <p className="text-2xl font-semibold text-gray-800">$2,345</p>
            </div>
            <DollarSign className="h-8 w-8 text-blue-500" />
          </div>
          <div className="mt-4">
            <div className="flex items-center">
              <span className="text-green-500 text-sm">+15.3%</span>
              <span className="text-gray-500 text-sm ml-2">vs mes anterior</span>
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
              <span className="text-red-500 text-sm">-2.1%</span>
              <span className="text-gray-500 text-sm ml-2">vs mes anterior</span>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">
            Uso de Internet por Hora
          </h3>
          <div className="h-64 flex items-center justify-center text-gray-500">
            Gráfico de uso por hora
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">
            Rendimiento de Anuncios
          </h3>
          <div className="h-64 flex items-center justify-center text-gray-500">
            Gráfico de rendimiento
          </div>
        </div>
      </div>
    </div>
  );
}