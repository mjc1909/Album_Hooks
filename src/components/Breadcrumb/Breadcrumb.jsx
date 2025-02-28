import styles from '../Breadcrumb/breadcrumb.module.css'

import { Link, useLocation } from "react-router-dom";

const Breadcrumb = () => {
  const location = useLocation();// Henter den aktuelle URL-sti
  const pathnames = location.pathname.split("/").filter((x) => x); // Opdeler stien i segmenter

  return (
    <nav className={styles.p2}>
      <Link to="/" className={styles.linktext}>Home</Link>
      {/* Genererer breadcrumb-links dynamisk */}
      {pathnames.map((value, index) => {
        const to = `/${pathnames.slice(0, index + 1).join("/")}`;
        return (
          <span key={to}>
            {" / "}
            <Link to={to} className={styles.linktext}>
              {decodeURIComponent(value)} {/* Viser det aktuelle segment */}
            </Link>
          </span>
        );
      })}
    </nav>
  );
};

export default Breadcrumb;
