import React from 'react'
import { useGlobalContext } from './context'
import phoneImg from './images/phone.svg'

const Hero = () => {
  const {closeSubmenu} = useGlobalContext();
  return <section className="hero" onMouseOver={closeSubmenu}>
    <div className="hero-center">
      <article className="hero-info">
        <h1>This is my first REACT project, Edgar Salazar</h1>
        <p>I'm working to lear REACTJS and after that I think 
          I will be abble to 
          work to learn REACT Native and be a complete front end 
          developer
        </p>
        <button className="btn">Star now</button>
      </article>
      <article className="hero-images">
        <img src={phoneImg} alt="phone" className="phone-img"/>
      </article>
    </div>
  </section>
}

export default Hero
