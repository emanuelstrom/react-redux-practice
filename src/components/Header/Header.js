import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="ui top-0 menu sticky">
      <div className="ui container center ">
        <Link to={"/"}>
          <h2>FakeShop</h2>
        </Link>
      </div>
    </div>
  );
};

export default Header;
