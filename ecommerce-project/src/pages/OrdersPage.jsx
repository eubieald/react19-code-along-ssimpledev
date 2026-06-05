import {
  MainHeaderComponent,
  MainHeaderLeftSection,
  MainHeaderMiddleSection,
  HeaderRightSection,
} from "../components/Header.component";
import {
  GenericBlock,
  GenericLeftColumn,
  GenericLink,
  GenericPageTitle,
  GenericLabel,
  GenericRightColumn,
} from "../components/Generic.component";
import { GenericFormInput } from "../components/FormInput.component";
import { GenericButton } from "../components/Button.component";

import logo from "../assets/logo-white.png";
import mobileLogo from "../assets/mobile-logo-white.png";
import cartIcon from "../assets/icons/cart-icon.png";
import searchIcon from "../assets/icons/search-icon.png";
import {
  OrderDetailsGrid,
  OrdersComponent,
  OrdersContainer,
  OrdersGrid,
  OrdersHeader,
  OrderTotal,
} from "../components/Orders.component";
import {
  ProductActions,
  ProductDetails,
  ProductImage,
  ProductName,
  ProductQuantityContainer,
} from "../components/Product.component";
import athleticSocksImage from "../assets/products/athletic-cotton-socks-6-pairs.jpg";
import buyAgainIcon from "../assets/icons/buy-again.png";
import plainTshirtImage from "../assets/products/adults-plain-cotton-tshirt-2-pack-teal.jpg";
import "./orders.css";

export default function OrdersPage() {
  return (
    <>
      <title>Orders</title>
      <>
        <MainHeaderComponent>
          <MainHeaderLeftSection>
            <GenericLink href="index.html">
              <img className="logo" src={logo} />
              <img className="mobile-logo" src={mobileLogo} />
            </GenericLink>
          </MainHeaderLeftSection>
          <MainHeaderMiddleSection>
            <GenericFormInput className="search-bar" placeholder="Search" />
            <GenericButton className="search-button">
              <img className="search-icon" src={searchIcon} />
            </GenericButton>
          </MainHeaderMiddleSection>
          <HeaderRightSection>
            <GenericLink className="orders-link header-link" href="orders.html">
              <span className="orders-text">Orders</span>
            </GenericLink>
            <GenericLink className="cart-link header-link" href="cart.html">
              <img className="cart-icon" src={cartIcon} />
              <div className="cart-quantity">3</div>
              <div className="cart-text">Cart</div>
            </GenericLink>
          </HeaderRightSection>
        </MainHeaderComponent>

        <OrdersComponent>
          <GenericPageTitle>Your Orders</GenericPageTitle>
          <OrdersGrid>
            <OrdersContainer>
              <OrdersHeader>
                <GenericLeftColumn className="order-header-left-section">
                  <GenericBlock className="order-date">
                    <GenericLabel className="order-header-label">
                      Order Placed:
                    </GenericLabel>
                    <GenericLabel>August 12</GenericLabel>
                  </GenericBlock>

                  <GenericBlock className="order-total">
                    <GenericLabel className="order-header-label">
                      Total:
                    </GenericLabel>
                    <GenericLabel>$24.99</GenericLabel>
                  </GenericBlock>
                </GenericLeftColumn>

                <GenericRightColumn className="order-header-right-section">
                  <GenericLabel className="order-header-label">
                    Order ID:
                  </GenericLabel>
                  <GenericLabel>
                    27cba69d-4c3d-4098-b42d-ac7fa62b7664
                  </GenericLabel>
                </GenericRightColumn>
              </OrdersHeader>

              <OrderDetailsGrid>
                <ProductImage>
                  <img src={athleticSocksImage} />
                </ProductImage>

                <ProductDetails>
                  <ProductName>
                    Black and Gray Athletic Cotton Socks - 6 Pairs
                  </ProductName>
                  <GenericLabel className="product-delivery-date">
                    Arriving on: August 15
                  </GenericLabel>
                  <ProductQuantityContainer>
                    Quantity: 1
                  </ProductQuantityContainer>

                  <GenericButton className="buy-again-button button-primary">
                    <img className="buy-again-icon" src={buyAgainIcon} />
                    <span className="buy-again-message">Add to Cart</span>
                  </GenericButton>
                </ProductDetails>

                <ProductActions>
                  <GenericLink href="tracking.html">
                    <GenericButton className="track-package-button button-secondary">
                      Track package
                    </GenericButton>
                  </GenericLink>
                </ProductActions>
              </OrderDetailsGrid>
            </OrdersContainer>

            <OrdersContainer>
              <OrdersHeader>
                <GenericLeftColumn className="order-header-left-section">
                  <GenericBlock className="order-date">
                    <GenericLabel className="order-header-label">
                      Order Placed:
                    </GenericLabel>
                    <GenericLabel>August 12</GenericLabel>
                  </GenericBlock>
                  <OrderTotal>
                    <GenericLabel className="order-header-label">
                      Total:
                    </GenericLabel>
                    <GenericLabel>$35.06</GenericLabel>
                  </OrderTotal>
                </GenericLeftColumn>

                <GenericRightColumn className="order-header-right-section">
                  <GenericLabel className="order-header-label">
                    Order ID:
                  </GenericLabel>
                  <GenericLabel>
                    27cba69d-4c3d-4098-b42d-ac7fa62b7664
                  </GenericLabel>
                </GenericRightColumn>
              </OrdersHeader>

              <OrderDetailsGrid>
                <ProductImage>
                  <img src={athleticSocksImage} />
                </ProductImage>

                <ProductDetails>
                  <ProductName>
                    Black and Gray Athletic Cotton Socks - 6 Pairs
                  </ProductName>
                  <GenericLabel className="product-delivery-date">
                    Arriving on: August 15
                  </GenericLabel>
                  <ProductQuantityContainer className="product-quantity">
                    Quantity: 1
                  </ProductQuantityContainer>
                  <GenericButton className="buy-again-button button-primary">
                    <img className="buy-again-icon" src={buyAgainIcon} />
                    <span className="buy-again-message">Add to Cart</span>
                  </GenericButton>
                </ProductDetails>

                <ProductActions>
                  <GenericLink href="tracking.html">
                    <GenericButton className="track-package-button button-secondary">
                      Track package
                    </GenericButton>
                  </GenericLink>
                </ProductActions>

                <ProductImage className="product-image-container">
                  <img src={plainTshirtImage} />
                </ProductImage>

                <ProductDetails>
                  <ProductName>
                    Adults Plain Cotton T-Shirt - 2 Pack
                  </ProductName>
                  <GenericLabel className="product-delivery-date">
                    Arriving on: August 19
                  </GenericLabel>
                  <ProductQuantityContainer className="product-quantity">
                    Quantity: 2
                  </ProductQuantityContainer>
                  <GenericButton className="buy-again-button button-primary">
                    <img className="buy-again-icon" src={buyAgainIcon} />
                    <span className="buy-again-message">Add to Cart</span>
                  </GenericButton>
                </ProductDetails>

                <ProductActions>
                  <GenericLink href="tracking.html">
                    <GenericButton className="track-package-button button-secondary">
                      Track package
                    </GenericButton>
                  </GenericLink>
                </ProductActions>
              </OrderDetailsGrid>
            </OrdersContainer>
          </OrdersGrid>
        </OrdersComponent>
      </>
    </>
  );
}
