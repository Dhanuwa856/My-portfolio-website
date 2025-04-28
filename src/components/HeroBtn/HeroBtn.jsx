import React from "react";
import styled from "styled-components";
import { FaEnvelope } from "react-icons/fa";

const HeroBtn = () => {
  return (
    <StyledWrapper>
      <button className="btn-53">
        <div className="original">
          <FaEnvelope /> Hire Me
        </div>
        <div className="letters gap-2">
          <div>
            <FaEnvelope />
          </div>
          <div>
            <span>H</span>
            <span>i</span>
            <span>r</span>
            <span>e</span>
            <span>&nbsp;</span>
            <span>M</span>
            <span>e</span>
          </div>
        </div>
      </button>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .btn-53,
  .btn-53 * {
    box-sizing: border-box;
  }

  .btn-53 {
    background-color: #22c55e;
    width: 100%;
    color: #fff;
    border: 1px solid;
    font-weight: 600;
    border-radius: 70px;
    padding: 8px 24px;
    font-family: "Kanit", "serif";
    position: relative;
    overflow: hidden;
    text-transform: uppercase;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center; /* Ensures content is vertically centered */
    text-align: center; /* Ensures text alignment */
    gap: 8px;
    font-size: 14px;
    border: none;
  }

  .btn-53 .original {
    background: #4f46e5;
    font-size: 14px;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center; /* Centers icon and text vertically */
    place-content: center;
    position: absolute;
    inset: 0;
    transition: transform 0.2s cubic-bezier(0.87, 0, 0.13, 1);
    text-align: center;
    gap: 8px;
  }

  .btn-53:hover .original {
    transform: translateY(100%);
  }

  .btn-53 .letters {
    display: flex;
    justify-content: center; /* Ensures letters are horizontally centered */
    align-items: center; /* Ensures letters are vertically centered */
  }

  .btn-53 div span {
    opacity: 0;
    transform: translateY(-15px);
    transition: transform 0.2s cubic-bezier(0.87, 0, 0.13, 1), opacity 0.2s;
  }

  .btn-53 div span:nth-child(2n) {
    transform: translateY(15px);
  }

  .btn-53:hover div span {
    opacity: 1;
    transform: translateY(0);
  }

  .btn-53:hover div span:nth-child(2) {
    transition-delay: 0.1s;
  }

  .btn-53:hover span:nth-child(3) {
    transition-delay: 0.2s;
  }

  .btn-53:hover span:nth-child(4) {
    transition-delay: 0.3s;
  }

  .btn-53:hover span:nth-child(5) {
    transition-delay: 0.4s;
  }

  .btn-53:hover span:nth-child(6) {
    transition-delay: 0.5s;
  }

  .btn-53:hover span:nth-child(7) {
    transition-delay: 0.6s;
  }

  .btn-53:hover span:nth-child(8) {
    transition-delay: 0.7s;
  }
`;

export default HeroBtn;
