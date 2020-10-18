import React, { useEffect, useState } from "react";

import { Nav, NavLogo, NavAvatar } from "./styles";

const Navbar = () => {
  const [showNavBackground, setShowNavBackground] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setShowNavBackground(true);
      } else {
        setShowNavBackground(false);
      }
    });
  }, []);

  return (
    <Nav showBackground={showNavBackground}>
      <NavLogo
        src="https://upload.wikimedia.org/wikipedia/commons/0/0f/Logo_Netflix.png"
        alt="Netflix Logo"
      />

      <NavAvatar
        src="https://avatars0.githubusercontent.com/u/33355337?s=460&u=3c357e3a6e02e6aefbfe745db0a1af594f9906d7&v=4"
        alt="Avatar"
      />
    </Nav>
  );
};

export default Navbar;
