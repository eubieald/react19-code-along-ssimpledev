import {
  CheckoutCartItemContainer,
  CheckoutCartItemDetails,
  CheckoutCartItemDetailsGrid,
  CheckoutComponent,
  CheckoutDeliveryOption,
  CheckoutDeliveryOptions,
  CheckoutGrid,
  CheckoutHeader,
  CheckoutOrderSummary,
  CheckoutPaymentSummary,
  CheckoutPaymentSummaryMoney,
  CheckoutPaymentSummaryRow,
  CheckoutPaymentSummaryTitle,
} from "../../components/Checkout.component";
import {
  GenericBlock,
  GenericCenterColumn,
  GenericColumn,
  GenericLeftColumn,
  GenericLink,
  GenericPageTitle,
  GenericRightColumn,
} from "../../components/Generic.component";

import { GenericButton } from "../../components/Button.component";

import checkoutLockIcon from "../../assets/images/icons/checkout-lock-icon.png";
import logo from "../../assets/images/logo.png";
import mobileLogo from "../../assets/images/mobile-logo.png";

import { GenericFormInput } from "../../components/FormInput.component";
import {
  ProductName,
  ProductPrice,
  ProductQuantityContainer,
} from "../../components/Product.component";
import { useGetDeliveryOptions } from "../../hooks/use-cart";
import { getCartTotalQuantity } from "../../utils/cart-utils";
import { formatCurrency } from "../../utils/format-utils";
import "./checkout-header.css";
import "./checkout.css";
import dayjs from "dayjs";

export default function CheckoutPage({ cartItems = [] }) {
  const { data: deliveryOptions = [] } = useGetDeliveryOptions({
    param: "expand=estimatedDeliveryTime",
  });

  console.log("deliveryOptions", deliveryOptions);

  return (
    <>
      <link rel="icon" type="image/svg+xml" href="/cart-favicon.png" />
      <title>Checkout</title>
      <>
        <CheckoutHeader>
          <GenericColumn className="header-content">
            <GenericLeftColumn className="checkoutout-header-left-section">
              <GenericLink href="/">
                <img className="logo" src={logo} />
                <img className="mobile-logo" src={mobileLogo} />
              </GenericLink>
            </GenericLeftColumn>
            <GenericCenterColumn className="checkout-header-middle-section">
              Checkout &nbsp;
              <GenericLink className="return-to-home-link" href="/">
                {getCartTotalQuantity(cartItems)} item(s)
              </GenericLink>
            </GenericCenterColumn>
            <GenericRightColumn className="checkout-header-right-section">
              <img src={checkoutLockIcon} />
            </GenericRightColumn>
          </GenericColumn>
        </CheckoutHeader>

        <CheckoutComponent>
          <GenericPageTitle>Review your order</GenericPageTitle>

          <CheckoutGrid>
            <CheckoutOrderSummary>
              {deliveryOptions.length > 0 &&
                cartItems.map((cartItem) => {
                  const selectedDeliveryOption = deliveryOptions.find(
                    (deliveryOption) => {
                      return deliveryOption.id === cartItem?.deliveryOptionId;
                    },
                  );
                  return (
                    <CheckoutCartItemContainer key={cartItem?.productId}>
                      <GenericBlock className="delivery-date">
                        Delivery date:
                        {dayjs(
                          selectedDeliveryOption?.estimatedDeliveryTimeMs,
                        ).format("dddd, MMMM D")}
                      </GenericBlock>

                      <CheckoutCartItemDetailsGrid>
                        <img
                          className="product-image"
                          src={cartItem?.product?.image}
                        />

                        <CheckoutCartItemDetails>
                          <ProductName>{cartItem?.product?.name}</ProductName>

                          <ProductPrice>
                            {formatCurrency(cartItem?.product?.priceCents) ??
                              "0.00"}
                          </ProductPrice>

                          <ProductQuantityContainer className="product-quantity">
                            <span>
                              Quantity:
                              <span className="quantity-label">
                                {cartItem?.quantity}
                              </span>
                            </span>
                            <GenericBlock className="update-quantity-link link-primary">
                              Update
                            </GenericBlock>
                            <GenericBlock className="delete-quantity-link link-primary">
                              Delete
                            </GenericBlock>
                          </ProductQuantityContainer>
                        </CheckoutCartItemDetails>

                        <CheckoutDeliveryOptions>
                          <GenericBlock className="delivery-options-title">
                            Choose a delivery option:
                          </GenericBlock>

                          {deliveryOptions.map((deliveryOption) => {
                            let priceString = "FREE Shipping";

                            if (deliveryOption?.priceCents > 0) {
                              priceString = `$ ${formatCurrency(
                                deliveryOption?.priceCents,
                              )} - Shipping`;
                            }

                            return (
                              <CheckoutDeliveryOption key={deliveryOption.id}>
                                <GenericFormInput
                                  type="radio"
                                  checked={
                                    deliveryOption?.id ===
                                    cartItem?.deliveryOptionId
                                  }
                                  className="delivery-option-input"
                                  name={`delivery-option-${cartItem?.productId}`}
                                />
                                <GenericBlock>
                                  <div className="delivery-option-date">
                                    {dayjs(
                                      deliveryOption?.estimatedDeliveryTimeMs,
                                    ).format("dddd, MMMM D")}
                                  </div>
                                  <div className="delivery-option-price">
                                    {priceString}
                                  </div>
                                </GenericBlock>
                              </CheckoutDeliveryOption>
                            );
                          })}
                        </CheckoutDeliveryOptions>
                      </CheckoutCartItemDetailsGrid>
                    </CheckoutCartItemContainer>
                  );
                })}
            </CheckoutOrderSummary>
            <CheckoutPaymentSummary>
              <CheckoutPaymentSummaryTitle>
                Payment Summary
              </CheckoutPaymentSummaryTitle>
              <CheckoutPaymentSummaryRow>
                <div>Items (3):</div>
                <CheckoutPaymentSummaryMoney>
                  $32.70
                </CheckoutPaymentSummaryMoney>
              </CheckoutPaymentSummaryRow>

              <CheckoutPaymentSummaryRow className="subtotal-row">
                <div>Total before tax:</div>
                <CheckoutPaymentSummaryMoney>
                  $47.74
                </CheckoutPaymentSummaryMoney>
              </CheckoutPaymentSummaryRow>

              <CheckoutPaymentSummaryRow>
                <div>Estimated tax (10%):</div>
                <CheckoutPaymentSummaryMoney>$4.77</CheckoutPaymentSummaryMoney>
              </CheckoutPaymentSummaryRow>

              <CheckoutPaymentSummaryRow className="total-row">
                <div>Order total:</div>
                <CheckoutPaymentSummaryMoney>
                  $52.51
                </CheckoutPaymentSummaryMoney>
              </CheckoutPaymentSummaryRow>

              <GenericButton className="place-order-button button-primary">
                Place your order
              </GenericButton>
            </CheckoutPaymentSummary>
          </CheckoutGrid>
        </CheckoutComponent>
      </>
    </>
  );
}
