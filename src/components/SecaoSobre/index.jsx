import styles from './SecaoSobre.module.css'
import geralStyle from '@/styles/Geral.module.css'
import Image from 'next/image'
import Loja from '../../../public/loja.png'
import Atendimento from '../../../public/atendimento.png'

export default function SecaoSobre() {
    return (
        <section className={styles.secaoSobre} id='sobre'>
            <div className={`${geralStyle.limitaSecao} ${styles.containerSobre}`}>
                <h3>QUEM SOMOS NÓS?</h3>
                <p>Fundada em 2001, em Nova Iguaçu - Rio de Janeiro, a Óticas vida iniciou suas atividades focada no atendimento ao público de renda mais baixa, sempre com o objetivo de proporcionar ao cliente bom atendimento, qualidade e preço baixo. </p>

                <div className={styles.boxCards}>
                    <Image src={Loja} className={styles.imgCard}/>
                    <div className={styles.cards}>
                        <h4>Nossas Filiais</h4>
                        <p>Hoje temos mais de 20 filiais pelo Brasil e na América</p>
                    </div>
                    <div className={styles.cards}>
                        <h4>Atendimento flexível</h4>
                        <p>Nossa equipe é treinada para te atender</p>
                    </div>

                    <Image src={Atendimento} className={styles.imgCard}/>
                </div>
            </div>
        </section>
    )
}
