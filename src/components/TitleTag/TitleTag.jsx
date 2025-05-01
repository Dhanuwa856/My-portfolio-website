import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
const TitleTag = (props) => {
  return (
    <StyledTitle
      as={motion.h1}
      id={props.id}
      initial={{ opacity: 0, x: -100 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{
        type: "spring",
        stiffness: 500,
        damping: 20,
        duration: 0.1,
      }}
      data-text={`<${props.sub_title}/>`}
    >
      <span className="actual-text">&lt;{props.sub_title}/&gt;</span>
      <span aria-hidden="true" className="hover-text" id={props.id}>
        &lt;{props.sub_title}/&gt;
      </span>
    </StyledTitle>
  );
};

const StyledTitle = styled.h1`
  /* Custom properties for easy tweaking */
  --base-color: #4f46e5; /* Normal text color */
  --hover-color: #22c55e; /* Hover text color */
  --fs-size: 3rem; /* Roughly text-5xl size */
  /* --border-right: 4px; Thickness of the animated line */

  letter-spacing: 4px;
  text-decoration: none;
  font-size: var(--fs-size);
  font-family: "Smooch Sans", serif;
  position: relative;
  text-transform: capitalize;
  width: fit-content;
  margin: 2rem auto;
  cursor: pointer;
  font-weight: 600;

  /* Base text styling */
  color: var(--base-color);

  /* The base text layer */
  .actual-text {
    /* This text is simply displayed normally in the base color */
  }

  /* The overlay text that animates on hover */
  .hover-text {
    position: absolute;
    top: 0;
    left: 0;
    color: var(--hover-color);
    width: 0; /* Hidden by default */
    overflow: hidden;
    white-space: nowrap;
    border-right: var(--border-right) solid var(--hover-color);
    transition: width 1.5s;
  }

  /* On hover, expand the overlay text (only partially) and add a glow */
  &:hover .hover-text {
    width: 100%; /* Only covers 70% of the text */
    filter: drop-shadow(0 0 23px var(--hover-color));
  }
`;

export default TitleTag;
