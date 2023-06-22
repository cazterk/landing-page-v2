const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div className="flex justify-center">
      <p className="text-sm font-medium my-4 dark:text-gray-300">
        {" "}
        cazterk © {year} All Rights Reserved.
      </p>
    </div>
  );
};

export default Footer;
