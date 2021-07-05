import axios from "axios";
import { auth0 } from "./Auth0";

const baseUrl = 'http://localhost:8080/'
const loginUrl = `${baseUrl}auth/google`
const logoutUrl = `${baseUrl}logout`


export const userLogin =() => window.open("http://localhost:8080/auth/google", "_self")

export const userLogout = () => {
    axios.get(`${logoutUrl}`)
    .then(console.log)
}