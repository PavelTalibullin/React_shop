import styles from "./WishlistButtonAdd.module.scss";

const WishlistButtonAdd = () => {
  return (
    <div className={styles.item__buttons}>
      <button className={`${styles.btn} ${styles.btn_dark}`}>
        Add To Cart
      </button>
    </div>
  );
};

export default WishlistButtonAdd;
