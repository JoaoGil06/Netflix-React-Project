import styled from "styled-components";

export const Nav = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  height: 65px;
  padding: 20px;

  display: flex;
  justify-content: space-between;

  z-index: 999;
  background-color: ${(props) =>
    props.showBackground ? "#111" : "transparent"};

  transition-timing-function: ease-in;
  transition: all 0.5s;
`;

export const NavLogo = styled.img`
  width: 80px;
  object-fit: contain;

  position: fixed;
  left: 20px;
`;

export const NavAvatar = styled.img`
  width: 30px;
  object-fit: contain;

  position: fixed;
  right: 20px;
`;
