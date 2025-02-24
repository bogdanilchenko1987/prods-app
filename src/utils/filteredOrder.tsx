import { Product } from "../types/Product";

export const filterOrder = (order: Product[]): Product[] => {
  const productMap: { [key: number]: Product } = {};

  order.forEach((product) => {
    if (productMap[product.id]) {
      productMap[product.id].q += 1;
    } else {
      productMap[product.id] = { ...product, q: 1 };
    }
  });

  return Object.values(productMap);
};

export const calculateTotal = (order: Product[]): number => {
  return order.reduce((acc, product) => acc + product.price * product.q, 0);
};
