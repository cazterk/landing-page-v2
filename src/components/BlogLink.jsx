import { useEffect } from "react";

const BlogLink = () => {
  useEffect(() => {
    window.open("https://www.terklog.com/");
  }, []);

  return (
    <div>
      <h3>Redirecting...</h3>
    </div>
  );
};

export default BlogLink;
