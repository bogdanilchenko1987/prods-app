import { useEffect, useState } from "react";
import useStore from "./store";

import "./styles/main.scss";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Container from "./components/Container";
import Sidebar from "./components/Sidebar";
import MainHead from "./components/MainHead";
import SearchFilter from "./components/SearchFilter";
import CardsList from "./components/CardsList";
import MainWrapper from "./components/MainWrapper";
import Loading from "./components/Loading";
import Error from "./components/Error";

function App() {
  const {
    order,
    cartCount,
    fetchAllProducts,
    fetchCategories,
    loading,
    error,
  } = useStore();

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    fetchAllProducts();
    fetchCategories();
  }, [fetchAllProducts, fetchCategories]);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const showCardList = !loading && !error;

  return (
    <>
      <Container>
        <Header cartCount={cartCount} onCartClick={toggleSidebar} />
        <Sidebar order={order} isOpen={isSidebarOpen} onClose={toggleSidebar} />
        <MainWrapper>
          <MainHead />
          <SearchFilter />
          <Loading />
          <Error />
          {showCardList && <CardsList />}
        </MainWrapper>
        <Footer />
      </Container>
    </>
  );
}

export default App;
