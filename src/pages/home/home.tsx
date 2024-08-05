import { Header } from "./components/header";
import { Main } from "./components/main";
import { Sidebar } from "./components/sidebar";

const Home = () => {
  return (
    <div className="w-screen h-screen grid grid-cols-fuck grid-rows-12">
      <Sidebar layoutStyle="col-start-1 row-start-1 col-end-2 row-end-13 " />
      <Header layoutStyle="col-start-2 row-start-1 col-end-13 row-end-2 " />
      <Main layoutStyle="col-start-2 row-start-2 col-end-13 row-end-13" />
    </div>
  );
};

export { Home };
