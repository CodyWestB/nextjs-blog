import '../styles/globals.css'
import Image from 'next/image'

const App = ({ Component, pageProps }) => {
    return (
        <>
            <Image
                className='landingImage'
                src="/images/backgroundImage.jpeg"
                layout='fill'
                objectFit='cover'
                objectPosition='center'
            />
            <Component {...pageProps} />
        </>
    );
}

export default App;