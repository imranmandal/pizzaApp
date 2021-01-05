import React from "react";

function Header() {
  return (
    <header>
      <img
        className="logo"
        src="https://pngimg.com/uploads/pizza/pizza_PNG44094.png"
        alt="Logo"
      />

      <nav>
        <ul>
          <li className="nav_link">
            <a href="#">Home</a>
          </li>
          <li className="nav_link">
            <a href="#">Cart</a>
          </li>
          <li className="nav_link">
            <a href="#">Account</a>
          </li>
        </ul>
      </nav>
      <a href="#">
        <button>Orders</button>
      </a>
    </header>
  );
}

export default Header;
