import Link from 'next/link'
import styles from './styles.module.scss'
import { RiSearch2Line } from 'react-icons/ri'
import { FaOpencart } from 'react-icons/fa'
import { useSelector } from 'react-redux'

function Main() {
    const {cart} = useSelector((state)=>({...state}))
  return (
    <div className={styles.main}>
        <div className={styles.main__container}>
            <Link href="/" className={styles.main__logo}>
                <img src="logo.svg" alt="logo" />
            </Link>
            <div className={styles.search}>
                <input type="text" placeholder='Search...' />
                <div className={styles.search__icon}>
                    <RiSearch2Line />
                </div>
            </div>
            <Link href="/cart" className={styles.cart}>
                <FaOpencart />
                <span>{cart.length}</span>
            </Link>
        </div>
    </div>
  )
}

export default Main