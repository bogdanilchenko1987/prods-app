import React from "react";
import useStore from "../store";
import ButtonLoadMore from "./ButtonLoadMore";
import CardItem from "./CardItem";

const CardsList: React.FC = () => {
  const { products, category, currentPage, itemsPerPage } = useStore();

  const filteredProducts = category
    ? products.filter((product) => product.category === category)
    : products;

  const displayedProducts = filteredProducts.slice(
    0,
    currentPage * itemsPerPage
  );

  const showButtonLoadmore = displayedProducts.length < filteredProducts.length;

  return (
    <>
      <div className="cards-list">
        {displayedProducts.map((product) => (
          <CardItem product={product} key={product.id} />
        ))}
      </div>
      {showButtonLoadmore && <ButtonLoadMore />}
    </>
  );
};

export default CardsList;
