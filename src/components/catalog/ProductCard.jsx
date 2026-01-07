const ProductCard = ({ product, onDetails }) => {
  const secureUrl = (url) => {
    if (!url) return null;
    try {
      return url.startsWith('http://') ? url.replace(/^http:\/\//i, 'https://') : url;
    } catch (e) {
      return url;
    }
  };

  return (
    <div className="product-card">
      <img
        src={secureUrl(product.image) || "https://via.placeholder.com/300"}
        alt={product.title}
      />

      <h3>{product.title}</h3>
      <p>{(product.price || 0).toLocaleString('ru-RU')} С</p>

      <button className="details" onClick={onDetails}>
        Подробнее
      </button>
    </div>
  );
};

export default ProductCard;
