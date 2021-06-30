import { useState } from "react"


export const useLogin = (loggedIn: Boolean) => {
    let [login, setLogin] = useState<Boolean>(loggedIn);

    const loginAction = () => {
        setLogin(true)
    }

    const logoutAction = () => {
        setLogin(false)
    }

    const actions = {
        login: loginAction,
        logout: logoutAction,
    }

    return [login, actions];
}