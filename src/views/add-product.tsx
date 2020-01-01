import React from "react";
import Header from "./components/header";

const AddProduct = () => {
  return (
    <div>
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
    </div>
  );
};

export default AddProduct;
