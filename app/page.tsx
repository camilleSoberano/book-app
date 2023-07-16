import Image from 'next/image'

import {Hero, SearchBar, CustomFilter } from '@/components'


export default async function Home() {





  return (
    <main className="overflow-hidden h-fit-content">
      <Hero />
      <div className='mt-12 padding-x padding-y max-width' id='discover'>
        <div className='home__text-container'>
          <h1 className='text-4xl font-extrabold'>Book List</h1>
          <p>Explore books you might like</p>
        </div>
        <div className='home__filters'>
          <SearchBar/>
          <div className='home__filter-container'>
            <CustomFilter/>
            <CustomFilter/>
          </div>
        </div>
      </div>
    </main>
  )
}
