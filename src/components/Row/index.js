import React, { useState } from "react";
import { useEffect } from "react";
import axios from "../../api/axios";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";

import { Container, Posters, Poster } from "./styles";

const base_url_image = "https://image.tmdb.org/t/p/original/";

const settings = {
  infinite: true,
  speed: 500,
  slidesToShow: 8,
  slidesToScroll: 8,
  adaptiveHeight: true,
  arrows: false,
};

const Row = ({ title, fetchUrl }) => {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  const handleClickPoster = (movie) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      movieTrailer(movie?.original_name || "")
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get("v"));
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  return (
    <Container>
      <h2>{title}</h2>

      <Posters>
        <Slider {...settings}>
          {movies.map((movie) => (
            <Poster
              key={movie.id}
              onClick={() => handleClickPoster(movie)}
              src={`${base_url_image}${movie.poster_path}`}
              alt={movie.name}
            />
          ))}
        </Slider>
      </Posters>
      {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
    </Container>
  );
};

export default Row;
