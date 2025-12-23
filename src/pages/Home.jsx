import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Filters from "../components/Filters";
import ProductCard from "../components/ProductCard";
import Loader from "../components/Loader";
import {
  searchProducts,
  getProductsByCategory,
  getProductByBarcode
} from "../services/api";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [sort, setSort] = useState("");
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  /* 🔥 MAIN FETCH EFFECT */
  useEffect(() => {
    fetchProducts();
    // eslint-disable-next-line
  }, [page, search, category]);

  /* 🔥 RESET DATA WHEN SEARCH / CATEGORY CHANGES */
  useEffect(() => {
    setProducts([]);
    setPage(1);
  }, [search, category]);

  const fetchProducts = async () => {
    setLoading(true);

    let data;
    if (category) {
      data = await getProductsByCategory(category, page);
    } else {
      data = await searchProducts(search, page);
    }

    setProducts((prev) => [...prev, ...(data.products || [])]);
    setLoading(false);
  };

  /* 🔍 BARCODE SEARCH */
  const searchByBarcode = async (barcode) => {
    if (!barcode) return;

    const data = await getProductByBarcode(barcode);
    if (data.status === 1) {
      navigate(`/product/${barcode}`);
    } else {
      alert("Product not found for this barcode");
    }
  };

  /* 🔃 SORTING */
  const sortedProducts = [...products].sort((a, b) => {
    if (sort === "name-asc")
      return (a.product_name || "").localeCompare(b.product_name || "");
    if (sort === "name-desc")
      return (b.product_name || "").localeCompare(a.product_name || "");
    if (sort === "nutrition")
      return (a.nutrition_grade || "").localeCompare(b.nutrition_grade || "");
    return 0;
  });

  return (
    <>
      <Navbar setSearch={setSearch} searchByBarcode={searchByBarcode} />
      <Filters setCategory={setCategory} setSort={setSort} />

      <div className="container">
        <div className="row g-4">
          {sortedProducts.map((p, i) => (
            <ProductCard key={p.code || i} product={p} />
          ))}
        </div>

        {loading && <Loader />}

        {!loading && products.length > 0 && (
          <div className="text-center my-4">
            <button
              className="btn btn-success"
              onClick={() => setPage((prev) => prev + 1)}
            >
              Load More
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default Home;
