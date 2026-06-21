import { useContext } from "react";
import { FetchContext } from "./FetchContext";
import { Link } from "react-router-dom";
import { IoCompassOutline } from "react-icons/io5";
import { FaArrowRight } from "react-icons/fa";
import { FaLeaf } from "react-icons/fa";
function Character() {
    const { characters, loading, error } = useContext(FetchContext);
    if(loading) {
        return <div className="h-screen flex justify-center items-center">
            <div className="border-2 border-green-500 h-30 w-30 animate-spin">
            </div>
            <h1 className="text-3xl">Loading....</h1>
        </div>
    }
    if(error) {
        return  <div className="flex justify-center items-center h-screen flex-col gap-10 text-3xl text-center">
                    <Link to={'/'}>
                        <button className="text-xl font-[100] ">{'<-'} Back To Home</button>
                    </Link>
                     <p className="p-5">opps...... something went wrong</p>
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
        <section className="p-10">
            <div className="ml-25 max-[480px]:m-0 max-[480px]:mt-20 mt-40">
                
                <h1 className="text-2xl"><span><IoCompassOutline className="text-green-500" /></span>Explore Characters</h1>
                <p className="text-gray-400">Browse Characters From The Rick And Morty Universe</p>
            </div>
            <div className="flex gap-10 flex-wrap justify-center mt-10">

                {characters.map((char) => (
                    <Link to={`/SelectedCharacter/${char.id}`} className="cursor-pointer h-fit w-60 border- bg-green-900/20 p-4 rounded hover:scale-105 transition" key={char.id}>
                        <div key={char.id}>
                            <img src={char.image} alt={char.name} className="rounded" />
                            <h2>{char.name}</h2> 
                            <p className="text-gray-400 flex items-center justify-between"><span className="flex items-center gap-2"><FaLeaf/>{char.gender} </span><span><FaArrowRight/></span> </p>
                        </div>
                    </Link>
                ))}
            </div>

            
        </section>
    )
}
export default Character;