import '@styles/globals.scss'
import { LocomotiveScrollProvider } from 'react-locomotive-scroll';
import { useRef } from 'react';

function MyApp({ Component, pageProps }) {
  const containerRef = useRef(null)
  return (
    <>
      <LocomotiveScrollProvider
        options={
          {
            smooth: true,
            lerp: '0.2',
            offset: [-100, 0]
            // ... all available Locomotive Scroll instance options 
          }
        }
        watch={
          [
            //...all the dependencies you want to watch to update the scroll
          ]
        }
        containerRef={containerRef}
      >
        <main data-scroll-container ref={containerRef}>
          <Component {...pageProps} />
        </main>
      </LocomotiveScrollProvider>

    </>
  )
}

export default MyApp
