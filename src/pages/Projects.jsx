import React from "react";

const Projects = () => {
  return (
    <div className="h-fit sm:h-screen">
      <div class="grid gap-4  grid-rows-1   md:grid-cols-2 h-full  ">
        <div className="personality h-full border-solid border-2  border-gray-200 ">
          <h1 className="p-4">Personal Details</h1>
          <div className="content p-4">
            <p className="py-1">✝️Follower of Christ✝️</p>

            <p className="py-1 ">
              👋🏼Hey there I'm a software developer, I make indie games
              occasionally too, passionate about developing robust applications
              with great user experience and great interfaces
            </p>

            <p className="py-1">
              {" "}
              🏡Based in Lusaka, Zambia But open to relocating to wherever
              awesome opportunities take me
            </p>
            <p className="py-1">Very Pragmatic</p>

            <p className="py-1">
              👷🏽I have experience in various technologies and tools in both a
              commercial and non-commercial setting, I technologies that I have
              worked with include , ReactJS, Dotnet, Django, Docker, Git and
              more...
            </p>

            <p className="py-1">
              🥲I enjoy working with Android, React, Dotnet, OOP quite a lot and
              very open to work with a lot more technologies
            </p>
          </div>
        </div>

        <div className="sec2 grid grid-cols-1 gap-4">
          <div className="skills h-full border-solid border-2  border-gray-200 ">
            <h1 className="p-4">SKill</h1>
            <p className="py-1">
              React econsystem [JavaScript, TypeScript and more]
            </p>

            <p className="py-1">
              {" "}
              UI-Engineering [Basic and Complex CSS and Design Systems]
            </p>
            <p className="py-1">
              {" "}
              UI-Engineering [Basic and Complex CSS and Design Systems]
            </p>
            <p className="py-1">
              {" "}
              UI-Engineering [Basic and Complex CSS and Design Systems]
            </p>
            <p className="py-1">
              {" "}
              UI-Engineering [Basic and Complex CSS and Design Systems]
            </p>
          </div>
          <div className="hobbies h-full border-solid border-2  border-gray-200 ">
            <h1>Hobbies</h1>
            <p className="py-1">
              {" "}
              UI-Engineering [Basic and Complex CSS and Design Systems]
            </p>
            <p className="py-1">
              {" "}
              UI-Engineering [Basic and Complex CSS and Design Systems]
            </p>
            <p className="py-1">
              {" "}
              UI-Engineering [Basic and Complex CSS and Design Systems]
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Projects;
