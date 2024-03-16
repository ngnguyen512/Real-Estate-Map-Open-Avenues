'use client'
import { useState } from "react";
import './navbar.scss';
import Image from 'next/image';
function Navbar() {
    const [open, setOpen] = useState(false);
    return (
        <nav>
            <div className="left">
                <a href='/' className='resize-image' >
                    <Image src="/logo.png" alt="" width = {20} height ={20}  />
                    <span>Everland</span>
                </a>
                <a href ='/'>Home</a>
                <a href ='/'>About</a>
                <a href ='/'>Contact</a>
            </div>
            <div className="right">
                <a href='/'>Agents</a>
                <a href='/'>Sign In</a>
                <a href='/' className='sign-up'>Sign Up</a>
                <div className='menuIcon'>
                    <Image src="/menu.png" alt="" width ={10} height={10} onClick={()=>setOpen((prev) => !prev)} />
                </div>
                <div className={open ? 'menu active': "menu"}>
                    <a href ='/'>Home</a>
                    <a href ='/'>About</a>
                    <a href ='/'>Contact</a>
                    <a href='/'>Agents</a>
                    <a href='/'>Sign In</a>
                    <a href='/'>Sign Up</a>
                </div>
            </div>
        </nav>
    )

}
export default Navbar;
