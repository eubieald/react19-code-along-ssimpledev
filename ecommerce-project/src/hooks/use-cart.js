import { useQuery } from "@tanstack/react-query";
import { getCartItems, getDeliveryOptions } from "../api/Cart";

export const useGetCartItems = ({ param = "" }) => {
  return useQuery({
    queryKey: ["cart-items", param],
    queryFn: () => getCartItems({ param }),
  });
};

export const useGetDeliveryOptions = ({ param = "" }) => {
  return useQuery({
    queryKey: ["delivery-options", param],
    queryFn: () => getDeliveryOptions({ param }),
  });
};
