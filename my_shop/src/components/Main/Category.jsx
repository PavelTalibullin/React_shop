import styles from './Category.module.scss';
import banner20 from '../images/banner-20.jpg'
import banner21 from '../images/banner-21.jpg'
import banner22 from '../images/banner-22.jpg'


const Category = () => {
  return (
	<section className={styles.category}>
	<div className={styles.container}>
	  <h2 className={styles.category__title}>This Season Collection</h2>
	  <div className={styles.category__grid}>
		 <div className={styles.category__item}>
			<img src={banner20} alt="Glasses" />

			<div className={styles.category__overlay}>
			  <a href="#" className={`${styles.btn} ${styles.btn_dark}`}>Glasses</a>
			</div>
		 </div>

		 <div className={styles.category__item}>
			<img src={banner21} alt="Sneakers" />

			<div className={styles.category__overlay}>
			  <a href="#" className={`${styles.btn} ${styles.btn_dark}`}>Sneakers</a>
			</div>
		 </div>

		 <div className={styles.category__item}>
			<img src={banner22} alt="Handbags" />

			<div className={styles.category__overlay}>
			  <a href="#" className={`${styles.btn} ${styles.btn_dark}`}>Handbags</a>
			</div>
		 </div>
	  </div>
	</div>
 </section>
  )
}

export default Category