import {
  MainHeaderComponent,
  MainHeaderLeftSection,
  MainHeaderMiddleSection,
  HeaderRightSection,
} from "../components/Header.component";

import logo from "../assets/images/logo-white.png";
import mobileLogo from "../assets/images/mobile-logo-white.png";
import cartIcon from "../assets/images/icons/cart-icon.png";
import searchIcon from "../assets/images/icons/search-icon.png";
import { GenericFormInput } from "../components/FormInput.component";
import { GenericButton } from "../components/Button.component";
import { GenericLink, GenericNavLink } from "../components/Generic.component";
import { getCartTotalQuantity } from "../utils/cart-utils";
export const MainHeaderComposite = ({ className = "", cartItems = [] }) => {
  return (
    <MainHeaderComponent className={className}>
      <MainHeaderLeftSection>
        <GenericLink href="/">
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
        <GenericNavLink className="orders-link header-link" href="orders">
          <span className="orders-text">Orders</span>
        </GenericNavLink>
        <GenericNavLink className="cart-link header-link" href="checkout">
          <img className="cart-icon" src={cartIcon} />
          <div className="cart-quantity">{getCartTotalQuantity(cartItems)}</div>
          <div className="cart-text">Cart</div>
        </GenericNavLink>
      </HeaderRightSection>
    </MainHeaderComponent>
  );
};
