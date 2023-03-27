import React from 'react';
import './features.css';
const Features = ({title, text}) => {
  return (
    <div className='gpt3__features-container__feature'>
      <div className='gpt3__features-container__feature-tile'>
      <div />
      <h1>{title}</h1>
      </div>
      <div className='gpt3__features-conatiner_feature-text'> 
      {text}
      </div>
    </div>
  )
}

export default Features