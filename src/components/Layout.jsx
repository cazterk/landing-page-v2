import Sidebar from "./navbar";

const Layout = ({ children }) => {
  return (
    <div className="bg-slate-50 h-screen ">
      <div>
        <Sidebar />
      </div>
      <main>{children}</main>
    </div>
  );
};
export default Layout;
