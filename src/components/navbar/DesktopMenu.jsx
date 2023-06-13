import { Link } from "react-router-dom";
import { IconContext } from "react-icons";

const DesktopMenu = ({ links }) => {
  return (
    <>
      <Link to={"/"} className="h-8 w-8 flex items-center ">
        <img src="logo.png" />
        <h4 className="text-sm font-bold">CAZTERK</h4>
      </Link>

      <div className="flex">
        {links.map((item, idx) => {
          return (
            <li key={idx} className="list-none ">
              <IconContext.Provider value={{ size: "13", color: "#ff6b6b" }}>
                <Link to={item.path} className="flex items-center px-2 ">
                  {item.icon}
                  <span className="pl-1 text-xs font-semibold">
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
