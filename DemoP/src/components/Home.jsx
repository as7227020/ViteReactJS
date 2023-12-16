import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";
import { homeVariants } from "../motionSettings";

const Home = () => {
  return (
    <motion.div
      variants={homeVariants}
      initial="initial"
      animate="enter"
      exit="exit"
      transition={{ duration: 0.5, type: "linear" }}
    >
      <HomeBanner />
      <p>Hello World</p>
      <p>Hello World</p>
      <p>Hello World</p>
      <p>Hello World</p>
      <p>Hello World</p>
      <p>Hello World</p>
      <p>Hello World</p>
      <p>Hello World</p>
      <p>Hello World</p>
      <p>Hello World</p>
      <p>Hello World</p>
      <p>Hello World</p>
      <p>Hello World</p>
      <p>Hello World</p>
      <p>Hello World</p>
      <p>Hello World</p>
      <p>Hello World</p>
      <p>Hello World</p>
      <p>Hello World</p>
      <p>Hello World</p>
      <p>Hello World</p>
      <p>Hello World</p>
      <p>Hello World</p>
      <p>Hello World</p>
      <p>Hello World</p>
      <p>Hello World</p>
      <p>Hello World</p>
      <p>Hello World</p>
      <p>Hello World</p>
      <p>Hello World</p>
      <p>Hello World</p>
      <p>Hello World</p>
      <p>Hello World</p>
      <p>Hello World</p>
      <p>Hello World</p>
      <p>Hello World</p>
      <p>Hello World</p>
      <p>Hello World</p>
      <p>Hello World</p>
      <p>Hello World</p>
      <p>Hello World</p>
      <p>Hello World</p>
      <p>Hello World</p>
      <p>Hello World</p>
      <p>Hello World</p>
      <p>Hello World</p>
      <p>Hello World</p>
      <p>Hello World</p>
      <p>Hello World</p>
      <p>Hello World</p>
    </motion.div>
  );
};

export default Home;

const HomeBanner = styled.div`
  background-image: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
    url(https://images.unsplash.com/photo-1565423529726-201d2924dde4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzR8fGRyaW5rfGVufDB8MHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1267&q=60);
  height: 100vh;
  min-width: 100%;
  margin: 0;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  color: #fff;
  overflow: hidden;
`;