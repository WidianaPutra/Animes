const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

export const GetResponse = async (resources, query) => {
  const response = await fetch(`${baseUrl}${resources}?${query}`);
  const data = await response.json();
  return data;
};

export const GetSearchData = async (query) => {
  const response = await fetch(`${baseUrl}anime?${query}`);
  const data = await response.json();
  return data;
};
