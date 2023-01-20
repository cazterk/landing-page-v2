import { Link } from "react-router-dom";
import { IconContext } from "react-icons";
import { SidebarData } from "./data";

const Sidebar = () => {
  return (
    <div className="flex h-16 bg-white justify-between px-96 items-center">
      <Link to={"/"}>Logo</Link>

      <div className="flex">
        {SidebarData.map((item, idx) => {
          return (
            <li key={idx} className="list-none">
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
    </div>
  );
};

export default Sidebar;
