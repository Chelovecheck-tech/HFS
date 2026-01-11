import { useEffect, useState } from "react";
import localProducts from "../../data/products";
import Sidebar from "./Sidebar";
import API_URL from "../../api/config";
import ProductCard from "./ProductCard";
import ProductModal from "./ProductModal";
import "../../styles/Catalog.css";

const Catalog = () => {
  const [products, setProducts] = useState(localProducts);
  const [filter, setFilter] = useState(null);
  const [search, setSearch] = useState("");
  const [priceMin, setPriceMin] = useState(0);
  const [priceMax, setPriceMax] = useState(99999999);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    let url = `${API_URL}/api/products`;
    if (filter && filter.type === 'category') {
      url += `?category=${filter.slug}`;
    } else if (filter && filter.type === 'subcategory') {
      url += `?subcategory=${filter.slug}`;
    }
    fetch(url)
      .then(res => {
        if (!res.ok) throw new Error('Network response was not ok');
        return res.json();
      })
      .then(data => {
        setProducts(Array.isArray(data) ? data : []);
      })
      .catch(() => {
        setProducts([]);
      })
      .finally(() => setLoading(false));
  }, [filter]);

  const filteredProducts = products.filter(p => {
    // Фильтр по категории/подкатегории: p.category/p.subcategory в данных может быть slug (с сервера)
    // Фильтрация только по поиску и цене
    const q = search.trim().toLowerCase();
    const matchesSearch =
      !q ||
      (p.title && p.title.toLowerCase().includes(q)) ||
      (p.description && p.description.toLowerCase().includes(q));

    const price = Number(p.price) || 0;
    const matchesPrice = price >= Number(priceMin) && price <= Number(priceMax);

    return matchesSearch && matchesPrice;
  });

  return (
    <>
      <div className="catalog-header">
        <h1>Каталог</h1>
      </div>

      <div className="catalog-layout">
        <Sidebar
          filter={filter}
          setFilter={setFilter}
          search={search}
          setSearch={setSearch}
          priceMin={priceMin}
          setPriceMin={setPriceMin}
          priceMax={priceMax}
          setPriceMax={setPriceMax}
        />

        <div className="products-grid">
          {loading ? (
            <p>Загрузка товаров...</p>
          ) : (
            filteredProducts.map(p => (
              <ProductCard
                key={p.id}
                product={p}
                onDetails={() => setSelectedProduct(p)}
              />
            ))
          )}
        </div>
      </div>

      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </>
  );
};

export default Catalog;