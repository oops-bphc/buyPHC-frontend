import Carousel from "react-bootstrap/Carousel";
import React from "react";
import { Link } from "react-router-dom";
import { styled } from "@mui/system";
import { Typography } from "@mui/material";
import "./styles.css";

const CarouselImg = styled("img")(({ theme }) => ({
  maxHeight: window.innerHeight / 1.3,
  width: "100%",
  objectFit: "cover",
}));

export default function HomePageCarousel() {
  return (
    <div id="homepageCarousel">
      <Carousel fade pause={false}>
        <Carousel.Item>
          <Link to={"/anime/re-zero-kara-hajimeru-isekai-seikatsu"}>
            <CarouselImg
              src="https://i.pinimg.com/originals/31/4e/9a/314e9a89ae515e47879bcb8198ccfa76.png"
              alt="Re:Zero"
              loading="lazy"
            />

            <Carousel.Caption>
              <Typography variant="h3">
                Re:ZERO -Starting Life in Another World
              </Typography>
              <Typography variant="body1">Just Believe In Me</Typography>
            </Carousel.Caption>
          </Link>
        </Carousel.Item>
        <Carousel.Item>
          <Link to={"/anime/steins-gate"}>
            <CarouselImg
              id="listitems"
              src="https://wallpapercave.com/wp/wp1858907.png"
              alt="Steins;Gate"
              loading="lazy"
            />
            <Carousel.Caption>
              <Typography variant="h3">Steins;Gate</Typography>
              <Typography variant="body1">El Psy Congru</Typography>
            </Carousel.Caption>
          </Link>
        </Carousel.Item>
        <Carousel.Item>
          <Link to={"/anime/mirai-nikki-tv"}>
            <CarouselImg
              src="https://images.alphacoders.com/902/902431.jpeg"
              alt="Future Diary"
              loading="lazy"
            />

            <Carousel.Caption>
              <Typography variant="h3">Future Diary</Typography>
              <Typography variant="body1">Things we do for love</Typography>
            </Carousel.Caption>
          </Link>
        </Carousel.Item>
        <Carousel.Item>
          <Link to={"/anime/kakegurui"}>
            <CarouselImg
              src="https://images6.alphacoders.com/860/thumb-1920-860275.png"
              alt="Kakegurui"
              loading="lazy"
            />

            <Carousel.Caption>
              <Typography variant="h3">Kakegurui</Typography>
              <Typography variant="body1">Gamble Everything!</Typography>
            </Carousel.Caption>
          </Link>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
