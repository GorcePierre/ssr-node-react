import React from "react";
import Header from "./components/header";
import Meta from "./metadata/meta";

const Page404 = () => {
  const props = {
    title: "Page Not Found!"
  };
  return (
    <html lang="fr">
      <Meta {...props} />
      <body>
        <Header />
        <h1>Page Not Found!</h1>
      </body>
    </html>
  );
};

export default Page404;
