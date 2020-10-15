import styled from "styled-components";

export const Container = styled.div`
  margin-left: 20px;
  color: white;

  h2 {
    padding: 20px 0;
  }
`;

export const Posters = styled.div`
  overflow-y: hidden;
  overflow-x: scroll;

  &::-webkit-scrollbar {
    width: 0;
  }
`;

export const Poster = styled.img`
  object-fit: contain;
  width: 100%;
  max-height: 250px;
  margin-right: 10px;
  transition: transform 450ms;

  &:hover {
    transform: scale(1.08);
  }
`;
