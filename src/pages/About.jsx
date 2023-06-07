const About = () => {
  const paraProperties = "py-1 text-sm font-semibold";

  return (
    <div className="h-screen">
      <div className="grid gap-4  grid-rows-1 md:grid-cols-1 ">
        <div className="personality  border-solid border-2 border-gray-200 rounded">
          <h1 className="p-4 font-bold">Personal Details</h1>
          <div className="content p-4">
            <p className={paraProperties}>✝️Follower of Christ✝️</p>

            <p className={paraProperties}>
              👋🏼Hey there I'm a software developer, I make indie games
              occasionally too, passionate about developing robust applications
              with great user experience and great interfaces
            </p>

            <p className={paraProperties}>
              {" "}
              🏡Based in Lusaka, Zambia But open to relocating to wherever
              awesome opportunities take me
            </p>
            <p className={paraProperties}>🙂Very Pragmatic</p>

            <p className={paraProperties}>
              👷🏽I have experience in various technologies and tools in both a
              commercial and non-commercial setting, I technologies that I have
              worked with include , ReactJS, Dotnet, Django, Docker, Git and
              more...
            </p>

            <p className={paraProperties}>
              🥲I enjoy working with Android, React, Dotnet, OOP quite a lot and
              very open to work with a lot more technologies
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;
