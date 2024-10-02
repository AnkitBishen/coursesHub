import React from "react";

const login = async (email, password) => {
    try{
        const user = await fetch('http://localhost:5000/api/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password })
        });
        console.log(user)
        if(user.status == "failed"){
            return {status: false, data: null, error: user.error}
        }
        else{
            return {status: true, data: user.accessToken, error: null}
        }
    } catch (error) {
        return {status: false, data: null, error: error.message};
    }
};

export default  login ;