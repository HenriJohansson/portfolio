import React from 'react'
import './navigation.css'
import {AiOutlineHome, AiOutlineUser} from 'react-icons/ai'
import {BiBook, BiMessageSquareDetail} from 'react-icons/bi'
import {RiServiceLine} from 'react-icons/ri'

export const Navigation = () =>{
    return(
        <nav>
            <a href="#home"><AiOutlineHome/></a>
            <a href="#about"><AiOutlineUser/></a>
            <a href="#experience"><BiBook/></a>
            <a href="#contact"><RiServiceLine/></a>
            <a href="#services"><BiMessageSquareDetail/></a>
        </nav>
    )
}