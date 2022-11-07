import '../styles/globals.css'
import Image from 'next/image'

const App = ({ Component, pageProps }) => {
    return (
        <>
            <Image
                src="/images/backgroundImage.jpeg"
                alt="Stary distorted starview"
                layout='fill'
                objectFit='cover'
                className='landingImage'
            />
            <Component {...pageProps} />
        </>
    );
}

export default App;