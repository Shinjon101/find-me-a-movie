import useGeneres, { Genre } from "../hooks/useGeneres";
import {
  List,
  ListItem,
  Heading,
  Spinner,
  Button,
  Box,
} from "@chakra-ui/react";

interface Props {
  onSelectGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

const GenreList = ({ onSelectGenre, selectedGenre }: Props) => {
  const { generes, isLoading } = useGeneres();
  return (
    <Box marginTop="10px">
      <Heading fontSize="2xl">Genres</Heading>
      {isLoading && <Spinner />}
      <List>
        {generes.map((genre) => (
          <ListItem key={genre.id} margin="3px">
            <Button
              fontWeight={genre.id === selectedGenre?.id ? "bold" : "normal"}
              onClick={() => {
                onSelectGenre(genre);
              }}
              variant="link"
            >
              {genre.name}
            </Button>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default GenreList;
