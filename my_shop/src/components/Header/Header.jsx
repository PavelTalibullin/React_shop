import NavBar from "./NavBar";
import styles from "../Header/Header.module.scss";
import logoHeader from "../images/logo-black.png";

const Header = () => {
  return (
    <header className={styles.Header}>
      <div className={styles.Container}>
        <div className={styles.Header__wrapper}>
          <a href="/">
            <img src={logoHeader} alt="Logotype" />
          </a>
          <NavBar />
        </div>
      </div>
    </header>
  );
};

export default Header;
