import useStore from "../store";

export default function ButtonLoadMore() {
  const { loadMoreItems } = useStore();
  return (
    <button onClick={loadMoreItems} className="button-load-more">
      Load More
    </button>
  );
}
