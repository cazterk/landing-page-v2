import React from "react";

const Projects = () => {
  const paraProperties = "py-1 text-sm font-semibold";

  return (
    <div className="h-fit sm:h-screen">
      <div className="sec2 grid grid-cols-1 gap-4">
        <div className="skills h-full border-solid border-2 border-gray-200 rounded">
          <h1 className="p-4 font-bold">SKill</h1>
          <div className="content p-4">
            <p className={paraProperties}>
              ⚛️React econsystem [JavaScript, TypeScript and more]
            </p>

            <p className={paraProperties}>
              {" "}
              💻UI-Engineering [Complex CSS and Design Systems]
            </p>
            <p className={paraProperties}> 🛠️Dotnet ecosystem [C#]</p>
            <p className={paraProperties}>
              {" "}
              📱Android Development [Kotlin with Jetpack Compose ]
            </p>
            <p className={paraProperties}>🛳️Docker containerization</p>
            <p className={paraProperties}>
              🎮Game Development [Unity 3d Engine with C#]
            </p>
          </div>
        </div>
        <div className="hobbies h-full border-solid border-2 border-gray-200 rounded">
          <h1 className="p-4 font-bold">Hobbies</h1>
          <div className="content p-4">
            <p className={paraProperties}>🌱Working in the garden</p>
            <p className={paraProperties}>🚶🏽Taking Walks</p>
            <p className={paraProperties}> 🎙️Listening to podcasts</p>
            <p className={paraProperties}> 🤸🏽‍♂️Working out</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Projects;
