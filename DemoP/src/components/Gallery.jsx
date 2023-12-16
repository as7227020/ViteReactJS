import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";

const Gallery = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -200, y: 0 }}
      animate={{ opacity: 1, x: 0, y: 0 }}
      exit={{ opacity: 0, x: window.innerWidth }}
      transition={{ duration: 0.5, type: "linear" }}
    >
      <GalleryBanner />
    </motion.div>
  );
};

export default Gallery;

const GalleryBanner = styled.div`
  background-image: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
    url(https://images.unsplash.com/photo-1667327859487-4bd38c929a73?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80);
  height: 100vh;
  /* min-width: 100%; */
  margin: 0;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  color: #fff;
  overflow: hidden;
`;