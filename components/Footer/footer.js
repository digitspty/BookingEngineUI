// components/footer.jsx

import { Open_Sans } from "next/font/google";
import Link from "next/link";
import styles from "./footer.module.css";

const inter = Open_Sans({
  subsets: ["latin"],
  weight: ["400"],
});

const footer = () => {
  return (
    <footer className="footer-wrapper border-bottom pt-2 pb-2">
        <div className="col-12 p-0">
          <div className="row m-0 pt-1">
              <div className="col-12 col-md-10 col-lg-11 col-xl-11">
                <div className="row m-0 pt-1">
                  <Link className={`${styles.menuBarLinks} col-12 col-md-2 col-lg-2 col-xl-2 d-flex align-items-center justify-content-center font-weight-bold`} href="/Home">
                    <i className="material-icons">home</i>&nbsp;&nbsp;Terminos y condiciones
                  </Link>
                  <Link className={`${styles.menuBarLinks} col-12 col-md-2 col-lg-2 col-xl-2 d-flex align-items-center justify-content-center font-weight-bold`} href="/blog">
                    <i className="material-icons">memory</i>&nbsp;&nbsp;Politicas de privacidad
                  </Link>
                  <Link className={`${styles.menuBarLinks} col-12 col-md-2 col-lg-2 col-xl-2 d-flex align-items-center justify-content-center font-weight-bold`} href="/settings">
                    <i className="material-icons">rocket</i>&nbsp;&nbsp;Politicas de cookies
                  </Link>
                </div>
              </div>
            </div>
        </div>
    </footer>
  );
};

export default footer;
