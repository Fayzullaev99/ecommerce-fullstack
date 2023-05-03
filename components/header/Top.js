import { MdSecurity } from 'react-icons/md'
import { BsSuitHeart } from 'react-icons/bs'
import { RiAccountPinCircleLine, RiArrowDropDownFill } from 'react-icons/ri'
import styles from './styles.module.scss'
import Link from 'next/link'
import { useState } from 'react'
import UserMenu from './UserMenu'
import Image from 'next/image'

function Top({ country }) {
    const [loggedIn, setLoggedIn] = useState(true)
    const [visible, setVisible] = useState(false)
    return (
        <div className={styles.top}>
            <div className={styles.top__container}>
                <div></div>
                <ul className={styles.top__list}>
                    <li className={styles.top__item}>
                        <Image
                            src={country.flag}
                            alt="flag"
                            width="28"
                            height="28"
                            sizes="(max-width: 768px) 100vw,
                                  (max-width: 1200px) 50vw,
                                  33vw"
                        />
                        <span>{country.name}</span>
                    </li>
                    <li className={styles.top__item}>
                        <MdSecurity />
                        <span>Buyer Protection</span>
                    </li>
                    <li className={styles.top__item}>
                        <span>Customer Service</span>
                    </li>
                    <li className={styles.top__item}>
                        <span>Help</span>
                    </li>
                    <li className={styles.top__item}>
                        <BsSuitHeart />
                        <Link href="/profile/whishlist">
                            <span>Whishlist</span>
                        </Link>
                    </li>
                    <li className={styles.top__item} onMouseOver={() => setVisible(true)} onMouseLeave={() => setVisible(false)}>
                        {
                            loggedIn
                                ? <li className={styles.top__item}>
                                    <div className={styles.flex}>
                                        <Image
                                            src="https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745"
                                            alt="user"
                                            width="28"
                                            height="28"
                                            sizes="(max-width: 768px) 100vw,
                                          (max-width: 1200px) 50vw,
                                          33vw" />
                                        <span>Sanjar</span>
                                        <RiArrowDropDownFill />
                                    </div>
                                </li>
                                : <li className={styles.top__item}>
                                    <div className={styles.flex}>
                                        <RiAccountPinCircleLine />
                                        <span>Account</span>
                                        <RiArrowDropDownFill />
                                    </div>
                                </li>
                        }
                        {visible && <UserMenu loggedIn={loggedIn} />}
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Top