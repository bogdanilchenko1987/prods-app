import useStore from "../store";

export default function Error() {
  const { error } = useStore();

  return <>{error && <div className="error">{error}</div>}</>;
}
