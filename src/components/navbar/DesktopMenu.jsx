import { Link } from "react-router-dom";
import { IconContext } from "react-icons";

const DesktopMenu = ({ links }) => {
  return (
    <>
      <Link to={"/"}>Logo</Link>

      <div className="flex">
        {links.map((item, idx) => {
          return (
            <li key={idx} className="list-none ">
              <IconContext.Provider value={{ size: "18", color: "#ff6b6b" }}>
                <Link to={item.path} className="flex items-center px-2 ">
                  {item.icon}
                  <span className="pl-1">{item.title}</span>
                </Link>
              </IconContext.Provider>
            </li>
          );
        })}
      </div>
    </>
  );
};

export default DesktopMenu;
