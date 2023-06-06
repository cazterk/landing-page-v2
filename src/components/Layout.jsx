import Sidebar from "./navbar";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <div className="bg-slate-50 h-screen overflow-auto justify-between">
      <div>
        <Sidebar />
      </div>
      <main className=" bg-slate-50  m-6">{children}</main>

      <div className="">
        <Footer />
      </div>
    </div>
  );
};
export default Layout;
