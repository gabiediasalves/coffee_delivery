import styles from './Home.module.css'
import { ShoppingCart, Timer, Package, Coffee } from '@phosphor-icons/react'
import coffee_delivery from '../images/hero.png'

function Home() {
    return (
        <div className={styles.content}>
            <div className={styles.text_left}>
                <h1 className={styles.title_h1}>
                    Encontre o café perfeito para qualquer hora do dia
                </h1>

                <p className={styles.description}>
                    Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora
                </p>

                <ShoppingCart size={40} />
                <p>Compra simples e segura</p>

                <Timer size={40} />
                <p>Entrega rápida e rastreada</p>

                <Package size={40} />
                <p>Embalagem mantém o café intacto</p>

                <Coffee size={40} />
                <p>o café chega fresquinho até você</p>
            </div>
            <div className={styles.content_img}>
                <img src={coffee_delivery} alt="" className={styles.img} />
            </div>
        </div>
    )
}


export default Home;