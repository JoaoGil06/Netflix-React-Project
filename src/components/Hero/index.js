import React, { useState, useEffect } from "react";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import {
  Header,
  Container,
  Title,
  Buttons,
  Button,
  Description,
  FadeBottom,
} from "./styles";

import axios from "../../api/axios";
import requests from "../../api/requests";

const Hero = () => {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );

      return request;
    }

    fetchData();
  }, []);

  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }

  return (
    <Header
      style={{
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
      }}
    >
      <Container>
        <Title> {movie?.title || movie?.name || movie?.original_name} </Title>

        <Buttons>
          <Button>Play</Button>
          <Button>A minha lista</Button>
        </Buttons>

        <Description>{truncate(movie?.overview, 150)}</Description>
      </Container>

      <FadeBottom />
    </Header>
  );
};

export default Hero;
