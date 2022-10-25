import React, { useState } from "react";
import PropTypes from "prop-types";
// next.js에는 route(Link) 기능이 있다.
import Link from "next/link";
//Row 가로줄 Col 세로줄
import { Input, Menu, Row, Col } from "antd";
import UserProfile from "./UserProfile";
import LoginForm from "./LoginForm";
import styled from "styled-components";

const SearchInput = styled(Input.Search)`
  vertical-align: middle;
`;

const AppLayout = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div>
      <Menu mode="horizontal">
        <Menu.Item key={1}>
          <Link href={"/"}>
            <a>main</a>
          </Link>
        </Menu.Item>
        <Menu.Item key={2}>
          <Link href={"/profile"}>
            <a>profile</a>
          </Link>
        </Menu.Item>
        <Menu.Item key={3}>
          <SearchInput enterButton />
        </Menu.Item>
        <Menu.Item key={4}>
          <Link href={"/signup"}>
            <a>signup</a>
          </Link>
        </Menu.Item>
      </Menu>
      <Row gutter={8}>
        <Col xs={24} md={6}>
          {isLoggedIn ? (
            <UserProfile setIsLoggedIn={setIsLoggedIn} />
          ) : (
            <LoginForm setIsLoggedIn={setIsLoggedIn} />
          )}
        </Col>
        <Col xs={24} md={12}>
          {children}
        </Col>
        <Col xs={24} md={6}>
          right
        </Col>
      </Row>
      {children}
    </div>
  );
};
AppLayout.PropTypes = {
  children: PropTypes.node.isRequired,
};
export default AppLayout;
