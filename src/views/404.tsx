import React from "react";
import Header from "./components/header";
import Meta from "./metadata/meta";
import { MetaProps } from "../type/meta.type";

const Page404 = () => {
  const metaProps: MetaProps = {
    title: "Page Not Found!"
  };
  return (
    <html lang="fr">
      <Meta {...metaProps} />
      <body>
        <Header />
        <h1>Page Not Found!</h1>
      </body>
    </html>
  );
};

export default Page404;
