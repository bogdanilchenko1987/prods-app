import { create } from "zustand";

interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
  category: string;
  q: number;
}

interface StoreState {
  products: Product[];
  categories: string[];
  order: Product[];
  cartCount: number;
  category: string;
  currentPage: number;
  itemsPerPage: number;
  loading: boolean;
  error: string | null;
  fetchAllProducts: () => void;
  fetchCategories: () => void;
  fetchProductsByCategory: (category: string) => void;
  setProducts: (products: Product[]) => void;
  setCategories: (categories: string[]) => void;
  setCategory: (category: string) => void;
  addToCart: (product: Product) => void;
  loadMoreItems: () => void;
  clearOrder: () => void;
}

const useStore = create<StoreState>((set) => ({
  products: [],
  categories: [],
  order: [],
  cartCount: 0,
  category: "",
  currentPage: 1,
  itemsPerPage: 6,
  loading: false,
  error: null,
  fetchCategories: async () => {
    set({ loading: true, error: null });
    try {
      const response = await fetch(
        "https://fakestoreapi.com/products/categories"
      );
      if (!response.ok) {
        throw new Error("Failed to fetch categories");
      }
      const categories = await response.json();
      set({ categories, loading: false });
    } catch (error) {
      set({ error: (error as Error).message, loading: false });
      console.error("Error fetching categories:", error);
    }
  },
  fetchProductsByCategory: async (category) => {
    set({ loading: true, error: null });
    try {
      let response;
      if (category) {
        response = await fetch(
          `https://fakestoreapi.com/products/category/${category}`
        );
      } else {
        response = await fetch("https://fakestoreapi.com/products");
      }
      if (!response.ok) {
        throw new Error("Failed to fetch products");
      }
      const products = await response.json();
      set({ products, loading: false });
    } catch (error) {
      set({ error: (error as Error).message, loading: false });
      console.error("Error fetching products:", error);
    }
  },
  fetchAllProducts: async () => {
    set({ loading: true, error: null });
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      if (!response.ok) {
        throw new Error("Failed to fetch products");
      }
      const products = await response.json();
      set({ products, loading: false });
    } catch (error) {
      set({ error: (error as Error).message, loading: false });
      console.error("Error fetching products:", error);
    }
  },
  setProducts: (products) => set({ products }),
  setCategories: (categories) => set({ categories }),
  setCategory: (category) => set({ category, currentPage: 1 }),
  addToCart: (product) =>
    set((state) => ({
      order: [...state.order, product],
      cartCount: state.cartCount + 1,
    })),
  loadMoreItems: () => set((state) => ({ currentPage: state.currentPage + 1 })),
  clearOrder: () => set({ order: [], cartCount: 0 }),
}));
export default useStore;
