import React from 'react'
import Image from 'next/image'
import { footerLinks } from '@/constants'
import Link from 'next/link'

const Footer = () => {
  return (
    <div className="flex flex-col text-[#4C4B16] mt-5 border-t-2 border-[#898121]">
      <div className="flex max-md:flex-col flex-wrap justify-between gap-5 p-6">
        <div className="flex flex-row justify-start items-start gap-1">
          <Image
            src="/logo.png"
            alt="web-logo"
            width={30}
            height={2}
            className="object-contain"
          />
          <div>Books For You</div>
        </div>
        <div className='footer__links'>
            {footerLinks.map((link) => (
                <div className='footer__link' key={link.title}>
                    <h3 className='font-bold'>{link.title}</h3>
                    {link.links.map((item) => (
                        <Link key={item.title} href={item.url} className='text-[#898121]'>{item.title}</Link>
                    ))}
                </div>
            ))}
        </div>
      </div>
    </div>
  )
}

export default Footer
