import React from "react";
//import { Link } from "react-router-dom";
//import Button from "../Button/Button";
import Logo from "../Logo/Logo";
import Search from "../Search/Search";
import "./NavbarStyles.css";
import Button from "../Button/Button";


/*function Navbar({ searchData }) {
  return (
    <nav className={styles.navbar}>
      <Link to="/">
        <Logo />
      </Link>
      <Search
        placeholder="Search a song of your choice"
        searchData={searchData}
      />
      <Button>Give Feedback</Button>
    </nav>
  );
}*/
function Navbar() {
  return (
    <div className="container">
    <nav className="navbar">
      <Logo/>
      <Search/>
      <Button/>
    </nav>
    </div>
  );
}



export default Navbar;
