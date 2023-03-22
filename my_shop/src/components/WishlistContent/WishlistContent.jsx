import WishlistButtonDelete from "../WishlistButtonDelete/WishlistButtonDelete";
import product07 from "../../assets/images/product07.jpg";
import styles from "./WishlistContent.module.scss";

const WishlistContent = () => {
  return (
    <div className={styles.item__content}>
      <WishlistButtonDelete />

      <div className={styles.item__body}>
        <img
          src={product07}
          alt="Flowers cotton dress"
          className={styles.item__image}
        />

        <div>
          <p className={styles.item__title}>Flowers cotton dress</p>
          <p className={styles.item__price}>$29.00</p>
        </div>
      </div>
    </div>
  );
};

export default WishlistContent;
