import React from "react";
import Image from "next/image";
import {
  SearchIcon,
  MenuIcon,
  ShoppingCartIcon,
} from "@heroicons/react/outline";
import { useSelector, useDispatch } from "react-redux";
import { getAuth, signOut } from "firebase/auth";
import Link from "next/link";
import { useRouter } from "next/router";

import styles from "./Header.module.scss";
import { saveUser, saveUserName } from "../slices/authSlice";

function Header() {
  const cartItems = useSelector((state) => state.cartState.cart);
  const user = useSelector((state) => state.authState.userId);
  const userName = useSelector((state) => state.authState.userName);
  const dispatch = useDispatch();
  const router = useRouter();

  const auth = getAuth();

  const signOutHandler = () => {
    signOut(auth).then(() => {
      dispatch(saveUser(null));
      dispatch(saveUserName(null));
    });
  };

  const logoBoxClickHandler = () => {
    router.push("/");
  };

  return (
    <header>
      <header className={styles.topHeader}>
        <div onClick={logoBoxClickHandler} className={styles.logoBox}>
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
            {user ? <p>{`Hello ${userName}`}</p> : <p>Hello Guest</p>}
            {user ? (
              <h1 onClick={signOutHandler}>Sign Out</h1>
            ) : (
              <Link href="/signin">
                <h1>Sign In</h1>
              </Link>
            )}
          </div>
          <div>
            <p>Returns</p>
            <h1>& Orders</h1>
          </div>
          <Link href="/cart">
            <div>
              <p>
                <ShoppingCartIcon />
              </p>
              <h1>{cartItems.length}</h1>
            </div>
          </Link>
        </div>
      </header>
      <nav className={styles.navbar}>
        <ul className={styles.navList}>
          <li className={styles.navList__item}>
            <p>
              <MenuIcon />
            </p>
            All
          </li>
          <li className={styles.navList__item}>Electronics</li>
          <li className={styles.navList__item}>Jewelry</li>
          <li className={styles.navList__item}>Clothes</li>
          <li className={styles.navList__item}>Food and Grocery</li>
          <li className={styles.navList__item}>Shopper Toolkit</li>
          <li className={styles.navList__item}>Prime</li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
