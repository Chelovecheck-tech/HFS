const ProductCard = ({ product, onDetails }) => {
  return (
    <div className="product-card">
      <img
        src={product.image || "https://via.placeholder.com/300"}
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
