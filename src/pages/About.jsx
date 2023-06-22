const About = () => {
  const paraProperties = "py-1 text-sm font-semibold dark:text-gray-300";

  return (
    <div className="h-screen">
      <div className="grid gap-4  grid-rows-1 md:grid-cols-1 ">
        <div className="personality  border-solid border-2 border-gray-200 rounded">
          <h1 className="p-4 font-bold dark:text-gray-300">Personal Details</h1>
          <div className="content p-4">
            <p className={paraProperties}>✝️Follower of Christ✝️</p>

            <p className={paraProperties}>
              Hey👋🏼there I'm caz a full stack software developer, I make indie
              games occasionally too, passionate about developing robust
              applications with great user experience and great interfaces. My
              interests include Object Oriented Programming, Frontend, Backend,
              and Mobile development. I did a computer-related course at
              university
            </p>

            <p className={paraProperties}>
              I have interesting things I do which include a YouTube channel and
              a blog where I drop software development content, a subscription
              on both or ether will be appreciated.
            </p>

            <p className={paraProperties}>
              I have experience in various technologies and tools in both
              commercial and non-commercial settings, the technologies that I
              have worked with include, ReactJS, Dotnet, Django, PostgreSQL,
              Docker, Git, and everything in between.
            </p>

            <p className={paraProperties}>
              {" "}
              Based in Lusaka, Zambia But open to relocating to wherever awesome
              opportunities take me
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;
