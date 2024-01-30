import React from 'react'
import Image from 'next/image'
import img3 from '../../public/images/gallery/companylogos.png'

const Logos = () => {
  return (
    <div className='cursor-pointer border border-[2px] rounded-[2rem] border-[#5d0076] bg-gradient-to-t from-purple-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 '>
      <Image
      src={img3}
      alt='img3'/>
    </div>
  )
}

export default Logos