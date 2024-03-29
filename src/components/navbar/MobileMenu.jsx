import { Link } from "react-router-dom";
import { AiFillCloseCircle } from "react-icons/ai";
import { useEffect, useState } from "react";

const MobileMenu = ({ links, close, onClick }) => {
  const [animation, setAnimation] = useState(false);

  useEffect(() => {
    setAnimation(true);

    window.addEventListener("resize", (e) => {
      if (e.target.innerWidth >= 640) {
        close();
      }
    });
    return () => {
      window.removeEventListener("resize", () => {});
    };
  }, []);
  return (
    <div>
      <div className="fixed inset-0 top-0 1-0 h-screen w-full backdrop-blur-sm bg-gray-500 bg-opacity-60"></div>
      <div className="fixed inset-0 top-0 1-0 p-5">
        <div
          className={`w-full bg-white dark:text-gray-900 dark:bg-gray-800 rounded-xl p-5 transition-all ${
            animation ? "scale-100" : "scale-95"
          }`}
        >
          <div className="flex items-center justify-between">
            <h1 className="font-semibold dark:text-gray-300">Hey👋🏼</h1>
            <AiFillCloseCircle
              className="w-6 h-6 hover:scale-110 transition-all cursor-pointer dark:text-gray-300"
              onClick={close}
            />
          </div>
          <div className="mt-5 divide-y">
            {links.map(({ title, path }, index) => {
              return (
                <Link
                  key={index}
                  to={path}
                  onClick={onClick}
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
