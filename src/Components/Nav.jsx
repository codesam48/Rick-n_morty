import { NavLink } from "react-router-dom";
import { FaInstagram, FaFacebook, FaWhatsapp, FaGithub, FaEnvelope } from "react-icons/fa";
import logo from "../assets/logo.png"
function Nav({open, close}){
    return (
        open && (
            <section className={`bg-black/50 w-screen inset h-screen top-0 fixed flex z-10 justify-end min-[480px]:hidden transition-transform ${open ? 'translate-x-0': 'translate-x-full'}`} onDoubleClick={close}>
                <nav className={` font-[100] h-screen bg-zinc-900/80 w-40 flex flex-col p-4 gap-10 transform transition-transform ${open ? 'translate-x-0': 'translate-x-full'}`}>
                    <span className=" p-1 px-3 rounded-full w-fit bg-neutral-800" onClick={close}>X</span>
                    <ul className="flex flex-col gap-5">
                        <NavLink to="/" className={({isActive})=> isActive ? "bg-neutral-800 p-4 rounded-full" : "p-4 rounded-full bg-zinc-900"} >Home</NavLink>
                        <NavLink to="/characters" className={({isActive})=> isActive ? "bg-neutral-800 p-4 rounded-full" : "p-4 rounded-full bg-zinc-900"}>Characters</NavLink>
                    </ul>
                    <img src={logo} alt="" />
                    <div className="text-center text-sm font-[100]">
                        <p>Any questions or suggestions?? <br /> Reach Out </p>
                    </div>
                    <div className="flex gap-4 ">
                        <a href="mailto:ssamwokos48@gmail.com"><FaEnvelope/></a>
                        <a href="https://github.com/codesam48"><FaGithub/> </a>
                        <a href="https://www.instagram.com/codesam48?igsh=MXdocWt5ZGcxY3ZwaA=="><FaInstagram/></a>
                        <a href="https://wa.me/2349079658222"><FaWhatsapp/></a>
                        <a href=""><FaFacebook/></a>
                    </div>
                </nav>
            </section>
        )
    )
}
export default Nav;
