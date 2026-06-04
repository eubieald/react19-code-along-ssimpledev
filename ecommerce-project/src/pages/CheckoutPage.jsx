import {
  CheckoutComponent,
  CheckoutHeader,
  CheckoutGrid,
  CheckoutOrderSummary,
  CheckoutCartItemContainer,
  CheckoutCartItemDetailsGrid,
  CheckoutCartItemDetails,
  CheckoutDeliveryOptions,
  CheckoutDeliveryOption,
  CheckoutPaymentSummary,
  CheckoutPaymentSummaryTitle,
  CheckoutPaymentSummaryRow,
  CheckoutPaymentSummaryMoney,
} from "../components/Checkout.component";
import {
  GenericCenterColumn,
  GenericColumn,
  GenericLeftColumn,
  GenericLink,
  GenericRightColumn,
  GenericPageTitle,
  GenericBlock,
} from "../components/Generic.component";

import { GenericButton } from "../components/Button.component";

import logo from "../assets/logo.png";
import mobileLogo from "../assets/mobile-logo.png";
import checkoutLockIcon from "../assets/icons/checkout-lock-icon.png";
import athleticCottonSocksImage from "../assets/products/athletic-cotton-socks-6-pairs.jpg";

import "./checkout.css";
import "./checkout-header.css";
import {
  ProductName,
  ProductPrice,
  ProductQuantityContainer,
} from "../components/Product.component";
import { GenericFormInput } from "../components/FormInput.component";

export default function CheckoutPage() {
  return (
    <>
      <title>Checkout</title>
      <>
        <CheckoutHeader>
          <GenericColumn className="header-content">
            <GenericLeftColumn className="checkoutout-header-left-section">
              <GenericLink href="index.html">
                <img className="logo" src={logo} />
                <img className="mobile-logo" src={mobileLogo} />
              </GenericLink>
            </GenericLeftColumn>
            <GenericCenterColumn className="checkout-header-middle-section">
              Checkout &nbsp;
              <GenericLink className="return-to-home-link" href="index.html">
                1 item(s)
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
              <CheckoutCartItemContainer>
                <GenericBlock className="delivery-date">
                  Delivery date: Tuesday, June 21
                </GenericBlock>

                <CheckoutCartItemDetailsGrid>
                  <img class="product-image" src={athleticCottonSocksImage} />

                  <CheckoutCartItemDetails>
                    <ProductName>
                      Black and Gray Athletic Cotton Socks - 6 Pairs
                    </ProductName>

                    <ProductPrice>$10.90</ProductPrice>

                    <ProductQuantityContainer className="product-quantity">
                      <span>
                        Quantity: <span className="quantity-label">2</span>
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

                    <CheckoutDeliveryOption>
                      <GenericFormInput
                        type="radio"
                        checked
                        className="delivery-option-input"
                        name="delivery-option-1"
                      />
                      <GenericBlock>
                        <div class="delivery-option-date">Tuesday, June 21</div>
                        <div class="delivery-option-price">FREE Shipping</div>
                      </GenericBlock>
                    </CheckoutDeliveryOption>

                    <CheckoutDeliveryOption>
                      <GenericFormInput
                        type="radio"
                        checked
                        className="delivery-option-input"
                        name="delivery-option-1"
                      />
                      <GenericBlock>
                        <div class="delivery-option-date">
                          Wednesday, June 15
                        </div>
                        <div class="delivery-option-price">
                          $4.99 - Shipping
                        </div>
                      </GenericBlock>
                    </CheckoutDeliveryOption>

                    <CheckoutDeliveryOption>
                      <GenericFormInput
                        type="radio"
                        checked
                        className="delivery-option-input"
                        name="delivery-option-1"
                      />
                      <GenericBlock>
                        <div class="delivery-option-date">Monday, June 13</div>
                        <div class="delivery-option-price">
                          $9.99 - Shipping
                        </div>
                      </GenericBlock>
                    </CheckoutDeliveryOption>
                  </CheckoutDeliveryOptions>
                </CheckoutCartItemDetailsGrid>
              </CheckoutCartItemContainer>
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
