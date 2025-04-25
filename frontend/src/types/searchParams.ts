export enum SearchParamsEnum {
  ingredient = 'ingredient',
  country = 'country',
  category = 'category',
}

export type SearchParam = string | string[] | undefined;

export interface SearchParamsInterface {
  ingredient?: SearchParam;
  country?: SearchParam;
  category?: SearchParam;
}
