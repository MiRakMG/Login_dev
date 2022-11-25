const ProfileSetting = () => {
    return (

            
            <form className='max-w-[400px] w-full mx-auto '>
                <h1 className='text-gray-100 py-2'>Information personnelle</h1>
                <div className='flex flex-col text-gray-600 py-2'>
                    <label>Nom</label>
                    <input className='rounded-lg bg-gray-300 mt-2 p-2 focus:border-blue-500 focus:bg-gray-100 focus:outline-none' type="text" />
                </div>
                <div className='flex flex-col text-gray-600 py-2'>
                    <label>Prénom</label>
                    <input className='rounded-lg bg-gray-300 mt-2 p-2 focus:border-blue-500 focus:bg-gray-100 focus:outline-none' type="text" />
                </div>
                <div className='flex flex-col text-gray-600 py-2'>
                    <label>Mot de passe</label>
                    <input className='p-2 rounded-lg bg-gray-300 mt-2 focus:border-blue-500 focus:bg-gray-100 focus:outline-none' type="password" />
                </div>
            </form>

    )
}

export default ProfileSetting;