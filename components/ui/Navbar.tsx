import NextLink from "next/link";
import { useTheme, Text, Link } from "@nextui-org/react";

export const Navbar = () => {
  const { theme } = useTheme();

  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 20px",
        backgroundColor: theme?.colors.primary.value,
        color: "black",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <NextLink href="/" passHref>
          <Link>
            <Text color="white" h2>
              P
            </Text>
            <Text color="white" h3>
              okémon
            </Text>
          </Link>
        </NextLink>
      </div>
      <NextLink href="/favorites" passHref>
        <Link>
          <Text color="white"> Favoritos </Text>
        </Link>
      </NextLink>
    </div>
  );
};
