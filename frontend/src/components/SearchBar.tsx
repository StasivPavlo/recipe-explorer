import React, { useState } from 'react';
import SearchBarItem from "@/components/SearchBarItem";
import { SearchParamsEnum } from "@/types/searchParams";

interface SearchBarProps {
  onSearch: (param: SearchParamsEnum, value: string) => void;
}

export default function SearchBar({ onSearch }: SearchBarProps) {
  const [searchParam, setSearchParam] = useState<SearchParamsEnum>(SearchParamsEnum.ingredient);
  const [searchValue, setSearchValue] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchValue.trim()) {
      onSearch(searchParam, searchValue.trim());
    }
  };

  return (
    <form onSubmit={handleSearch} className="flex flex-col sm:flex-row gap-4">
      <SearchBarItem label="Search by">
        <select
          id="searchParam"
          value={searchParam}
          onChange={(e) => setSearchParam(e.target.value as SearchParamsEnum)}
          className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md shadow-sm text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        >
          <option value="ingredient">Ingredient</option>
          <option value="country">Country</option>
          <option value="category">Category</option>
        </select>
      </SearchBarItem>

      <SearchBarItem label="Search term">
        <input
          type="text"
          id="searchValue"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          placeholder={`Enter ${searchParam}...`}
          className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md shadow-sm text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        />
      </SearchBarItem>

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
