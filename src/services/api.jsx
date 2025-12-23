const BASE_URL = "https://world.openfoodfacts.org";

export const searchProducts = async (name = "", page = 1) => {
  try {
    const res = await fetch(
      `${BASE_URL}/cgi/search.pl?search_terms=${name}&page=${page}&page_size=20&json=true`
    );

    if (!res.ok) throw new Error("API response not OK");

    return await res.json();
  } catch (error) {
    console.error("Search API Error:", error);
    return { products: [] };
  }
};

export const getProductsByCategory = async (category, page = 1) => {
  try {
    const res = await fetch(
      `${BASE_URL}/categories.json`
    );

    if (!res.ok) throw new Error("Category API response not OK");

    return await res.json();
  } catch (error) {
    console.error("Category API Error:", error);
    return { products: [] };
  }
};

export const getProductByBarcode = async (barcode) => {
  try {
    const res = await fetch(
      `${BASE_URL}/api/v0/product/${barcode}.json`
    );

    if (!res.ok) throw new Error("Barcode API response not OK");

    return await res.json();
  } catch (error) {
    console.error("Barcode API Error:", error);
    return { status: 0 };
  }
};
