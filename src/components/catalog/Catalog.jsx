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
    // Загружаем товары с бэкенда с учётом выбранного фильтра.
    // Если бэкенд недоступен, используем локальные данные как fallback.
    setLoading(true);
    const params = new URLSearchParams();
    if (filter && filter.type === 'category') {
      params.set('category', filter.slug);
    } else if (filter && filter.type === 'subcategory') {
      params.set('subcategory', filter.slug);
    }

    const url = `${API_URL}/api/products${params.toString() ? `?${params.toString()}` : ''}`;

    fetch(url)
      .then(res => {
        if (!res.ok) throw new Error('Network response was not ok');
        return res.json();
      })
      .then(data => {
        // Ожидаем массив объектов; если пусто, fallback на локальные
        setProducts(Array.isArray(data) && data.length ? data : localProducts);
      })
      .catch(() => {
        // Если сервер недоступен — используем локальные данные
        setProducts(localProducts);
      })
      .finally(() => setLoading(false));
  }, [filter]);

  const filteredProducts = products.filter(p => {
    // Фильтр по категории/подкатегории: p.category/p.subcategory в данных может быть slug (с сервера)
    let matchesCategory = true;
    if (filter) {
      if (filter.type === 'category') {
        matchesCategory = String(p.category) === String(filter.slug);
      } else if (filter.type === 'subcategory') {
        matchesCategory = String(p.subcategory) === String(filter.slug);
      }
    }

    // Поиск по названию или описанию
    const q = search.trim().toLowerCase();
    const matchesSearch =
      !q ||
      (p.title && p.title.toLowerCase().includes(q)) ||
      (p.description && p.description.toLowerCase().includes(q));

    // По диапазону цен
    const price = Number(p.price) || 0;
    const matchesPrice = price >= Number(priceMin) && price <= Number(priceMax);

    return matchesCategory && matchesSearch && matchesPrice;
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