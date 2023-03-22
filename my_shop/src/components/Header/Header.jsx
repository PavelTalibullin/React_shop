import { Link } from 'react-router-dom'
import NavBar from '../NavBar/NavBar';
import styles from "../Header/Header.module.scss";
import logoHeader from "../../assets/images/logo_black.png";

const Header = () => {
  return (
    <header className={styles.Header}>
      <div className={styles.Container}>
        <div className={styles.Header__wrapper}>
          <Link to="/">
            <img src={logoHeader} alt="Logotype" />
          </Link>
          <NavBar />
        </div>
      </div>
    </header>
  );
};

export default Header;
