import Image from "next/image";
import styles from "./styles.module.scss";

export default function Payment() {
  return (
    <div className={styles.footer__payment}>
      <h3>WE ACCPET</h3>
      <div className={styles.footer__flexwrap}>
        <img
          src="/images/payment/visa.webp"
          alt="visa"
          width="60"
          height="36"
          sizes="(max-width: 768px) 100vw,
                (max-width: 1200px) 50vw,
                33vw" />
        <img
          src="/images/payment/mastercard.webp"
          alt="mastercard"
          width="60"
          height="36"
          sizes="(max-width: 768px) 100vw,
                (max-width: 1200px) 50vw,
                33vw" />
        <img
          src="/images/payment/paypal.webp"
          alt="paypal"
          width="60"
          height="36"
          sizes="(max-width: 768px) 100vw,
                (max-width: 1200px) 50vw,
                33vw" />
      </div>
    </div>
  );
}
