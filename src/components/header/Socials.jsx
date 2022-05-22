import React from 'react'
import {BsLinkedin, BsGithub} from 'react-icons/bs'

export const Socials = () => {
  return (
    <div className='header__socials'>
        <a rel="noreferrer" href='https://www.linkedin.com/in/henri-johansson-b24bb6237/' target='_blank' ><BsLinkedin /></a>
        <a rel="noreferrer" href='https://github.com/HenriJohansson' target='_blank'><BsGithub/></a>
    </div>
  )
}
