export const fetchAPI = async (url: string) => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return {
      data,
      ifFetch: true,
    };
  } catch (error) {
    const errorMessage =
      error instanceof Error ? error.message : "エラーが発生しました";
    return {
      data: null,
      error: errorMessage,
      ifFetch: false,
    };
  }
};
