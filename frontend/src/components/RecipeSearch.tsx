'use client';

import { useRouter } from 'next/navigation';
import SearchBar from './SearchBar';

export default function RecipeSearch() {
  const router = useRouter();

  const handleSearch = (param: 'ingredient' | 'country' | 'category', value: string) => {
    const newParams = new URLSearchParams();
    newParams.set(param, value);
    router.push(`/?${newParams.toString()}`);
  };

  return <SearchBar onSearch={handleSearch} />;
} 