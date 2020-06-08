export const authenticate = async (values) => {
    let res = await fetch('http://localhost:3000/api/v1/auth/login', {
        method: 'POST',
        mode: 'cors',
        body: JSON.stringify(values),
        credentials: 'include',
        headers: {
            'Content-Type': 'application/json'
        }
    });

    return await res.json();
}

export const register = async (values) => {
    let res = await fetch('http://localhost:3000/api/v1/auth/register', {
        method: 'POST',
        mode: 'cors',
        body: JSON.stringify(values),
        credentials: 'include',
        headers: {
            'Content-Type': 'application/json'
        }
    });

    return await res.json();
}

export const getUserProfile = async() => {
    let res = await fetch('http://localhost:3000/api/v1/profile', {mode: 'cors', credentials: 'include'});
    return await res.json();
}

export const logoutUser = async() => {
    let res = await fetch('http://localhost:3000/api/v1/auth/logout', {mode: 'cors', credentials: 'include'});
    return await res.json();
}
