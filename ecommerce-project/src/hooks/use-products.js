import { useQuery } from "@tanstack/react-query";
import { getProducts } from "../api/Products";

export function useGetProducts() {
  return useQuery({
    queryKey: ["products"],
    queryFn: getProducts,
  });
}

export function useGetProductById(id) {
  return useQuery({
    queryKey: ["product", id],
    queryFn: () => getProducts(id),
  });
}
