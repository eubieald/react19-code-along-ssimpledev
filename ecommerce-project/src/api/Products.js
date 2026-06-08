import { genericRequest } from "../lib/generic-actions";

export const getProducts = async () => {
  const response = await genericRequest({
    path: "/products",
  });

  if (!response.ok) {
    throw new Error("Failed to fetch products");
  }

  return response.json();
};

export const getProductById = async (id) => {
  const response = await genericRequest({
    path: `/products/${id}`,
  });

  if (!response.ok) {
    throw new Error("Failed to fetch product");
  }

  return response.json();
};
