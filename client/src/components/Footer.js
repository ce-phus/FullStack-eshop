import React from 'react'
import logo2 from '../../public/images/gallery/logo6.png'
// import { footerLinks, socialMedia } from '../constants'
import { TwitterIcon, WhatsappIcon, TelephoneIcon, LinkedInIcon } from './Icons'
import Image from 'next/image'
import Layout from './Layout'
import   icon1 from '../../public/assets/instagram.svg'
import   icon2 from '../../public/assets/facebook.svg'
import   icon3 from '../../public/assets/linkedin.svg'
import   icon4 from '../../public/assets/twitter.svg'

export const socialMedia = [
    {
      id: "social-media-1",
      icon: icon1,
      link: "https://www.instagram.com/",
    },
    {
      id: "social-media-3",
      icon: icon4,
      link: "https://www.twitter.com/",
    },
    {
      id: "social-media-4",
      icon: icon3,
      link: "https://www.linkedin.com/",
    },
    {
        id: "social-media-4",
        icon: icon2,
        link: "https://www.linkedin.com/",
      },
  ];

  export const footerLinks = [
    {
      title: "Useful Links",
      links: [
        {
          name: "Content",
          link: "https://www.hoobank.com/content/",
        },
        {
          name: "How it Works",
          link: "https://www.hoobank.com/how-it-works/",
        },
        {
          name: "Create",
          link: "https://www.hoobank.com/create/",
        },
        {
          name: "Explore",
          link: "https://www.hoobank.com/explore/",
        },
        {
          name: "Terms & Services",
          link: "https://www.hoobank.com/terms-and-services/",
        },
      ],
    },
    {
      title: "Community",
      links: [
        {
          name: "Help Center",
          link: "https://www.hoobank.com/help-center/",
        },
        {
          name: "Partners",
          link: "https://www.hoobank.com/partners/",
        },
        {
          name: "Suggestions",
          link: "https://www.hoobank.com/suggestions/",
        },
        {
          name: "Blog",
          link: "https://www.hoobank.com/blog/",
        },
        {
          name: "Newsletters",
          link: "https://www.hoobank.com/newsletters/",
        },
      ],
    },
    {
      title: "Partner",
      links: [
        {
          name: "Our Partner",
          link: "https://www.hoobank.com/our-partner/",
        },
        {
          name: "Become a Partner",
          link: "https://www.hoobank.com/become-a-partner/",
        },
      ],
    },
  ];
  

const Footer = () => {
  return (
      <footer className='flex w-full justify-center items-center sm:px-16 px-6 flex-col pt-10'>
        
        <div className='flex justify-center items-center md:flex-row flex-col mb-8 w-full'>
            <div className=' flex-1 flex flex-col justify-start mr-0'>
                <Image src={logo2} 
                alt='logo' 
                className='w-[146px] h-[130px] object-contain rounded-full -right-0'/>
            </div>
            <div className='flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10'>
        {footerLinks.map((footerLink)=>(
          <div key={footerLink.key} className='flex flex-col ss:my-0 my-4 min-w-[150px]'>
            <h4 className=' dark:text-light text-dark font-bold text-[18px] leading-[27px]'>
              {footerLink.title}
            </h4>
            <ul className='list-none mt-4'>
              {footerLink.links.map((link, index)=>(
                <li key={link.name} className={` font-normal text-[16px] leadin-[24px] hover:text-accent cursor-pointer dark:text-light  ${index!== footerLink.links.length - 1 ? 'mb-4': 'mb-0'}`}>{link.name}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
        </div>
        <div className='w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3F3E45]'>
      <p className='text-light font-normal text-center text-[18px] leading-[27px]'>
      <span>{new Date().getFullYear()} &copy; CEPHUS.LTD</span>
      </p>
    </div>
    <div className='flex flex-row md:mt-0 mt-3 mb-3'>{socialMedia.map((social, index)=>(
      <Image
      key={social.id}
      src={social.icon}
      alt={social.id}
      className={`w-[21px] h-[21px] object-contain cursor-pointer  rounded-full bg-dark rounded-[2rem] text-light ${index !== socialMedia.length -1 ?'mr-6': 'mr-0' }`}
      />
    ))}
    </div>
    
    </footer> 
  )
}

export default Footer