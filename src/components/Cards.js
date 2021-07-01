import React from 'react';
import '../styles/cards.css';

function Card() {
  return (
    <div className='cards'>
      <div className='card-1'>
        <div className='text-box'>
          <h1>Transform your brand</h1>
          <p>We are a full-service creative agency specializing in helping brands grow fast.
            Engage your clients through compelling visuals that do most of the marketing for you.</p>
          <span>Learn more</span>
        </div>
      </div>
      <div className='card-2'></div>
      <div className='card-3'></div>
      <div className='card-4'>
        <div className='text-box'>
          <h1>Stand out to right audience</h1>
          <p>Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we’ll build and extend your brand in digital places.</p>
          <span>Learn more</span>
        </div>
      </div>
      <div className='card-5'>
        <div className='details'>
          <span>Grapich Design</span>
          <p>Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients’ attention.</p>
        </div>

      </div>
      <div className='card-6'>
        <div className='details'>
          <span>Photography</span>
          <p>Increase your credibility by getting the most stunning, high-quality photos that improve your business image.</p>
        </div>
      </div>
    </div>
  )
}

export default Card;
