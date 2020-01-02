import React from "react";
import Header from "./components/header";
import Meta from "./metadata/meta";
import { MetaProps } from "../type/meta.type";

const Shop = () => {
  const metaProps: MetaProps = {
    title: "shop"
  };
  return (
    <>
      <html lang="fr">
        <Meta {...metaProps} />
        <body>
          <Header />
          <main>
            <h1>My Products</h1>
            <p>List of all the products...</p>
          </main>
        </body>
      </html>
    </>
  );
};
export default Shop;
