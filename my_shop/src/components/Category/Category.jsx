import { Link } from 'react-router-dom'
import styles from './Category.module.scss';
import banner20 from '../../assets/images/banner20.jpg'
import banner21 from '../../assets/images/banner21.jpg'
import banner22 from '../../assets/images/banner22.jpg'


const Category = () => {
  return (
	<section className={styles.category}>
	<div className={styles.container}>
	  <h2 className={styles.category__title}>This Season Collection</h2>
	  <div className={styles.category__grid}>
		 <div className={styles.category__item}>
			<img src={banner20} alt="Glasses" />

			<div className={styles.category__overlay}>
			  <Link to="#" className={`${styles.btn} ${styles.btn_dark}`}>Glasses</Link>
			</div>
		 </div>

		 <div className={styles.category__item}>
			<img src={banner21} alt="Sneakers" />

			<div className={styles.category__overlay}>
			  <Link to="#" className={`${styles.btn} ${styles.btn_dark}`}>Sneakers</Link>
			</div>
		 </div>

		 <div className={styles.category__item}>
			<img src={banner22} alt="Handbags" />

			<div className={styles.category__overlay}>
			  <Link to="#" className={`${styles.btn} ${styles.btn_dark}`}>Handbags</Link>
			</div>
		 </div>
	  </div>
	</div>
 </section>
  )
}

export default Category