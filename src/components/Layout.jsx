import Sidebar from "./navbar";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <div className="bg-slate-50 h-screen ">
      <div>
        <Sidebar />
      </div>
      <main className="h-full bg-slate-50 ">{children}</main>
      <Footer />
    </div>
  );
};
export default Layout;
