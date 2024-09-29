import { useEffect, useState } from 'react'
import './Main.css'
import Aos from 'aos';

export function Main()
{ 
  useEffect(()=>{
    Aos.init({duration:1500});
  },[])


   return(
      <main className='w-100 overflow-hidden' style={{height:"663px"}}>
        <div className='w-50 h-50 position-absolute end-0 top-25  d-flex flex-column justify-content-end me-3'>
          <h2 className='text-white fw-bold my-3' data-aos="fade-up" style={{fontSize:"50px"}}>Virtualize <br/> your world</h2>
          <p className='fs-3 fw-semibold text-secondary' data-aos="fade-up">Bring your imaginative world to vivid virtual life.
          Embark on virtual opulence with India's foremost 360° tour & CGI expert, revitalizing your digital experience.</p>
        </div>
      </main>
   )
}