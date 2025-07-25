import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/tv_8936507.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const navigate = useNavigate();
  return (
    <>
      <HStack padding="5px 10px" as="header" aria-label="Navigation bar">
        <Image
          _hover={{
            transform: "scale(1.05)",
            transition: "transform 0.15s ease-in",
          }}
          src={logo}
          boxSize="60px"
          marginRight="7px"
          cursor={"pointer"}
          onClick={() => navigate("/")}
          alt="Home logo"
          aria-label="Go to homepage"
          role="button"
        ></Image>
        <SearchInput />
        <ColorModeSwitch />
      </HStack>
    </>
  );
};

export default NavBar;
