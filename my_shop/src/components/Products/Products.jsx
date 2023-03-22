import { Link } from 'react-router-dom'
import styles from "./Products.module.scss";
import product01 from '../../assets/images/product01.jpg';
import product02 from '../../assets/images/product02.jpg';
import product03 from '../../assets/images/product03.jpg';
import product04 from '../../assets/images/product04.jpg';
import product05 from '../../assets/images/product05.jpg';
import product06 from '../../assets/images/product06.jpg';
import product07 from '../../assets/images/product07.jpg';
import product08 from '../../assets/images/product08.jpg';

const Products = () => {
  return (
    <section className={styles.products}>
      <div className={styles.container}>
        <h2 className={styles.products__title}>This Week's Highlights</h2>

        <div className={styles.products__grid}>
          <div className={styles.product}>
            <div className={styles.products__image}>
              <Link to="/" className={styles.products__image_block}>
                <img src={product01} alt="Product 01" />
              </Link>

              <Link to="/" className={styles.add_to_wishlist}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                  />
                </svg>
              </Link>
            </div>
            <div className={styles.product__body}>
              <h3>
                <Link to="/">Hoodie with pocket</Link>
              </h3>
              <p>$79.00</p>
            </div>
          </div>

          <div className={styles.product}>
            <div className={styles.products__image}>
              <Link to="/" className={styles.products__image_block}>
                <img src={product02} alt="Product 01" />
              </Link>

              <Link to="/" className={styles.add_to_wishlist}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                  />
                </svg>
              </Link>
            </div>
            <div className={styles.product__body}>
              <h3>
                <Link to="/">Flowers cotton dress</Link>
              </h3>
              <p>$79.00</p>
            </div>
          </div>

          <div className={styles.product}>
            <div className={styles.products__image}>
              <Link to="/" className={styles.products__image_block}>
                <img src={product03} alt="Product 01" />
              </Link>

              <Link to="/" className={styles.add_to_wishlist}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                  />
                </svg>
              </Link>
            </div>
            <div className={styles.product__body}>
              <h3>
                <Link to="/">Hoodie with pocket</Link>
              </h3>
              <p>$79.00</p>
            </div>
          </div>

          <div className={styles.product}>
            <div className={styles.products__image}>
              <Link to="/" className={styles.products__image_block}>
                <img src={product04} alt="Product 01" />
              </Link>

              <Link to="/" className={styles.add_to_wishlist}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                  />
                </svg>
              </Link>
            </div>
            <div className={styles.product__body}>
              <h3>
                <a href="/">Oversize cotton sweatshirt</a>
              </h3>
              <p>$79.00</p>
            </div>
          </div>

          <div className={styles.product}>
            <div className={styles.products__image}>
              <Link to="/" className={styles.products__image_block}>
                <img src={product05} alt="Product 01" />
              </Link>

              <Link to="/" className={styles.add_to_wishlist}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                  />
                </svg>
              </Link>
            </div>
            <div className={styles.product__body}>
              <h3>
                <Link to="/">Striped cotton-blend sweatshirt</Link>
              </h3>
              <p>$79.00</p>
            </div>
          </div>

          <div className={styles.product}>
            <div className={styles.products__image}>
              <Link to="/" className={styles.products__image_block}>
                <img src={product06} alt="Product 01" />
              </Link>

              <Link to="/" className={styles.add_to_wishlist}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                  />
                </svg>
              </Link>
            </div>
            <div className={styles.product__body}>
              <h3>
                <Link to="/">Hoodie with pocket</Link>
              </h3>
              <p>$79.00</p>
            </div>
          </div>

          <div className={styles.product}>
            <div className={styles.products__image}>
              <Link to="/" className={styles.products__image_block}>
                <img src={product07} alt="Product 01" />
              </Link>

              <Link to="/" className={styles.add_to_wishlist}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                  />
                </svg>
              </Link>
            </div>
            <div className={styles.product__body}>
              <h3>
                <Link to="/">Flowers cotton dress</Link>
              </h3>
              <p>$79.00</p>
            </div>
          </div>

          <div className={styles.product}>
            <div className={styles.products__image}>
              <Link to="/" className={styles.products__image_block}>
                <img src={product08} alt="Product 01" />
              </Link>

              <Link to="/" className={styles.add_to_wishlist}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                  />
                </svg>
              </Link>
            </div>
            <div className={styles.product__body}>
              <h3>
                <Link to="/">Hoodie with pocket</Link>
              </h3>
              <p>$79.00</p>
            </div>
          </div>
        </div>

        <div className={styles.products__bottom}>
          <Link to="/" className={`${styles.btn} ${styles.btn_outline_primary}`}>
            {" "}
            Shop Now{" "}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Products;
