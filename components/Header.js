import React from "react";
import Image from "next/image";
import {
  SearchIcon,
  MenuIcon,
  ShoppingCartIcon,
} from "@heroicons/react/outline";

import styles from "./Header.module.scss";

function Header() {
  return (
    <header>
      <header className={styles.topHeader}>
        <div className={styles.logoBox}>
          <Image src="/amazon_logo.png" alt="Amazon Logo" layout="fill" />
        </div>
        <div className={styles.searchBox}>
          <input type="text" className={styles.searchBox__searchBar} />
          <div className={styles.searchBox__iconBox}>
            <SearchIcon className={styles.searchBox__searchIcon} />
          </div>
        </div>
        <div className={styles.profileBox}>
          <div>
            <p>Hello Guest</p>
            <h1>Sign In</h1>
          </div>
          <div>
            <p>Returns</p>
            <h1>& Orders</h1>
          </div>
          <div>
            <p>
              <ShoppingCartIcon />
            </p>
            <h1>0</h1>
          </div>
        </div>
      </header>
      <nav className={styles.navbar}>Navbar</nav>
    </header>
  );
}

export default Header;
