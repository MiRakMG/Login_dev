import React from "react"
import Logimg from "../../assets/Wall.jpg";

const Signin = () => {
    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 h-screen w-full'>

        <div className='bg-gray-800 flex flex-col justify-center'>
            <form className='max-w-[400px] w-full mx-auto rounded-xl bg-gray-900 p-20 px-8'>
                <h2 className='text-2xl dark:text-white font-bold text-center'>INSCRIPTION</h2>
                <div className='flex flex-col text-gray-400 py-2'>
                    <label>Nom</label>
                    <input className='rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none' type="text" />
                </div>
                <div className='flex flex-col text-gray-400 py-2'>
                    <label>Adresse mail</label>
                    <input className='p-2 rounded-lg bg-gray-700 mt-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none' type="password" />
                </div>
                <div className='flex flex-col text-gray-400 py-2'>
                    <label>Date de naissance</label>
                    <input className='rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none' type="date" />
                </div>
                <div className='flex flex-col text-gray-400 py-2'>
                    <label>Mot de passe</label>
                    <input className='p-2 rounded-lg bg-gray-700 mt-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none' type="password" />
                </div>
                <button className='w-full my-5 py-2 bg-blue-500 shadow-lg shadow-blue-500/50 hover:shadow-teal-500/40 text-white font-semibold rounded-lg'>S'inscrire</button>
                
            </form>
        </div>
        <div className='hidden sm:block'>
            <img className='w-full h-full object-cover' src={Logimg} alt="" />
        </div>
 
    </div>
    )
}

export default Signin;