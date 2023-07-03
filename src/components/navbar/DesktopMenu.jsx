import { Link } from "react-router-dom";
import { IconContext } from "react-icons";
import Switcher from "../../utils/Switcher";

const DesktopMenu = ({ links }) => {
  return (
    <>
      <Link to={"/"} className="h-6 w-6 flex items-center ">
        <img src="logo.png" className="h-4 w-4 mr-1" />
        <h4 className="text-sm font-extrabold dark:text-gray-300 ">CAZTERK</h4>
      </Link>

      <div className="flex items-center">
        <div className="pr-2 ">
          <Switcher size={20} />
        </div>
        {links.map((item, idx) => {
          return (
            <li key={idx} className="list-none ">
              <IconContext.Provider value={{ size: "13", color: "#ff6b6b" }}>
                <Link to={item.path} className="flex items-center px-2 ">
                  {item.icon}
                  <span className="pl-1 text-xs font-semibold dark:text-gray-300">
                    {item.title}
                  </span>
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
