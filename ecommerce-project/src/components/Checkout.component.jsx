export const CheckoutComponent = ({ className = "", children = null }) => {
  return <div className={`checkout-page ${className}`}>{children}</div>;
};

export const CheckoutHeader = ({ className = "", children = null }) => {
  return <div className={`checkout-header ${className}`}>{children}</div>;
};

export const CheckoutGrid = ({ className = "", children = null }) => {
  return <div className={`checkout-grid ${className}`}>{children}</div>;
};

export const CheckoutOrderSummary = ({ className = "", children = null }) => {
  return <div className={`order-summary ${className}`}>{children}</div>;
};

export const CheckoutCartItemContainer = ({
  className = "",
  children = null,
}) => {
  return <div className={`cart-item-container ${className}`}>{children}</div>;
};

export const CheckoutCartItemDetailsGrid = ({
  className = "",
  children = null,
}) => {
  return (
    <div className={`cart-item-details-grid ${className}`}>{children}</div>
  );
};

export const CheckoutCartItemDetails = ({
  className = "",
  children = null,
}) => {
  return <div className={`cart-item-details ${className}`}>{children}</div>;
};

export const CheckoutDeliveryOptions = ({
  className = "",
  children = null,
}) => {
  return <div className={`delivery-options ${className}`}>{children}</div>;
};

export const CheckoutDeliveryOption = ({ className = "", children = null }) => {
  return <div className={`delivery-option ${className}`}>{children}</div>;
};

export const CheckoutPaymentSummary = ({ className = "", children = null }) => {
  return <div className={`payment-summary ${className}`}>{children}</div>;
};

export const CheckoutPaymentSummaryRow = ({
  className = "",
  children = null,
}) => {
  return <div className={`payment-summary-row ${className}`}>{children}</div>;
};

export const CheckoutPaymentSummaryTitle = ({
  className = "",
  children = null,
}) => {
  return <div className={`payment-summary-title ${className}`}>{children}</div>;
};

export const CheckoutPaymentSummaryMoney = ({
  className = "",
  children = null,
}) => {
  return <div className={`payment-summary-money ${className}`}>{children}</div>;
};
