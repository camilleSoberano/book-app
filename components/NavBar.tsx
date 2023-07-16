import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import CustomButton from './CustomButton'

const NavBar = () => {
  return (
    <div className="w-full absolute z-10">
      <nav className="flex justify-between items-center m-6">
        <Link href="/" className="flex justify-center items-center">
          <div className="flex flex-row gap-1">
            <Image
              src="/logo.png"
              alt="web-logo"
              width={30}
              height={2}
              className="object-contain"
            ></Image>
            <div className="font-bold text-lg text-[#4C4B16]">
              Books For You
            </div>
          </div>
        </Link>
        <CustomButton
          title="Sign In"
          btnType={'button'}
          containerStyles="text-[#F7F1E5] rounded-full bg-[#4C4B16] min-w-[130px]"
        />
      </nav>
    </div>
  )
}

export default NavBar
