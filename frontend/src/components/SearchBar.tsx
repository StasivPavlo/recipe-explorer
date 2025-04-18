import { useState } from 'react';

type SearchParam = 'ingredient' | 'country' | 'category';

interface SearchBarProps {
  onSearch: (param: SearchParam, value: string) => void;
}

export default function SearchBar({ onSearch }: SearchBarProps) {
  const [searchParam, setSearchParam] = useState<SearchParam>('ingredient');
  const [searchValue, setSearchValue] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchValue.trim()) {
      onSearch(searchParam, searchValue.trim());
    }
  };

  return (
    <form onSubmit={handleSearch} className="flex flex-col sm:flex-row gap-4">
      <div className="flex-1">
        <label htmlFor="searchParam" className="block text-sm font-medium text-gray-300 mb-1">
          Search by
        </label>
        <select
          id="searchParam"
          value={searchParam}
          onChange={(e) => setSearchParam(e.target.value as SearchParam)}
          className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md shadow-sm text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        >
          <option value="ingredient">Ingredient</option>
          <option value="country">Country</option>
          <option value="category">Category</option>
        </select>
      </div>
      
      <div className="flex-1">
        <label htmlFor="searchValue" className="block text-sm font-medium text-gray-300 mb-1">
          Search term
        </label>
        <input
          type="text"
          id="searchValue"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          placeholder={`Enter ${searchParam}...`}
          className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md shadow-sm text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        />
      </div>
      
      <div className="flex items-end">
        <button
          type="submit"
          className="px-6 py-2 bg-blue-600 text-white font-medium rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-800"
        >
          Search
        </button>
      </div>
    </form>
  );
} 