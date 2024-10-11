import { useState } from "react";
import RegisterAPIInterface from "../interfaces/RegisterAPI.interface";
import RegisterAPI from "../utils/RegisterAPI.Function";
import { Tooltip, Button } from "flowbite-react";

const RegisterAPIModalComponent = () => {

    const [apiDetails, setAPIDetails] = useState<RegisterAPIInterface>();
    const [isRaw, setIsRaw] = useState(false)
    const [isDivClicked, setIsDivClicked] = useState(false)

    const handleSave = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = event.target;
        console.log(name, value)

        if (name == 'apiRequestBodyType' && value == 'raw') { setIsRaw(true) }
        else if (name == 'apiRequestBodyType' && value != 'raw') { setIsRaw(false) }

        setAPIDetails((prevAPIDetails: any) => ({
            ...prevAPIDetails, [
                name
            ]: value
        }));
    }

    const handleSubmit = () => {
        RegisterAPI(apiDetails)
    }

    return (
        <div className="w-full h-full flex justify-center items-center relative bg-gray-200" >
            <div className="bg-white p-4 w-5/6 h-5/6 rounded-md shadow-[5px_5px_0px_2px_#1d4ed8] flex flex-col">
                <form action="" className="flex flex-col justify-center content-evenly items-center" onSubmit={(e) => { e.preventDefault(); handleSubmit() }}>
                    {/* <div className="flex justify-between items-center"> */}
                    <h1 className="font-oswald text-4xl flex gap-2 cursor-no-drop">Register New REST API
                        <Tooltip content="We aren't supporting GraphQL APIs yet.">
                            <span>
                                🌐
                            </span>
                        </Tooltip>
                    </h1>
                    {/* </div> */}
                    <div className="w-full h-2/3 font-inter rounded-md mt-8 flex flex-col gap-8 p-2 overflow-auto">
                        <div className="flex gap-2 flex-col">
                            <label htmlFor="apiName" className="text-md focus:border-blue-700 font-inter">API Name</label>
                            <input onChange={(e) => handleSave(e)} type="text" name="apiName" id="apiName" placeholder="Enter a name"
                                required
                                onInvalid={e => e.currentTarget.setCustomValidity("API Name is needed")}
                                onInput={e => e.currentTarget.setCustomValidity("")}

                                // className=" text-xl font-inter focus:border-blue-700 border-2 border-gray-300 rounded-md p-2" 
                                className="text-md font-inter w-full rounded-md p-2 bg-white border-2 border-gray-300 shadow-md focus:shadow-2xl transition-all duration-300 ease-in-out placeholder-slate-400
                                focus:outline-none focus:border-sky-200 focus:ring-2 focus:ring-blue-700"
                            />
                        </div>
                        <div className="flex gap-2 flex-col">
                            <label htmlFor="apiDescription" className="text-md focus:border-blue-700 font-inter">API Description</label>
                            <input onChange={(e) => handleSave(e)} type="text" name="apiDescription" id="apiDescription"
                                placeholder="Enter a description"

                                // className=" text-xl font-inter focus:border-blue-700 border-2 border-gray-300 rounded-md p-2" 
                                className="text-md font-inter w-full rounded-md p-2 bg-white border-2 border-gray-300 shadow-md focus:shadow-2xl transition-all duration-300 ease-in-out placeholder-slate-400
                                focus:outline-none focus:border-sky-200 focus:ring-2 focus:ring-blue-700"
                            />
                        </div>
                        <div className="flex gap-2 flex-col">
                            <label htmlFor="apiEndpoint" className="text-md focus:border-blue-700 font-inter">URL</label>
                            <div className="flex gap-2">
                                <select required
                                    onInvalid={e => e.currentTarget.setCustomValidity("Select the API Method")}
                                    onInput={e => e.currentTarget.setCustomValidity("")} className="rounded-md p-2 bg-white border-2 border-gray-300 shadow-md focus:shadow-2xl transition-all duration-300 ease-in-out placeholder-slate-400
                                focus:outline-none focus:border-sky-200 focus:ring-2 focus:ring-blue-700" name="apiMethod" onChange={(e) => handleSave(e)} id="apiMethod">
                                    <option className="p-2 rounded-md bg-white" value="" disabled>Select a value</option>
                                    <option className="p-2 rounded-md bg-white" defaultValue={"GET"}>GET</option>
                                    <option className="p-2 rounded-md bg-white" value="POST">POST</option>
                                    <option className="p-2 rounded-md bg-white" value="PUT">PUT</option>
                                </select>
                                <input onChange={(e) => handleSave(e)} type="text" name="apiEndpoint" id="apiEndpoint"
                                    placeholder="Enter the URL"
                                    required
                                    onInvalid={e => e.currentTarget.setCustomValidity("Endpoint is needed")}
                                    onInput={e => e.currentTarget.setCustomValidity("")}
                                    // className=" text-xl font-inter focus:border-blue-700 border-2 border-gray-300 rounded-md p-2" 
                                    className="text-md font-inter w-full rounded-md p-2 bg-white border-2 border-gray-300 shadow-md focus:shadow-2xl transition-all duration-300 ease-in-out placeholder-slate-400
                                focus:outline-none focus:border-sky-200 focus:ring-2 focus:ring-blue-700"
                                />
                            </div>
                        </div>
                        <div className="flex gap-2 flex-col">
                            <div className="flex gap-2 items-center">
                                <div className="flex gap-2 items-center">
                                    <label htmlFor="requestBodyType" className="text-md focus:border-blue-700 font-inter">Response Type :</label>
                                    <input type="radio" onChange={(e) => handleSave(e)} name="apiRequestBodyType" defaultValue="none" id="apiRequestBodyType-none" className="w-5 h-5 delay-75 transition-all text-[0px] text-blue-600 bg-gray-100  focus:ring-blue-400 focus:ring-2" required />
                                    <label htmlFor="apiRequestBodyType-none">None</label>
                                    <input type="radio" onChange={(e) => handleSave(e)} name="apiRequestBodyType" value="raw" id="apiRequestBodyType-raw" className="w-5 h-5 delay-75 transition-all text-[0px] text-blue-600 bg-gray-100  focus:ring-blue-400 focus:ring-2" />
                                    <label htmlFor="apiRequestBodyType-raw">Raw</label>
                                    <input type="radio" onChange={(e) => handleSave(e)} name="apiRequestBodyType" value="form-data" id="apiRequestBodyType-form-data" className="w-5 h-5 delay-75 transition-all text-[0px] text-blue-600 bg-gray-100  focus:ring-blue-400 focus:ring-2" />
                                    <label htmlFor="apiRequestBodyType-form-data">Form Data</label>
                                </div>
                                {
                                    isRaw ?
                                        <div onClick={() => setIsDivClicked(!isDivClicked)} className=" delay-75 transition-all relative flex flex-col border-2 border-gray-300 px-4 py-1 rounded-lg m-2">
                                            <h3>Type of data</h3>
                                            <div className={`absolute ${isDivClicked ? "flex flex-col" : "hidden"} top-10 gap-2`}>
                                                <input type="radio" onChange={(e) => handleSave(e)} name="apiRequestBodyType" value="raw" id="apiRequestBodyType-raw" className="w-5 h-5 delay-75 transition-all text-[0px] text-blue-600 bg-gray-100  focus:ring-blue-400 focus:ring-2" />
                                                <label htmlFor="apiRequestBodyType-raw">Raw</label>
                                            </div>
                                        </div> : null
                                }
                            </div>
                        </div>
                    </div>
                    <button disabled={apiDetails !== undefined ? false : true} className={`m-2 p-2 w-full disabled:bg-gray-400 bg-blue-300 rounded-md transition-all duration-300 ease-in-out hover:bg-blue-700 text-white font-oswald text-2xl`}>Save API</button>
                </form>
            </div>
        </div>
    );
};

export default RegisterAPIModalComponent