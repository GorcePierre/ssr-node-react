import React from "react";
import Header from "./components/header";
import Meta from "./metadata/meta";

const Shop = () => {
  const props = {
    title: "shop"
  };
  return (
    <>
      <html lang="fr">
        <Meta {...props} />
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
