import useStore from "../store";

export default function Loading() {
  const { loading } = useStore();

  return (
    <>
      {loading && (
        <div className="loading">
          <div className="loading__spinner"></div>
        </div>
      )}
    </>
  );
}
