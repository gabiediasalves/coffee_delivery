import logo from '../images/logo.jpeg'
import styles from './Header.module.css'

function Header() {
    return (
        <header className={styles.header}>
                <img src={logo} className={styles.img} />
        </header>
    )
}


export default Header