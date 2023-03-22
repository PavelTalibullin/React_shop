import WishlistButtonAdd from "../WishlistButtonAdd/WishlistButtonAdd";
import WishlistContent from "../WishlistContent/WishlistContent";
import styles from "./WishlistList.module.scss";

const WishlistList = () => {
  return (
    <div>
      <div className={styles.container}>
        <h2 className={styles.wishlist__title}>Wishlist</h2>

        <div className={styles.list}>
          <div className={styles.item}>
            <WishlistContent />
            <WishlistButtonAdd />
          </div>
          <div className={styles.item}>
            <WishlistContent />
            <WishlistButtonAdd />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WishlistList;
