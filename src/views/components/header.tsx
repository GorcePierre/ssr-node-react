import React from "react";

const Header = () => {
  return (
    <div>
      <header>
        <nav>
          <ul>
            <li>
              <a href="/">Shop</a>
            </li>
            <li>
              <a href="/admin/add-product">Add Product</a>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Header;
