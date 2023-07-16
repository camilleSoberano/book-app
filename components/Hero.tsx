'use client'
import React from 'react'
import Image from 'next/image'
import CustomButton from './CustomButton'

const Hero = () => {
  const handleScroll = () => {}

  return (
    <div className="hero">
      <div className="flex-1 pt-36 padding-x">
        <h1 className="hero__title text-[#4C4B16]">
          Find, read and rent a book -- quickly and easily
        </h1>
        <p className="hero__subtitle text-[#898121]">
          Streamline your book rental experience with our effortless process.
        </p>
        <CustomButton
          title="Explore Books"
          btnType={'button'}
          containerStyles="bg-[#4C4B16] text-[#F7F1E5] rounded-full mt-10"
          handleClick={handleScroll}
        />
      </div>
      <div className="hero__image-container">
        <div className="hero__image">
          <Image
            src="/books-1.png"
            alt="hero"
            fill
            className="object-contain xl:pt-12"
          />
        </div>
        <div
          className="bg-[#fff] h-[52%] overflow-hidden xl:bg-[#E7B10A] w-[80%] xl:h-[80%] xl:w-1/2"
          style={{
            position: 'absolute',
            borderRadius: '44% 56% 70% 30% / 51% 32% 68% 49% ',
            zIndex: '-10',
            right: '2rem',
          }}
        ></div>
      </div>
    </div>
  )
}

export default Hero
