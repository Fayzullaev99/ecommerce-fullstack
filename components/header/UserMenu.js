import Link from 'next/link'
import styles from './styles.module.scss'

function UserMenu({ loggedIn }) {
    return (
        <div className={styles.menu}>
            <h4>Welcome to Shoppay!</h4>
            {loggedIn ? (
                <div className={styles.flex}>
                    <Image
                        src="https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745"
                        alt=""
                        className={styles.menu__img}
                        width="28"
                        height="28"
                        sizes="(max-width: 768px) 100vw,
                                  (max-width: 1200px) 50vw,
                                  33vw"

                    />
                    <div className={styles.col}>
                        <span>Welcome Back,</span>
                        <h3>Sanjar</h3>
                        <span>Sign out</span>
                    </div>
                </div>
            ) : (
                <div className={styles.flex}>
                    <button className={styles.btn_primary}>Register</button>
                    <button className={styles.btn_outlined}>Login</button>
                </div>
            )}
            <ul>
                <li>
                    <Link href="/profile">Account</Link>
                </li>
                <li>
                    <Link href="/profile/orders">My Orders</Link>
                </li>
                <li>
                    <Link href="/profile/messages">Message Center</Link>
                </li>
                <li>
                    <Link href="/profile/address">Address</Link>
                </li>
                <li>
                    <Link href="/profile/whishlist">Whishlist</Link>
                </li>
            </ul>
        </div>
    )
}

export default UserMenu