import styles from "./styles.module.scss";
import MainSwiper from "./swiper";
import Offers from "./offers";
import User from "./User";
import Header from "./Header";
import Menu from "./Menu";
export default function Main() {
  return (
    <div className={styles.main}>
      <Header />
      <Menu />
      <MainSwiper />
      <Offers />
      <User />
    </div>
  );
}
