import React from 'react'
import {Button} from 'antd'
import hero from '../images/image-hero-desktop.png'
import heroMobile from '../images/image-hero-mobile.png'
import data from '../images/client-databiz.svg'
import audio from '../images/client-audiophile.svg'
import meet from '../images/client-meet.svg'
import maker from '../images/client-maker.svg'

function Header() {
  return (
    <section className='grid grid-cols-1 lg:grid-cols-2 items-center'>
        <div className='lg:w-8/12 m-auto mt-10 lg:mt-24'>
            <h1 className='lg:text-5xl text-2xl m-auto content-none lg:w-full w-9/12 ' style={{fontWeight: 'bolder'}}>Make <br className='hidden lg:block' /> Remote Work</h1>
            <h1 className='text-base font-normal my-5 lg:my-10 lg:text-left text-center lg:w-8/12'>Get your team in sync, no matter your location, stremline processes, create team rituals, and watch productivity soar</h1>
            <button className='border-2 p-3 px-6 ml-20 lg:m-0 rounded-xl bg-black text-white text-base transition ease-in-out duration-700 hover:bg-white hover:text-black'>Learn More</button>
            <div className='flex justify-evenly items-center mt-10 lg:mt-20'>
              <img src={data} className='w-14' alt="data" />
              <img src={audio} alt="audio" className='w-14'/>
              <img src={meet} alt="meet" className='w-14'/>
              <img src={maker} alt="maker" className='w-14'/>
            </div>
        </div>
        <div className='lg:w-7/12 sm:mt-5 m-auto lg:pl-10 lg:col-start-2 row-start-1'>
            <img src={hero} className='hidden lg:flex' alt="" />
            <img src={heroMobile} className='lg:hidden' alt="" />
        </div>
    </section>
  )
}

export default Header