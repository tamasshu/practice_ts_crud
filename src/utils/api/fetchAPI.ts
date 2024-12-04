export const fetchAPI = async (url: string) => {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(
      `HTTPエラー: ${response.status} - ${response.statusText} - URL: ${url}`
    );
  }
  return response.json();
};
