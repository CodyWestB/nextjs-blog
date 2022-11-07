import Image from 'next/image'
import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/404.module.css'


const Custom404 = () => {
    return (
        <>
            <Head>
                <title>404</title>
            </Head>
            <Link className={styles.removeLinkStyling} href={`/`}>
            <div className={`${styles.container} ${styles.main}`}>
                <h1 className={styles.pageNotFound}>404 Page Not Found</h1>
                <h1 className={styles.pageNotFound}>Sleep...</h1>

                <Image
                    src="/images/404_sandman.jpeg"
                    alt="You have strayed into the Dreamscape."
                    layout="fill"
                    objectFit='cover'
                    className='landingImage'
                />
            </div>
            </Link>
        </>
    );
}

export default Custom404;