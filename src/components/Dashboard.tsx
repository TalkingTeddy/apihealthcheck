import React, { useState } from 'react'
import Navbar from './Navbar'
import RegisterAPIModalComponent from './RegisterAPI.Component'

const Dashboard = () => {

    const [hasAPI, setHasAPI] = useState(false)

    const handleButtonClick = () => {
        console.log("Button clicked")
        setHasAPI(!hasAPI)
    }

    return (
        <div className="bg-gray-100 h-screen w-screen font-inter">
            <Navbar />
            {/* <h1 className="text-4xl font-inter">This is Inter</h1>
            <p className="text-4xl font-montserrat">This is Montserrat</p>
            <p className="text-4xl font-nunito">This is Nunito</p>
            <p className="text-4xl font-open-sans">This is Open Sans</p>
            <p className="text-4xl font-oswald">This is Oswald</p>
            <p className="text-4xl font-poppins">This is Poppins</p>
            <p className="text-4xl font-roboto-condensed">This is Roboto Condensed</p> */}
            <div className='w-full h-[90vh] '>
                {
                    hasAPI ?

                        <>
                            <h2>Has APIs</h2>
                        </> :

                        // <div className='w-full h-full flex flex-col justify-center items-center'>
                        //     <button className='bg-blue-700 text-white text-lg shadow-2xl shadow-slate-950 rounded-md w-2/6 active:scale-90 duration-300 active:transition-all m-2 p-2'>Register an API</button>
                        // </div>
                        <RegisterAPIModalComponent />
                }
            </div>
        </div>
    )
}

export default Dashboard