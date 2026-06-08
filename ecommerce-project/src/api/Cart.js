import { genericRequest } from "../lib/generic-actions";

export const getCartItems = async ({ param = "" }) => {
  const queryParam = param ? `?${param}` : "";
  const response = await genericRequest({
    path: `/cart-items${queryParam}`,
  });

  if (!response.ok) {
    throw new Error("Failed to fetch cart items");
  }

  return response.json();
};

export const getDeliveryOptions = async ({ param = "" }) => {
  const queryParam = param ? `?${param}` : "";
  const response = await genericRequest({
    path: `/delivery-options${queryParam}`,
  });

  if (!response.ok) {
    throw new Error("Failed to fetch delivery options");
  }

  return response.json();
};
