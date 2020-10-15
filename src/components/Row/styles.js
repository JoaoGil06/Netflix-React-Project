import styled from "styled-components";

export const Container = styled.div``;

export const Posters = styled.div`
  overflow-y: hidden;
  overflow-x: scroll;
  padding: 20px;

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
