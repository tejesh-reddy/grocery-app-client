import axios from "axios";

const baseUrl = 'http://localhost:8080/'
const loginUrl = `${baseUrl}auth/google`
const logoutUrl = `${baseUrl}logout`

export const userLogin = () => {
    axios.get("http://localhost:8080/auth/login/success")
    .then(console.log)
    .catch(err => console.log('err:', err));
      
}

export const userLogout = () => {
    axios.get(`${logoutUrl}`)
    .then(console.log)
}