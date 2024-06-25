// components/Nav.jsx

import { Open_Sans } from "@next/font/google";
import Link from "next/link";
import Image from 'next/image';
import Logotype from "/images/Logo/Desktop-logo.svg";
import styles from "./Nav.module.css";

const inter = Open_Sans({
  subsets: ["latin"],
  weight: ["400"],
});

const Nav = () => {
  return (
    <nav className="navigation border-bottom pt-2 pb-2">
        <div className="col-12 p-0">
          <div className="row m-0 pt-1">
              <div className="col-12 col-md-2 col-lg-1 col-xl-1">
                  <Link className={styles.homeLink} href={"/"}>
                    <Image
                      src={Logotype}
                      alt="Digits Logo"
                      width={125}
                      height={75}
                    />
                  </Link>
              </div>
              <div className="col-12 col-md-10 col-lg-11 col-xl-11">
                <div className="row m-0 pt-2">
                  <Link className={`${styles.menuBarLinks} nav-link col-12 col-md-2 col-lg-2 col-xl-2 d-flex align-items-center justify-content-center font-weight-bold`} href="/">
                    <i className="material-icons">home</i>&nbsp;&nbsp;Inicio
                  </Link>
                  <Link className={`${styles.menuBarLinks} nav-link col-12 col-md-2 col-lg-2 col-xl-2 d-flex align-items-center justify-content-center font-weight-bold`} href="/blog">
                    <i className="material-icons">memory</i>&nbsp;&nbsp;Acerca de Digits
                  </Link>
                  <Link className={`${styles.menuBarLinks} nav-link col-12 col-md-2 col-lg-2 col-xl-2 d-flex align-items-center justify-content-center font-weight-bold`} href="/settings">
                    <i className="material-icons">rocket</i>&nbsp;&nbsp;Planes
                  </Link>
                  <Link className={`${styles.menuBarLinks} nav-link col-12 col-md-2 col-lg-2 col-xl-2 d-flex align-items-center justify-content-center font-weight-bold`} href="/conference">
                    <i className="material-icons">cases</i>&nbsp;&nbsp;Casos de uso
                  </Link>
                </div>
              </div>
            </div>
        </div>
    </nav>
  );
};

export default Nav;
