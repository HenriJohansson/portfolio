import React , {useState} from 'react'
import './navigation.css'
import {AiOutlineHome, AiOutlineUser} from 'react-icons/ai'
import {BiBook, BiMessageSquareDetail} from 'react-icons/bi'
import {RiServiceLine} from 'react-icons/ri'

export const Navigation = () =>{
    const[activeNav, setActiveNav] = useState('#home')
    return(
        <nav>
            <a href="#home"
                onClick={() => setActiveNav('#home')}
                className={activeNav === '#home' ? 'active' : 'inactive'}>
                <AiOutlineHome/>
            </a>

            <a href="#about" 
                onClick={() => setActiveNav('#about')}
                className={activeNav === '#about' ? 'active' : 'inactive'}>
                <AiOutlineUser/>
            </a>

            <a href="#experience"
            onClick={() => setActiveNav('#experience')}
            className={activeNav === '#experience' ? 'active' : 'inactive'}>
                <BiBook/>
            </a>

            <a href="#contact" 
            onClick={() => setActiveNav('#contact')}
            className={activeNav === '#contact' ? 'active' : 'inactive'}>
                <RiServiceLine/>
            </a>

            <a href="#services" 
            onClick={() => setActiveNav('#services')}
            className={activeNav === '#services' ? 'active' : 'inactive'}>
                <BiMessageSquareDetail/>
            </a>
        </nav>
    )
}