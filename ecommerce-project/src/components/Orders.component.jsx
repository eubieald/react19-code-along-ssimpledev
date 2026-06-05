export const OrdersComponent = ({ className = "", children = null }) => {
  return <div className={`orders-page ${className}`}>{children}</div>;
};

export const OrdersGrid = ({ className = "", children = null }) => {
  return <div className={`orders-grid ${className}`}>{children}</div>;
};

export const OrdersContainer = ({ className = "", children = null }) => {
  return <div className={`order-container ${className}`}>{children}</div>;
};

export const OrdersHeader = ({ className = "", children = null }) => {
  return <div className={`order-header ${className}`}>{children}</div>;
};

export const OrderDetailsGrid = ({ className = "", children = null }) => {
  return <div className={`order-details-grid ${className}`}>{children}</div>;
};

export const OrderTotal = ({ className = "", children = null }) => {
  return <div className={`order-total ${className}`}>{children}</div>;
};
