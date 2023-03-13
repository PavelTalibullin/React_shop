import styles from "./Banner.module.scss";
import banner from "../images/image-home-07.jpg";

const Banner = () => {
  return (
    <section className={styles.banner}>
      <div className={styles.container}>
        <div className={styles.banner__wrapper}>
          <img src={banner} alt="" />
          <div className={styles.banner__overlay}>
            <div>
              <h1 className={styles.banner__title}>Waffle Hooded Coat</h1>
              <a href="/" className={`${styles.btn} ${styles.btn_dark}`}>
                Shop Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
