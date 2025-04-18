import { useRouter, useSearchParams } from 'next/navigation';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';

export default function FilterBar() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleFilter = (type: string, value: string) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set(type, value);
    router.push(`/?${params.toString()}`);
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-md mb-6">
      <div className="flex flex-wrap gap-4">
        <div className="flex-1 min-w-[200px]">
          <label htmlFor="ingredient" className="block text-sm font-medium text-gray-700 mb-1">
            Filter by Ingredient
          </label>
          <div className="relative">
            <input
              type="text"
              id="ingredient"
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter ingredient..."
              onChange={(e) => handleFilter('ingredient', e.target.value)}
              defaultValue={searchParams.get('ingredient') || ''}
            />
            <MagnifyingGlassIcon className="h-5 w-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
          </div>
        </div>

        <div className="flex-1 min-w-[200px]">
          <label htmlFor="country" className="block text-sm font-medium text-gray-700 mb-1">
            Filter by Country
          </label>
          <div className="relative">
            <input
              type="text"
              id="country"
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter country..."
              onChange={(e) => handleFilter('country', e.target.value)}
              defaultValue={searchParams.get('country') || ''}
            />
            <MagnifyingGlassIcon className="h-5 w-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
          </div>
        </div>

        <div className="flex-1 min-w-[200px]">
          <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-1">
            Filter by Category
          </label>
          <div className="relative">
            <input
              type="text"
              id="category"
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter category..."
              onChange={(e) => handleFilter('category', e.target.value)}
              defaultValue={searchParams.get('category') || ''}
            />
            <MagnifyingGlassIcon className="h-5 w-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
          </div>
        </div>
      </div>
    </div>
  );
} 