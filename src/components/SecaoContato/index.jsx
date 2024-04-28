import styles from './SecaoContato.module.css'
import geralStyle from '@/styles/Geral.module.css'
import Image from 'next/image'
import Local from '../../../public/local.png'
import Fb from '../../../public/fb.png'
import Ig from '../../../public/ig.png'
import Tt from '../../../public/tt.png'
import Email from '../../../public/email.png'
import Telefone from '../../../public/telefone.png'

export default function SecaoContato() {
    return (
        <section className={styles.secaoContato} id='contato'>
            <div className={geralStyle.limitaSecao}>
                <h3>Fale conosco</h3>
                <p>Não perca tempo, venha conhecer uma de nossas lojas ou entre em contato através de nossas redes sociais ou da central de atendimento.</p>

                <div  className={styles.containerContatos}>
                    <div className={styles.cardContato}>
                        <h4>Nossos Contatos</h4>
                        <div>
                            <Image src={Local} className={styles.iconeContatos}/>
                            <span>Nova Iguaçu, RJ</span>
                        </div>
                        <div>
                            <Image src={Telefone} className={styles.iconeContatos}/>
                            <span>(21) 9999-9999</span>
                        </div>
                        <div>
                            <Image src={Email} className={styles.iconeContatos}/>
                            <span>contato@oticavida.com</span>
                        </div>
                    </div>
                    <div className={styles.cardContato}>
                        <h4>Nossas Redes Sociais</h4>
                        <div>
                            <Image src={Fb} className={styles.iconeContatos}/>
                            <span>/OticaVida</span>
                        </div>
                        <div>
                            <Image src={Ig}className={styles.iconeContatos}/>
                            <span>@oticavidarj</span>
                        </div>
                        <div>
                            <Image src={Tt}className={styles.iconeContatos}/>
                            <span>@oticavidarj</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
