import React from "react";
import "antd/dist/antd.css";
import PropTypes from "prop-types";
import Head from "next/head";

const lghproject = ({ Component }) => {
  return (
    <>
      <Head>
        <title>lgh project</title>
      </Head>
      <Component />
    </>
  );
};

lghproject.propTypes = {
  Component: PropTypes.elementType.isRequired,
};

export default lghproject;
