import RegisterAPIInterface from "../interfaces/RegisterAPI.interface";
import * as fs from "fs"

const RegisterAPI = (apiDetails: RegisterAPIInterface | undefined): boolean => {

    console.log("These are the apiDetails received", apiDetails);

    // fs.writeFileSync('./Dummy.json', JSON.stringify(apiDetails))

    return false;
}

export default RegisterAPI;