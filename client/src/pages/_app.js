import '@/styles/globals.css'
import { Montserrat } from 'next/font/google'
import Head from 'next/head'
import { useRouter } from 'next/router'
import Navbar from '../components/Navbar'
import { Provider } from 'react-redux'
import HorizontalNavbar from '../components/HorizontalNavbar'
import SideNav from '../components/SideNav'
import { useState } from 'react'
import store from './store'

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-mont'
})

export default function App({ Component, pageProps }) {
  const router = useRouter()
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo6.png" />
      </Head>
      <main className={`${montserrat.variable} font-mont bg-dark w-full min-h-screen`}>
        <Provider store={store}>
          {/* <Navbar /> */}
          <HorizontalNavbar toggleSidebar={toggleSidebar} />
          <SideNav isSidebarOpen={isSidebarOpen} />
          <Component key={router.asPath} {...pageProps} />
        </Provider>
      </main>
    </>
  )
}
