import React, { useState } from "react";
import PropTypes from "prop-types";
// next.js에는 route(Link) 기능이 있다.
import Link from "next/link";
//Row 가로줄 Col 세로줄
import { Input, Menu, Row, Col } from "antd";
import UserProfile from "./UserProfile";
import LoginForm from "./LoginForm";
import styled from "styled-components";
import { useSelector } from "react-redux";

const SearchInput = styled(Input.Search)`
  vertical-align: middle;
`;

const AppLayout = ({ children }) => {
  const usingUser = useSelector((state) => state.user.usingUser);

  return (
    <div>
      <Menu mode="horizontal">
        <Menu.Item key={"Main"}>
          <Link href={"/"}>
            <a>main</a>
          </Link>
        </Menu.Item>
        <Menu.Item key={"Profile"}>
          <Link href={"/profile"}>
            <a>profile</a>
          </Link>
        </Menu.Item>
        <Menu.Item key={"SearchBar"}>
          <SearchInput enterButton />
        </Menu.Item>
        <Menu.Item key={"SignUp"}>
          <Link href={"/signup"}>
            <a>signup</a>
          </Link>
        </Menu.Item>
      </Menu>
      <Row gutter={8}>
        <Col xs={24} md={6}>
          {usingUser ? <UserProfile /> : <LoginForm />}
        </Col>
        <Col xs={24} md={12}>
          {children}
        </Col>
        <Col xs={24} md={6}>
          우측 메뉴바
        </Col>
      </Row>
    </div>
  );
};
AppLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
export default AppLayout;
