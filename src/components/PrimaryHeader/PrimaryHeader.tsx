import React, { useState } from "react";
import "./PrimaryHeader.scss";
import { Menu, X, Home, User } from "lucide-react";

const PrimaryHeader: React.FC = () => {
 
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  return (
    <header className="header">
      <nav className="navbar">
        {/* Sol - Menü Linkleri */}
        <ul className={`navLinks ${menuOpen ? "open" : ""}`}>
          <li><a href="#" className="active">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Listings</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">Blogs</a></li>
        </ul>

        {/* Orta - Logo */}
        <div className="logo">
          <img src="/Rezilla.svg" alt="Rezilla logo" />
          <span>Rezilla</span>
        </div>

        {/* Sağ - Butonlar */}
        <div className="actions">
          <button className="loginBtn" type="button">
            <User size={16} /> Login/Register
          </button>
          <button className="addBtn" type="button">
            <Home size={16} /> Add Listing
          </button>
        </div>

        {/* Hamburger menü */}
        <button
          className="menuToggle"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle menu"
          type="button"
        >
          {menuOpen ? <X /> : <Menu />}
        </button>
      </nav>
    </header>
  );
};

export default PrimaryHeader;
