
const login = async (email, password) => {
    try{
        const response = await fetch('http://localhost:5000/api/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password })
        });
        const user = await response.json();
        if(user.status === "failed"){
            return {status: false, data: null, error: user.error}
        }
        else{
            localStorage.setItem('userAccessToken', JSON.stringify(user.accessToken))
            return {status: true, data: user.accessToken, error: null}
        }
    } catch (error) {
        return {status: false, data: null, error: error.message};
    }
};

export default login;
