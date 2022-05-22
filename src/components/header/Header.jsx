import React from 'react'
import './header.css'
import { CallToAction } from './CallToAction'
import { Socials } from './Socials'
import Images from '../../resources/images'

export const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Henri Johansson</h1>
        <h5 className='text-light'>Fullstack Developer</h5>
        <CallToAction/>
        <Socials/>
        <div className='me'>
          <img src={Images.me_transparent} alt='Me' ></img>
        </div>
      </div>
    </header>
  )
}
