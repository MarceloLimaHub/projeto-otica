import styles from './SecaoCapa.module.css'
import geralStyle from '@/styles/Geral.module.css'

export default function SecaoCapa() {
    return (
        <section className={styles.secaoBanner}>
            <div className={`${styles.bannerCapa} ${geralStyle.limitaSecao}`}>
                <p>Preços baixos em</p>
                <h1>Óculos de grau e de sol</h1>
                <p>Você só encontra aqui</p>
            </div>
        </section>
    )
}
