import React from 'react'
import HeroImg from '../assets/goodpic.jpg'
import { scroller } from 'react-scroll';
const Hero = () => {
  return (
    <div className="min-h-screen w-full flex flex-col justify-center items-center text-stone-400 pt-20 px-10" id="home">
        <h1 className="text-2xl md:text-4xl font-semibold leading-normal tracking-tighter pb-5">Hello, I'm<span className='text-4xl md:text-6xl text-white'>&nbsp;Phutthikiat</span></h1>
        <img className="margin-auto w-full sm:max-w-md md:max-w-lg lg:max-w-xl border-2 border-stone-400 "src={HeroImg} alt="My picture" />
        <p className="text-base md:text-2xl w-full py-4 sm:max-w-md md:max-w-lg lg:max-w-xl md:mt-8 px-4 tracking-tight lg:-mt-28 text-white text-center">"Young Developer with Big Dreams"</p>
        <button
  className="bg-stone-400 text-xl text-neutral-900 px-6 py-4 rounded hover:text-white hover:bg-stone-500 font-medium"
  onClick={() => scroller.scrollTo('contact', {
    duration: 500,
    delay: 0,
    smooth: 'easeInOutQuart',
  })}
>
  Contact Me
</button>
        <div className="my-4 flex items-center gap-5">
          <a target="_blank" class="transition-all text-stone-400 hover:scale-125 hover:text-white duration-300" href="https://www.facebook.com/phutthikiat /"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="35" width="35" xmlns="http://www.w3.org/2000/svg"><path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"></path></svg></a>
          <a target="_blank" class="transition-all text-stone-400 hover:scale-125 hover:text-white duration-300" href="https://github.com/mildPK"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="35" width="35" xmlns="http://www.w3.org/2000/svg"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path></svg></a>
        </div>
      
    </div>

  )
}

export default Hero;
