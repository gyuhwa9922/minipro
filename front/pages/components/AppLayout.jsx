import React from "react";
import PropTypes from "prop-types";
// next.js에는 route(Link) 기능이 있다.
import Link from "next/link";

const AppLayout = ({ children }) => {
  return (
    <div>
      <div>
        <Link href={"/"}>
          <a>a</a>
        </Link>
        <Link href={"/profile"}>
          <a>b</a>
        </Link>
        <Link href={"/signup"}>
          <a>c</a>
        </Link>
      </div>
      {children}
    </div>
  );
};
AppLayout.PropTypes = {
  children: PropTypes.node.isRequired,
};
export default AppLayout;
