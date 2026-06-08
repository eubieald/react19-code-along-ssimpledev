import { MainHeaderComposite } from "../../components/Header.composite";
import {
  TrackingComponent,
  TrackingOrder,
  TrackingProgressLabelsContainer,
  TrackingProgressLabel,
} from "../../components/Tracking.component";
import { GenericLabel, GenericLink } from "../../components/Generic.component";
import { ProductInfo } from "../../components/Product.component";
import athleticSocksImage from "../../assets/images/products/athletic-cotton-socks-6-pairs.jpg";
import {
  ProgressBar,
  ProgressBarContainer,
} from "../../components/ProgressBar.component";
import "./tracking.css";

export default function TrackingPage() {
  return (
    <>
      <link rel="icon" type="image/svg+xml" href="/tracking-favicon.png" />
      <title>Tracking</title>
      <MainHeaderComposite />

      <TrackingComponent>
        <TrackingOrder>
          <GenericLink
            className="back-to-orders-link link-primary"
            href="orders"
          >
            View all orders
          </GenericLink>

          <GenericLabel className="delivery-date">
            Arriving on Monday, June 13
          </GenericLabel>

          <ProductInfo className="product-info">
            Black and Gray Athletic Cotton Socks - 6 Pairs
          </ProductInfo>

          <ProductInfo>Quantity: 1</ProductInfo>

          <img className="product-image" src={athleticSocksImage} />

          <TrackingProgressLabelsContainer>
            <TrackingProgressLabel>Preparing</TrackingProgressLabel>
            <TrackingProgressLabel className="current-status">
              Shipped
            </TrackingProgressLabel>
            <TrackingProgressLabel>Delivered</TrackingProgressLabel>
          </TrackingProgressLabelsContainer>

          <ProgressBarContainer>
            <ProgressBar />
          </ProgressBarContainer>
        </TrackingOrder>
      </TrackingComponent>
    </>
  );
}
