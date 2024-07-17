"use client"
import { Open_Sans } from "next/font/google";
import Link from "next/link";
import Image from 'next/image';
import Logotype from "/images/Logo/Desktop-logo.svg";
import { useState } from "react";

const inter = Open_Sans({
    subsets: ["latin"],
    weight: ["400"],
});

export default function Navbar () {
    const navItems = [
        {
            title:"Home",
            path:"/",
            icon:"home"
        },
        {
            title:"About Digits",
            path:"#",
            icon:"memory"
        },
        {
            title:"Pricing",
            path:"#",
            icon:"rocket"
        },
        {
            title:"Use Cases",
            path:"/conference",
            icon:"cases"
        },
    ];
    const [showNavigation,
    setShowNavigation] = useState(false);

    function handleNav (){
        setShowNavigation(!showNavigation);
    }
  return (
    <header>
        <button id="hamburgerbtn" onClick={handleNav} className={showNavigation?"showNav":""}>
            <span></span>
            <span></span>
            <span></span>
        </button>
        <Link href="/" className="logo">
        <Image src={Logotype}
            alt="Digits Logo"
            width={120}height={70}
        />
        </Link>
        <nav className={showNavigation?"showNav":""}>
            {navItems.map((item,i)=>{
                    return (
                        <Link key={i} className="menuBarLinks" href={item.path}>
                            <i className="material-icons">{item.icon}</i>&nbsp;&nbsp;
                            <span>{item.title}</span>
                        </Link>
                    )
                })
            }
        </nav>
        <div className="LogOnUserControl col-4 col-md-2 col-lg-2 col-xl-2">
            <div className="row m-0">
                <div className="col-6 p-0">
                    <div className="ordersBtn">
                        <Link className="d-block justify-content-center text-center" href="#">
                        <i className="material-icons">list</i><br></br>
                            <span>&Oacute;rdenes</span>
                        </Link>
                    </div>
                </div>
                <div className="col-6 p-0">
                    <div className="Login">
                        <Link className="d-block justify-content-center text-center" href="#">
                            <i className="material-icons">login</i><br></br>
                            <span>Accesar</span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </header>
  )
}