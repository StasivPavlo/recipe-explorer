'use client';

import { useRouter } from 'next/navigation';
import SearchBar from './SearchBar';
import { SearchParamsEnum } from "@/types/searchParams";

export default function RecipeSearch() {
  const router = useRouter();

  const handleSearch = (param: SearchParamsEnum, value: string) => {
    const newParams = new URLSearchParams();
    newParams.set(param, value);
    router.push(`/?${newParams.toString()}`);
  };

  return <SearchBar onSearch={handleSearch} />;
}
