import logo from "./../../assets/images/logo.svg";
import { ImCross } from "react-icons/im";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
type Props = {};
import "./Header.scss";
function Header({}: Props) {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  return (
    <header>
      <a href="/">
        <img src={logo} alt="logo" />
      </a>
      <GiHamburgerMenu
        className="menu-icon"
        onClick={() => {
          setIsMenuOpen(!isMenuOpen);
        }}
      />
      <nav className={`${isMenuOpen ? "menu-open" : null}`}>
        <ul>
          <ImCross
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="icon-cross"
          />
          <li>Home</li>
          <li>New</li>
          <li>Popular</li>
          <li>Trending</li>
          <li>Categories</li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
