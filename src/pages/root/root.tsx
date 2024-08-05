import { Outlet } from "react-router-dom";

const Root = () => {
  return (
    <div className="w-screen min-h-screen dark:bg-black text-black dark:text-white ">
      <Outlet />
    </div>
  );
};

export { Root };
