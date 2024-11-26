export const Header = () => (
  <div className="w-full bg-white border-b shadow-sm mb-6">
    <div className="max-w-5xl mx-auto px-4 py-4 flex items-center space-x-3">
      <Shovel className="h-8 w-8 text-blue-600" />
      <div className="flex flex-col">
        <h1 className="text-2xl font-bold text-blue-600">Kasysy</h1>
        <p className="text-sm text-gray-600">Skills Assessment Platform</p>
      </div>
    </div>
  </div>
);
import { Shovel } from 'lucide-react';
