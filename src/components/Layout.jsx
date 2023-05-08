import Sidebar from "./navbar";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <div className="bg-slate-50 h-screen overflow-auto">
      <div>
        <Sidebar />
      </div>
      <main className=" bg-slate-50 h-screen">{children}</main>
      <Footer />
    </div>
  );
};
export default Layout;
