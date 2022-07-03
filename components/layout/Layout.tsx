import * as React from "react";
import Head from "next/head";
import { Navbar } from "../ui";

type Props = {
  children?: React.ReactNode;
  title: string;
};

const origin = (typeof window === "undefined") ? '' : window.location.origin;

export const Layout: React.FC<Props> = ({ children, title }) => {
  return (
    <>
      <Head>
        <meta name="author" content="Jose Cedeno" />
        <meta
          name="description"
          content={`Informacion sobre el pokemon ${title}`}
        />
        <meta name="keywords" content={`{${title}, pokemon, react, next`} />
        <meta
          property="og:title"
          content={`Información sobre ${title}`}
        />
        <meta
          property="og:description"
          content={`Esta es la información sobre el pokemon ${title}`}
        />
        <meta
          property="og:image"
          content={`${origin}/img/banner.png`}
        />
        <title>{title || "Pokemon App"}</title>
      </Head>
      <Navbar />
      <main
        style={{
          padding: "20px",
        }}
      >
        {children}
      </main>
    </>
  );
};
