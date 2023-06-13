import React from "react";
import { IconContext } from "react-icons";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";

const Projects = () => {
  const paraProperties = " flex py-1 text-sm font-semibold";

  return (
    <div className="h-fit sm:h-screen">
      <div className="sec2 grid grid-cols-1 gap-4">
        <div className="skills p-4 h-full border-solid border-2 border-gray-200 rounded">
          <h1 className="py-2 font-bold">SKills</h1>
          <div className="content ">
            <ul className="list-disc">
              <li className={paraProperties}>
                Very Good At Frontend Development and UI-Engineering
              </li>

              <li className={paraProperties}> Backend Development OOP</li>
              <li className={paraProperties}> Database Management</li>
              <li className={paraProperties}>
                {" "}
                Mobile With Android Development
              </li>
              <li className={paraProperties}>Containerization</li>
              <li className={paraProperties}>Game Development</li>
            </ul>
            <h6 className=" pt-2 font-bold">Languages & Frameworks</h6>

            <IconContext.Provider
              value={{
                size: "20",
                color: "#ff6b6b",
                style: { verticalAlign: "middle", marginRight: "2px" },
              }}
            >
              <p className={paraProperties}>
                <FaIcons.FaLaptopCode />
                Frontend: HTML, CSS, JavaScript, Typescript, React
              </p>

              <p className={paraProperties}>
                <AiIcons.AiFillCode />
                Backend: C#, Kotlin, Dotnet, Ktor
              </p>
              <p className={paraProperties}>
                <FaIcons.FaAndroid />
                Mobile: Android Studio + Jetpack Compose
              </p>
              <p className={paraProperties}>
                <FaIcons.FaDatabase />
                Databases: PostgreSQL, Ms-SQL, MongoDB
              </p>
              <p className={paraProperties}>
                <AiIcons.AiOutlineContainer />
                Containerization & Orchestration: Docker
              </p>
            </IconContext.Provider>
          </div>
        </div>
        <div className="hobbies p-4 h-full border-solid border-2 border-gray-200 rounded">
          <h1 className="py-2 font-bold">Hobbies</h1>
          <div className="content ">
            <p className={paraProperties}>🌱Working in the garden</p>
            <p className={paraProperties}>🚶🏽Taking walks</p>
            <p className={paraProperties}> 🎙️Listening to podcasts</p>
            <p className={paraProperties}> 🤸🏽‍♂️Working out</p>
            <p className={paraProperties}> 🎵Listening to music</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Projects;
