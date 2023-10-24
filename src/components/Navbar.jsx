import { useState, useRef, useEffect} from "react";
import navbarData from "../data/navbarData";
import { CiMenuFries } from "react-icons/ci";

function Navbar() {

const [navbarUl, setNavbarUl] = useState(false);


const hamburgerHandler = () => {
    setNavbarUl(!navbarUl);
}

  return (
    <header>
      <div className="header_left">
        <div className="header_left_logo">
          <p>Navbar</p>
        </div>
      </div>
      <div className="header_right">
          <CiMenuFries
            className="header_navbar_hamburger"
            onClick={hamburgerHandler}
          />
        <div className="header_navbar">
          <ul className={`${navbarUl ? 'show' : 'hide'}`}>
            {navbarData.map((item, index) => {
              const { id, title, link } = item;
              return (
                <li key={id} className="navbar_item">
                  <a href={link}>{title}</a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
