import React from "react"
import Logimg from "../../assets/Wall2.jpg";

const Login = () => {
    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 h-screen w-full'>

        <div className='bg-gray-100 flex flex-col justify-center '>
            <form className='max-w-[400px] w-full mx-auto rounded-xl bg-gray-300 p-8 px-8 drop-shadow-xl'>
                <h2 className='text-2xl dark:text-black font-bold text-center'>CONNEXION</h2>
                <div className='flex flex-col text-gray-600 py-2'>
                    <label>E-mail</label>
                    <input className='rounded-lg bg-gray-200 mt-2 p-2 focus:border-blue-500 focus:bg-gray-100 focus:outline-none' type="text" />
                </div>
                <div className='flex flex-col text-gray-600 py-2'>
                    <label>Mot de passe</label>
                    <input className='p-2 rounded-lg bg-gray-200 mt-2 focus:border-blue-500 focus:bg-gray-100 focus:outline-none' type="password" />
                </div>
                <div className='flex justify-between text-gray-600 py-2'>
                    <p className='flex items-center'><input className='mr-2' type="checkbox" /> Se souvenir</p>
                </div>
                <button className='w-full my-5 py-2 bg-blue-500 shadow-lg shadow-blue-500/50 hover:shadow-blue-800/40 text-white font-semibold rounded-lg'>Se connecter</button>
                
            </form>
        </div>
        <div className='hidden sm:block'>
            <img className='w-full h-full object-cover' src={Logimg} alt="" />
        </div>
    
    </div>
    )
}

export default Login;