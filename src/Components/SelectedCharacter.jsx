import { useContext } from "react";
import { useParams } from "react-router-dom";
import { FetchContext } from "./FetchContext";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { FiMapPin } from "react-icons/fi";
import { IoMaleFemale } from "react-icons/io5";
import { GiPawPrint } from "react-icons/gi";
import { FaLeaf } from "react-icons/fa";
function SelectedCharacter() {
    const { id } = useParams();FaLeaf
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
                        <button className="text-xl font-[100] "><FaArrowLeft /> Back To Home</button>
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
    const character = characters.find((char) => char.id === Number(id));
    return(
        <section className="h-screen flex justify-center items-center ">
            {character && (
                <div className="p-5 gap-10 flex gap-5 max-[480px]:flex-col max-[480px]:mt-70 max-[480px]:items-center">
                    <div className="h-20 bg-black fixed w-screen inset-0"></div>
                    <button className="fixed top-20 ml-1 hover:text-green-500 cursor-pointer">
                        <Link to={"/characters"} className="flex gap-2 items-center text-gray-500">
                            <span><FaArrowLeft /></span><span> Back to characters</span>
                        </Link>
                    </button>
                    <div>
                        <img src={character.image} alt={character.name} className="hover:scale-105 transition rounded-xl h-inherit"/>
                    </div>
                    <div className="w-100 max-[480px]:w-[100%] max-[480px]:">
                        <h2 className="flex mb-5 text-3xl justify-between ">{character.name}</h2>
                        <p className="flex  p-2 px-4 border-1 border-b-0 pr-25 justify-between border-gray-500/30 max-[480px]:bg-neutral-900 max-[480px]:border-none max-[480px]:rounded-full max-[480px]:my-2 max-[480px]:pr-10 max-[480px]:font-[100]">
                        <span className="flex items-center gap-2">
                            <span className="text-green-500"> <IoMaleFemale /> </span>
                            Gender: </span>
                         {character.gender}
                         </p>
                        <p className="flex  p-2 px-4 border-1 border-b-0 pr-25 justify-between border-gray-500/30 max-[480px]:bg-neutral-900 max-[480px]:border-none max-[480px]:rounded-full max-[480px]:my-2 max-[480px]:pr-10 max-[480px]:font-[100]">
                        <span className="flex items-center gap-2"> <span className="text-green-500"><FaLeaf/></span>Status: </span> 
                         {character.status}</p>
                        <p className="flex  p-2 px-4 border-1 border-b-0 pr-25 justify-between border-gray-500/30 max-[480px]:bg-neutral-900 max-[480px]:border-none max-[480px]:rounded-full max-[480px]:my-2 max-[480px]:pr-10 max-[480px]:font-[100]">
                        <span className="flex items-center gap-2"><span className="text-green-500"><GiPawPrint/></span>Species: </span>
                         {character.species}</p>
                        <p className="flex  p-2 px-4 border-1 border-b-0 pr-25 justify-between border-gray-500/30 max-[480px]:bg-neutral-900 max-[480px]:border-none max-[480px]:rounded-full max-[480px]:my-2 max-[480px]:pr-10 max-[480px]:font-[100]"><span className="flex items-center gap-2 "><span className="text-green-500"><FiMapPin/></span>{character.location.name}</span></p>
                        <div className="flex gap-5 mt-5">
                            <div className=" border-1 border-zinc-900 h-10 w-10 animate-spin"></div>
                            <div className=" border-1 border-zinc-900 h-10 w-10 animate-spin"></div>
                            <div className=" border-1 border-zinc-900 h-10 w-10 animate-spin"></div>
                            <div className=" border-1 border-zinc-900 h-10 w-10 animate-spin"></div>
                            <div className=" border-1 border-zinc-900 h-10 w-10 animate-spin"></div>
                            <div className=" border-1 border-zinc-900 h-10 w-10 animate-spin max-[480px]:hidden"></div>
                            <div className=" border-1 border-zinc-900 h-10 w-10 animate-spin max-[480px]:hidden"></div>
                            
                        </div>
                    </div>
                </div>   
            )}
        </section>
    )
}
export default SelectedCharacter;