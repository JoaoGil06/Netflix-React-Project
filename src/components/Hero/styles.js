import styled from "styled-components";

export const Header = styled.header`
  background-size: cover;
  color: white;
  object-fit: contain;
  height: 448px;
`;

export const Container = styled.div`
  margin-left: 30px;
  padding-top: 140px;
  height: 190px;
`;

export const Title = styled.h1`
  font-size: 3rem;
  font-weight: 800;
  padding-bottom: 0.3rem;
`;

export const Buttons = styled.div``;

export const Button = styled.button`
  cursor: pointer;
  color: #fff;
  outline: none;
  border: none;
  font-weight: 700;
  border-radius: 0.2vw;
  padding: 0.5rem 2rem;
  margin-right: 1rem;
  background-color: rgba(30, 30, 30, 0.8);

  &:hover {
    color: #000;
    background-color: #e6e6e6;
    transition: all 0.2s;
  }
`;

export const Description = styled.h1`
  width: 45rem;
  line-height: 1.3;
  padding-top: 1rem;
  font-size: 1rem;
  max-width: 360px;
  height: 80px;
`;

export const FadeBottom = styled.div`
  height: 16.4rem;
  background-image: linear-gradient(
    180deg,
    transparent,
    rgba(37, 37, 37, 0.61),
    #111
  );
`;