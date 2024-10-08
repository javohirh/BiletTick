import React from 'react';
import {useCookies} from "react-cookie";
import {Navigate} from "react-router-dom";

function PrivateRouter({children}) {
    const [cookies] = useCookies(['accessToken']);
    console.log('tokennnn',cookies)

    return cookies?.accessToken==='isAdmin' ?
        children :<Navigate to='/login'/>
}

export default PrivateRouter;
