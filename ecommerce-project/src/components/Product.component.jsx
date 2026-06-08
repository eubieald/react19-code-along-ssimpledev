export const ProductGrid = ({ className = "", children = null }) => {
  return <div className={`products-grid ${className}`}>{children}</div>;
};

export const ProductContainer = ({ className = "", children = null }) => {
  return <div className={`product-container ${className}`}>{children}</div>;
};

export const ProductImage = ({ className = "", children = null }) => {
  return (
    <div className={`product-image-container ${className}`}>{children}</div>
  );
};

export const ProductRatingContainer = ({ className = "", children = null }) => {
  return (
    <div className={`product-rating-container ${className}`}>{children}</div>
  );
};

export const ProductName = ({ className = "", children = null }) => {
  return <div className={`product-name ${className}`}>{children}</div>;
};

export const ProductPrice = ({ className = "", children = null }) => {
  return <div className={`product-price ${className}`}>{children}</div>;
};

export const ProductQuantityContainer = ({
  className = "",
  children = null,
}) => {
  return (
    <div className={`product-quantity-container ${className}`}>{children}</div>
  );
};

export const ProductDetails = ({ className = "", children = null }) => {
  return <div className={`product-details ${className}`}>{children}</div>;
};

export const ProductActions = ({ className = "", children = null }) => {
  return <div className={`product-actions ${className}`}>{children}</div>;
};

export const ProductInfo = ({ className = "", children = null }) => {
  return <div className={`product-info ${className}`}>{children}</div>;
};
