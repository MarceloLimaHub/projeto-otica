import styles from './SecaoProdutos.module.css'
import geralStyle from '@/styles/Geral.module.css'
import Image from 'next/image'
import OculosGrau from '../../../public/oculos01.png'
import OculosTransition from '../../../public/oculos02.png'
import OculosSol from '../../../public/oculos03.png'
import OculosInfantil from '../../../public/oculos04.png'


export default function SecaoProdutos() {
    return (
        <section className={styles.secaoProdutos} id='produtos'>
            <div className={`${geralStyle.limitaSecao}`}>
                <h2>Nossos produtos</h2>
                <p>Trabalhamos com óculos de grau, óculos de sol, lentes transition nos modelos masculino, feminino e infantil.</p>
                <p>Todos os nossos preços são acessíveis e contam com a melhor qualidade do mercado.</p>

                <div className={styles.containerProdutos}>
                    <div className={`${styles.boxProduto}`}>
                        <h4>Óculos de grau</h4>
                        <Image src={OculosGrau} className={styles.imgProduto}/>
                        <p>R$ 500,00</p>
                    </div>
                    <div className={`${styles.boxProduto}`}>
                        <h4>Óculos transition</h4>
                        <Image src={OculosTransition} className={styles.imgProduto}/>
                        <p>R$ 750,00</p>
                    </div>
                    <div className={`${styles.boxProduto}`}>
                        <h4>Óculos de sol</h4>
                        <Image src={OculosSol} className={styles.imgProduto}/>
                        <p>R$ 700,00</p>
                    </div>
                    <div className={`${styles.boxProduto}`}>
                        <h4>Óculos infantil</h4>
                        <Image src={OculosInfantil} className={styles.imgProduto}/>
                        <p>R$ 500,00</p>
                    </div>
                </div>

                <h3>Todos os nossos produtos incluem:</h3>
                <ul>
                    <li>Garantia de 1 ano</li>
                    <li>Manutenção preventiva</li>
                    <li>Descontos especiais na compra da segunda unidade</li>
                    <li>Flexibilidade de pagamento</li>
                </ul>
            </div>
        </section>
    )
}
