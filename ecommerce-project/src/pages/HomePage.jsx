import {
  MainHeaderComponent,
  MainHeaderLeftSection,
  MainHeaderMiddleSection,
  HeaderRightSection,
} from "../components/Header.component";
import { GenericLink, GenericRow } from "../components/Generic.component";
import { GenericFormInput } from "../components/FormInput.component";
import { GenericButton } from "../components/Button.component";

import logo from "../assets/logo-white.png";
import mobileLogo from "../assets/mobile-logo-white.png";
import cartIcon from "../assets/icons/cart-icon.png";
import searchIcon from "../assets/icons/search-icon.png";
import athleticSocksImage from "../assets/products/athletic-cotton-socks-6-pairs.jpg";
import rating45Image from "../assets/ratings/rating-45.png";
import checkMarkIcon from "../assets/icons/checkmark.png";

import "./header.css";
import "./HomePage.css";
import { HomeComponent } from "../components/Home.component";
import {
  ProductContainer,
  ProductGrid,
  ProductImage,
  ProductQuantityContainer,
  ProductRatingContainer,
  ProductPrice,
} from "../components/Product.component";
import { GenericSelect } from "../components/Select.component";

export default function HomePage() {
  return (
    <>
      <title>Ecommerce Project</title>
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
            <img class="search-icon" src={searchIcon} />
          </GenericButton>
        </MainHeaderMiddleSection>
        <HeaderRightSection>
          <GenericLink className="orders-link header-link" href="orders.html">
            <span className="orders-text">Orders</span>
          </GenericLink>
          <GenericLink className="cart-link header-link" href="cart.html">
            <img className="cart-icon" src={cartIcon} />
            <div class="cart-quantity">3</div>
            <div class="cart-text">Cart</div>
          </GenericLink>
        </HeaderRightSection>
      </MainHeaderComponent>

      <HomeComponent>
        <ProductGrid>
          <ProductContainer>
            <ProductImage>
              <img class="product-image" src={athleticSocksImage} />
            </ProductImage>
            <GenericRow className="product-name limit-text-to-2-lines">
              Black and Gray Athletic Cotton Socks - 6 Pairs
            </GenericRow>

            <ProductRatingContainer>
              <img class="product-rating-stars" src={rating45Image} />
              <div class="product-rating-count link-primary">87</div>
            </ProductRatingContainer>

            <ProductPrice>$10.90</ProductPrice>

            <ProductQuantityContainer>
              <GenericSelect
                options={[
                  { value: "1", label: "1" },
                  { value: "2", label: "2" },
                  { value: "3", label: "3" },
                  { value: "4", label: "4" },
                  { value: "5", label: "5" },
                  { value: "6", label: "6" },
                  { value: "7", label: "7" },
                  { value: "8", label: "8" },
                  { value: "9", label: "9" },
                  { value: "10", label: "10" },
                ]}
              />
            </ProductQuantityContainer>

            <GenericRow className="product-spacer" />

            <GenericButton className="added-to-cart">
              <img src={checkMarkIcon} />
              Added
            </GenericButton>

            <button class="add-to-cart-button button-primary">
              Add to Cart
            </button>
          </ProductContainer>
        </ProductGrid>
      </HomeComponent>
    </>
  );
}
