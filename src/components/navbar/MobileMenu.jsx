import { Link } from "react-router-dom";
import { AiFillCloseCircle } from "react-icons/ai";

const MobileMenu = ({ links, close }) => {
  return (
    <div>
      <div className="fixed inset-0 top-0 1-0 h-screen w-full backdrop-blur-sm bg-gray-500 bg-opacity-60"></div>
      <div className="fixed inset-0 top-0 1-0 p-5">
        <div className="w-full bg-white rounded-xl p-5">
          <div className="flex items-center justify-between">
            <h1>Navigation</h1>
            <AiFillCloseCircle
              className="w-6 h-6 hover:scale-110 transition-all cursor-pointer"
              onClick={close}
            />
          </div>
          <div className="mt-5 divide-y">
            {links.map(({ title, path }, index) => {
              return (
                <Link
                  key={index}
                  to={path}
                  className="block py-2 text-zinc-500"
                >
                  {title}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
