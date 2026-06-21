import { Link } from "react-router-dom";
import { useContext } from "react";
import { FetchContext } from "./FetchContext";
import { FaInstagram, FaFacebook, FaWhatsapp, FaGithub, FaEnvelope } from "react-icons/fa";
function Home() {
    const { loading, error } = useContext(FetchContext);
        if(loading) {
            return <div className="h-screen flex justify-center items-center">
                <div className="border-2 border-green-500 h-30 w-30 animate-spin">
                </div>
                <h1 className="text-3xl">Loading....</h1>
        </div>
        }
        if(error) {
            return <div className="flex justify-center items-center h-screen flex-col gap-10 text-3xl text-center">
                <p>opps...... something went wrong</p>
                <div className="flex justify-center items-center gap-10 flex-wrap">
                    <div className="h-15 border-3 w-15 border-red-500 animate-bounce"></div>
                    <div className="h-10 border-3 w-10 border-red-500"></div>
                    <div className="h-20 border-3 w-20 border-red-500 animate-bounce"></div>
                    <div className="h-15 border-3 w-15 border-red-500 max-[480px]:hidden"></div>
                    <div className="h-10 border-3 w-10 border-red-500 animate-bounce max-[480px]:hidden"></div>
                    <div className="h-5 border-3 w-5 border-red-500 max-[480px]:hidden"></div>
                    <div className="h-15 border-3 w-15 border-red-500 animate-bounce max-[480px]:hidden"></div>
                </div>
            </div>
        }
    return(
        <section className="h-screen bg-right relative inset-0 z-2">
            <div className="bg-[url('./assets/back.jpg')] bg-cover h-screen bg-right abosolute inset-0 z-2 opacity-15"></div>
                 
              <div className="m-15 ml-30 max-[480px]:m-5 max-[480px]:mt-45 absolute inset-0 z-5 min-[480px]:mt-60">
                  <p className="text-2xl mb-4 max-[480px]:text-xl max-[480px]:font-[100]">Welcome to the</p>
                  <h1 className="text-green-500 text-[50px] font-[600] leading-none max-[480px]:text-3xl">Rick And Morty <br /> <span className="text-white">Library </span> </h1>
                  <p className="font-[100] mt-4 text-gray-400 max-[480px]:text-sm max-[480px]:my-4">Browse and explore characters from <br /> the rick and morty cartoon universe.</p>
                    <Link to={"/characters"}>
                        <button className="bg-green-700 p-4 rounded mt-4 cursor-pointer animate-pulse">
                                Explore Characters
                        </button>
                    </Link>
                    <div className="flex gap-4 mt-20 max-[480px]:hidden">
                        <a href="mailto:ssamwokos48@gmail.com"><FaEnvelope/></a>
                        <a href="https://github.com/codesam48"><FaGithub/> </a>
                        <a href="https://www.instagram.com/codesam48?igsh=MXdocWt5ZGcxY3ZwaA=="><FaInstagram/></a>
                        <a href="https://wa.me/2349079658222"><FaWhatsapp/></a>
                        <a href=""><FaFacebook/></a>
                    </div>
              </div>
              

            </section>
    )
}
export default Home;
