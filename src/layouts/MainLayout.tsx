import { Outlet } from "react-router";
import Footer from "../components/common/Footer";
import Header from "../components/common/Header";

function MainLayout() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export { MainLayout };
