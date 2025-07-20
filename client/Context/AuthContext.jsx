import { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';

const AuthContext = createContext({
    isAuthenticated: false,
    user: null,
    loading: true,
    login: () => {},
    logout: () => {}
});

export const AuthProvider = ({ children }) => {
    const [authState, setAuthState] = useState({
        isAuthenticated: false,
        user: null,
        loading: true
    });

    useEffect(() => {
        const checkAuth = async () => {
            const token = localStorage.getItem('token');
            if (!token) {
                setAuthState(prev => ({ ...prev, loading: false }));
                return;
            }

            try {
                const response = await axios.get('http://localhost:3000/users/me', {
                    headers: { Authorization: `Bearer ${token}` }
                });
                
                setAuthState({
                    isAuthenticated: true,
                    user: response.data.data,
                    loading: false
                });
            } catch (error) {
              console.log(error)
                localStorage.removeItem('token');
                setAuthState({
                    isAuthenticated: false,
                    user: null,
                    loading: false
                });
            }
        };

        checkAuth();
    }, []);

    const login = (userData, token) => {
        localStorage.setItem('token', token);
        setAuthState({
            isAuthenticated: true,
            user: userData,
            loading: false
        });
    };

    const logout = () => {
        localStorage.removeItem('token');
        setAuthState({
            isAuthenticated: false,
            user: null,
            loading: false
        });
    };

    return (
        <AuthContext.Provider value={{
            ...authState,
            login,
            logout
        }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};
