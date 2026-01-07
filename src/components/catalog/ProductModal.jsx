import "../../styles/Catalog.css";

const ProductModal = ({ product, onClose }) => {
  const secureUrl = (url) => {
    if (!url) return null;
    try {
      return url.startsWith('http://') ? url.replace(/^http:\/\//i, 'https://') : url;
    } catch (e) {
      return url;
    }
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={e => e.stopPropagation()}>
        <button className="close" onClick={onClose}>✕</button>

        <div className="modal-content">
          
          <div className="modal-image">
            <img
              src={secureUrl(product.image) || "https://via.placeholder.com/400"}
              alt={product.title}
            />
          </div>

          
          <div className="modal-info">
            <h2>{product.title}</h2>
            {product.brand && <p className="brand">Производитель: {product.brand}</p>}
            <p className="price">{(product.price || 0).toLocaleString('ru-RU')} С</p>
            <p className="opisanie">
              {product.description || "Описание скоро появится"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;