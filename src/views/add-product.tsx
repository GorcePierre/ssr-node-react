import React from "react";
import Header from "./components/header";
import Meta from "./metadata/meta";

const AddProduct = () => {
  const props = {
    title: "add-products"
  };
  return (
    <html lang="fr">
      <Meta {...props} />
      <body>
        <Header />
        <main>
          <form action="/admin/add-product" method="POST">
            <div>
              <label>Title</label>
              <input type="text" name="title" id="title" />
            </div>

            <button type="submit">Add Product</button>
          </form>
        </main>
      </body>
    </html>
  );
};

export default AddProduct;
