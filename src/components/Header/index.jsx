import styles from './Header.module.css'
import globalStyle from '@/styles/Geral.module.css'
import Image from 'next/image'
import Logo from '../../../public/logo.png'
import Link from 'next/link'

export default function Header() {
    return (
        <header className={styles.header}>
            <div className={globalStyle.limitaSecao}>
                <Image src={Logo} alt='Logo' className={styles.imgLogo}/>
                <nav>
                    <Link href="/#produtos" className={styles.links}>Produtos</Link>
                    <Link href="/#sobre" className={styles.links}>Sobre</Link>
                    <Link href="/#contato" className={styles.links}>Contato</Link>
                </nav>
            </div>
        </header>
    )
}
