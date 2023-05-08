import React from "react";
import { IconContext } from "react-icons";
import { FiGithub, FiTwitter } from "react-icons/fi";
import { ImLinkedin } from "react-icons/im";

const Home = () => {
  return (
    <div className="flex  flex-col justify-center items-center h-screen ">
      <i className="mb-4">logo</i>
      <h1 className="text-5xl font-bold">Cazterk</h1>
      <p className="my-4 text-lg font-medium ">
        Christian | Frontend React | Dotnet Backend | Andriod + Jetpack Compose
        | Unity
      </p>
      <IconContext.Provider value={{ size: "20", color: "#ff6b6b" }}>
        <div className="flex">
          <a target="_blank" rel="noopener" href="https://github.com/cazterk">
            <FiGithub />
          </a>
          <a
            className="mx-2"
            target="_blank"
            rel="noopener"
            href="https://www.linkedin.com/in/cephaszulu/"
          >
            <ImLinkedin />
          </a>
          <a target="_blank" rel="noopener" href="https://twitter.com/cazterk">
            <FiTwitter />
          </a>
        </div>
      </IconContext.Provider>
    </div>
  );
};

export default Home;
