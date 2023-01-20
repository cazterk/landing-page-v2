const Layout = ({ children }) => {
  return (
    <div>
      <div>// navbar</div>
      <main>{children}</main>
    </div>
  );
};
export default Layout;
