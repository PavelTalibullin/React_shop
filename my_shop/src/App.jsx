import { Routes, Route, NavLink } from "react-router-dom";
import styles from "./App.module.scss";
import Home from "./pages/Home";
import Wishlist from "./pages/Wishlist";

function App() {
  return (
    <div className={styles.App}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/wishlist" element={<Wishlist />} />
      </Routes>
    </div>
  );
}

export default App;
