import React from 'react';
import Phone from "./images/phone.svg"

const Hero = () => {
  return(
      <section className="hero">
          <div className="hero-center">
              <article className='hero-info'>
                <h1>Payments infrastructure for the internet</h1>
                <p>Millions of businesses of all sizes – from startups to Fortune 500s – use Stripe's software and APIs to accept payments, send payouts, and manage their businesses online.</p>
                <button className="btn">Start Now</button>
              </article>
              <article className='hero-images'>
                <img src={Phone} alt="" />
              </article>
          </div>
      </section>
  );
};

export default Hero;