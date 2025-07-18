import {
  Box,
  Card,
  CardBody,
  HStack,
  Heading,
  Image,
  LinkBox,
  useBreakpointValue,
} from "@chakra-ui/react";
import Genres from "./Genres";
import { Link as RouterLink } from "react-router-dom";
import RatingScore from "./RatingScore";

import {
  imgExtractionUrl,
  placeHolderImageUrl,
} from "../services/ImageExtractionUrl";
import { Movie } from "../hooks/useMovies";
import ReleaseDate from "./ReleaseDate";

interface Props {
  movie: Movie;
}

const MovieCard = ({ movie }: Props) => {
  const showOverlayByDefault = useBreakpointValue({ base: true, md: false });

  return (
    <LinkBox
      as={RouterLink}
      to={`/movies/${movie.id}`}
      _hover={{ textDecoration: "none" }}
      role="link"
      aria-label={`View details for ${movie.title}`}
    >
      <Box
        as="article"
        position="relative"
        width="auto"
        maxW="full"
        aspectRatio={2 / 3}
        cursor="pointer"
        borderRadius="lg"
        overflow="hidden"
        role="group"
        _hover={{ boxShadow: "lg" }}
      >
        <Image
          src={
            movie.poster_path
              ? imgExtractionUrl + movie.poster_path
              : placeHolderImageUrl
          }
          alt={movie.title}
          width="100%"
          height="100%"
          loading="lazy"
          objectFit="cover"
          transition="transform 0.4s ease-in-out"
          transform="scale(1)"
          _groupHover={{ transform: "scale(1.05)" }}
        />
        <Box
          position="absolute"
          top="2"
          right="2"
          transition="transform 0.3s ease-in-out"
          _groupHover={{ transform: "scale(1.05)" }}
          aria-label={`Rating: ${movie.vote_average} out of 10`}
        >
          <RatingScore score={movie.vote_average} />
        </Box>

        <Box
          as="header"
          position="absolute"
          bottom="0"
          left="0"
          width="100%"
          bgGradient="linear(to-b, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.75))"
          color="white"
          padding={2}
          transform={
            showOverlayByDefault ? "translateY(0)" : "translateY(100%)"
          }
          opacity={showOverlayByDefault ? 1 : 0}
          transition="transform 0.3s ease-in-out, opacity 0.3s ease-in-out"
          _groupHover={{
            transform: "translateY(0)",
            opacity: 1,
          }}
          zIndex="1"
        >
          <Heading
            fontSize="lg"
            noOfLines={2}
            as="h3"
            id={`movie-title-${movie.id}`}
          >
            {movie.title}
          </Heading>

          <HStack
            as="section"
            mt={2}
            aria-labelledby={`movie-title-${movie.id}`}
            aria-label="Movie information"
          >
            <Genres movie={movie} />
            <ReleaseDate rDate={movie.release_date} />
          </HStack>
        </Box>
      </Box>
    </LinkBox>
  );
};

export default MovieCard;
