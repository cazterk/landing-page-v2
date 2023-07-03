import Sidebar from "./navbar";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <div className="bg-white dark:bg-gray-800 h-screen overflow-auto justify-between">
      <div>
        <Sidebar />
      </div>
      <main className="m-6 2xl:px-96 h-full">{children}</main>

      <div className="px-2 ">
        <Footer />
      </div>
    </div>
  );
};
export default Layout;
