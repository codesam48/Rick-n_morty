import Nav from "./Nav";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { FiMenu } from 'react-icons/fi'
import logo from "../assets/logo.png"
function Navigation() {
    const [active, isactive] = useState(false)
    return(
        <section className="fixed z-10 w-screen bg-black/60">
            <div className="flex p-5 px-10 gap-80 h-20 max-[480px]:gap-0 max-[480px]:justify-between">
                <div className="fit w-fit relative">
                    <img src={logo} alt="logo" className="w-30 h-20"/>
                </div>
                
                <nav>
                    <ul className="flex gap-20 max-[480px]:flex-col max-[480px]:ml-1 max-[480px]:hidden max-[480px]:gap-5 max-[480px]:mt-10">
                        <NavLink to="/" className={({isActive})=>isActive ? "p-3 text-green-500 border-b-1 border-green-500 transition-all delay-200 ease-linear" : "p-3 text-white"}>Home</NavLink>
                        <NavLink to="/characters" className={({isActive})=>isActive ? "p-3 text-green-500 border-b-1 border-green-500 transition-all delay-200 ease-linear" : "p-3 text-white"}>Characters</NavLink>
                    </ul>
                </nav>
                <span className="leading-none mr-[-20px] h-fit p-2 min-[480px]:hidden" onClick={()=>isactive(true)}>
                    <FiMenu />
                </span>
                
            </div>
            <Nav open={active} close={()=>isactive(false)} />
        </section>
        
    )
};

export default Navigation;