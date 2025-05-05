import axios from 'axios';

const API_URL = '/api/auth';

const register = async(userData) => {
    try {
        const response = await axios.post(`${API_URL}/register`, userData);
        return response.data;
    } catch (error) {
        console.error(error);
    }
};

const login = async(userData) => {
    try {
        const response = await axios.post(`${API_URL}/login`, userData);
        if(response.data.token) {
            localStorage.setItem('user', JSON.stringify(response.data));
        }
        return response.data;
    } catch (error) {
        console.error(error);
    }
};

const logout = async() => {
    try {
        const token = JSON.parse(localStorage.getItem('user'))?.token;

        if(token) {
            await axios.post(
                `${API_URL}/logout`,
                {},
                {headers: {Authorization: `Bearer ${token}`}}
            );
        }

        localStorage.removeItem('user');
        return { success: true };

    } catch (error) {
        console.error(error);
        localStorage.removeItem('user');
        return { 
            success: true, 
            message: "logged out" 
        };
    }
};

const getCurrentUser = () => {
    return JSON.parse(localStorage.getItem('user'));
};

const authService = {
    register,
    login,
    logout,
    getCurrentUser
};

export default authService;