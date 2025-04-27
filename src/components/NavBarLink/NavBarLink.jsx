import React from "react";

const NavBarLink = ({ link_url, link_name }) => {
  const handleClick = (e) => {
    if (link_url === "#") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else if (link_url.startsWith("#")) {
      e.preventDefault();
      const targetId = link_url.slice(1); // remove '#' character
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <a
      onClick={handleClick}
      href={link_url}
      className="font-body text-sm capitalize cursor-pointer duration-1000 border rounded-[70px] w-[85%] lg:w-auto mx-auto p-2 shadow-md hover:bg-accent hover:border-white lg:border-0 lg:shadow-none lg:hover:bg-transparent lg:mx-0 lg:rounded-none lg:p-0 lg:hover:text-[#4F46E5]"
    >
      {link_name}
    </a>
  );
};

export default NavBarLink;
