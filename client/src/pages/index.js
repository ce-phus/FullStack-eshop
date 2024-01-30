import Head from 'next/head'
import React from 'react'
import Layout from '../components/Layout'
import bgImage from '../../public/images/gallery/pexels2.jpg'
import img from '../../public/images/gallery/keyboard.jpg'
import img1 from '../../public/images/gallery/gaming1.jpg'
import img2 from '../../public/images/gallery/pexels3.jpg'
import Image from 'next/image'
import Logos from '../components/Logos'
import { fadeIn, slideIn } from '../../variants'
import { motion } from 'framer-motion'
import Shopnow from '../components/Button'
import Footer from '../components/Footer'
import Link from 'next/link'

const Index = () => {
  return (
    <>
      <Head>
        <title>Cephus</title>
        <meta name="description" content="Home" />
      </Head>

      <main className='flex items-center text-light w-full min-h-screen relative mx-auto'>

        <Layout className='pt-0 md:p-16 sm:pt-8'>

          <div className='flex justify-between items-center w-full bg-scroll h-[972px]'>
            <div className='w-full h-full overflow-hidden relative z-10'>
              <Image
                src={bgImage}
                alt='bgimage'
                layout='fill'
                objectFit='cover'
              />
              <div className='absolute inset-0 w-1/2 flex-col items-center self-center lg:w-full lg:text-center'>
                <h1 className='h1 text-6xl pt-60 font-bold inline-block pl-10'>
                  Unleash Infinite <span className='text-accent'>Possibilities</span>
                </h1>
                <p className='font-medium text-light text-4xl pl-10 pt-5'>Explore The Best Accessories At your Fingertips </p>
                <Link href='/shop' className='pl-20'>
                <Shopnow />
                </Link>
              
              </div>
            </div>
          </div>

          <div className='flex flex-col justify-end w-full pt-40 font-semibold grid gap-4 sm:gap-6 grid-cols-2'>
            <div className='w-full md:col-span-4'>
              <h2 className='text-light text-2xl font-semibold sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl py-5 '>About Us</h2>
              <h1 className='text-light font-bold text-4xl ss:text-[68px] ss:leading-[100px] sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl dark:text-light'>CEPHUS TECH <span className='text-primary'>LTD.</span></h1>
              <p className='font-normal text-light pt-4'>
              At Cephus Tech Hub, we're not just an ecommerce platform; we're a community united by our passion for technology. Our mission is to provide you with a seamless shopping experience for the latest computer accessories, gaming peripherals, and state-of-the-art PC workstations. We believe in the power of innovation to transform your digital lifestyle.
              </p>

              <p className='font-normal pt-3 text-light'>
                At Cephus Tech Hub, our team breathes technology. We are driven by an unwavering passion for staying ahead of the curve in the fast-paced world of gadgets and electronics. From cutting-edge gaming gear to sophisticated PC setups, our enthusiasm fuels our commitment to bring you the best in tech innovation
              </p>
            </div>

            <div className='md:col-span-4 pt-20'>
              <Image
              src={img}
              alt='img'
              className='w-full max-w-xl mx-auto h-[300px] rounded-[2rem]'/>
              <Link href='/shop' className='pl-20'>
                <Shopnow />
                </Link>
              
             
              
              

            </div>
          </div>
          <div className='pt-20 gap-4 grid grid-cols-2 font-semibold flex flex-col justify-end sm:gap-6'>
            <div className='md:col-span-4'>
              <Image
              src={img1}
              alt='img1'
              className='w-[800px] max-w-xl mx-auto h-[300px] rounded-[2rem]'/>
            </div>
            <div className='md:col-span-4'>
              <h1
              className='text-light font-bold text-3xl ss:leadning-[100px] sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl'> <span className='text-accent'>Explore Our</span> Comprehensive Collection </h1>
              <p className='font-normal text-light pt-3'>
              Welcome to our digital playground, where you can explore a vast collection of computer accessories and gaming peripherals. Whether you're searching for top-tier keyboards, precision mice, immersive monitors, or powerful graphics cards, TechFusion Hub is your one-stop destination for all things tech.
              </p>

              <p className='font-normal text-light pt-3'>
              Are you a gaming enthusiast seeking to elevate your gaming experience? Look no further. TechFusion Hub is your gateway to a world of gaming excellence. Our curated selection of gaming accessories is designed to immerse you in the virtual realm, providing tools that enhance precision, comfort, and overall gaming prowess.
              </p>
            </div>
          </div>
          <div className='pt-20 items-center flex flex-col'>
            <h1 className='text-light font-bold text-4xl ss:leading-[100px] sm:text-5xl md:text-6xl lg:text-7xl xl:txt-8xl'>Uncompromising Quality Standards</h1>
            <p className='text-light font-medium pt-3'>
            Your satisfaction is our top priority at CephusTech Hub. We uphold uncompromising quality standards to ensure that every product we offer meets and exceeds your expectations. From rigorous testing to partnerships with renowned brands, we are dedicated to delivering durable and high-performance tech solutions.
            </p>
            <p className='text-light font-medium pt-3'>
            At CephusTech Hub, we thrive on riding the wave of innovation. Technology evolves at an exhilarating pace, and we are committed to keeping you at the forefront. Our product selection is not just about what's popular today but anticipating and incorporating the tech trends of tomorrow. Join us on a journey where innovation meets accessibility, and together, we'll embrace the exciting advancements that shape our digital future. TechFusion Hub - where innovation and your tech dreams converge.
            </p>
            <Image
            src={img2}
            alt='img2'/>
          </div>
          
          <div className='flex justify-center items-center'>
            <Logos />
          </div>
          <Footer/>
        </Layout>
      </main>
    </>
  )
}

export default Index;
