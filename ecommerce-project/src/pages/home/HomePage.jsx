import { MainHeaderComposite } from "../../components/Header.composite";
import { GenericRow } from "../../components/Generic.component";
import { GenericButton } from "../../components/Button.component";

import checkMarkIcon from "../../assets/icons/checkmark.png";

import "./header.css";
import "./HomePage.css";
import { HomeComponent } from "../../components/Home.component";
import {
  ProductContainer,
  ProductGrid,
  ProductImage,
  ProductQuantityContainer,
  ProductRatingContainer,
  ProductPrice,
} from "../../components/Product.component";
import { GenericSelect } from "../../components/Select.component";
import { useGetProducts } from "../../hooks/use-products";
import { formatCurrency } from "../../utils/format-utils";

export default function HomePage({ cartItems = [] }) {
  // I am using useQuery from React Query tanstack to fetch products from the API
  const {
    data: products = [],
    isLoading: isProductsLoading,
    error: productsError,
  } = useGetProducts();

  if (isProductsLoading) {
    return <div>Loading...</div>;
  }

  if (productsError) {
    return <div>Something went wrong.</div>;
  }

  return (
    <>
      <link rel="icon" type="image/svg+xml" href="/home-favicon.png" />
      <title>Ecommerce Project</title>
      <MainHeaderComposite cartItems={cartItems} />

      <HomeComponent>
        <ProductGrid>
          {products.map((product) => {
            const ratingImage = new URL(
              `../../assets/images/ratings/rating-${product.rating.stars * 10}.png`,
              import.meta.url,
            ).href;

            // Dynamically import product images based on the product data because on runtime the images are not available in the public folder and we need to use import.meta.glob to get the correct image path
            const productImages = import.meta.glob(
              "../../assets/images/products/*",
              {
                eager: true,
                import: "default",
              },
            );
            const imagePath = `../../assets/${product.image}`;
            const productImage = productImages[imagePath];

            return (
              <ProductContainer key={product.id}>
                <ProductImage>
                  <img
                    className="product-image"
                    alt={product.name}
                    src={productImage}
                  />
                </ProductImage>
                <GenericRow className="product-name limit-text-to-2-lines">
                  {product.name}
                </GenericRow>

                <ProductRatingContainer>
                  <img className="product-rating-stars" src={ratingImage} />
                  <div className="product-rating-count link-primary">
                    {product.rating.count}
                  </div>
                </ProductRatingContainer>

                <ProductPrice>
                  ${formatCurrency(product.priceCents)}
                </ProductPrice>

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

                <GenericButton className="add-to-cart-button button-primary">
                  Add to Cart
                </GenericButton>
              </ProductContainer>
            );
          })}
        </ProductGrid>
      </HomeComponent>
    </>
  );
}
