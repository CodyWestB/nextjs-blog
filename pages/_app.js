import '../styles/globals.css'
import Image from 'next/image'

const App = ({ Component, pageProps }) => {
    return (
        <>
            <div className='landingImageContainer'>
                <Image
                    src="/images/backgroundImage.jpeg"
                    alt="Stary distorted starview"
                    layout='fill'
                    objectFit='cover'
                    className='landingImage'
                />
            </div>
            <Component {...pageProps} />
        </>
    );
}

export default App;