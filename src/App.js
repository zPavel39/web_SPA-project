import React, { useEffect } from 'react';
import { useNavigate, Route, Routes } from 'react-router-dom';
import { MenuPage } from './pages/menuPage/menuPage';
import { BasketPage } from './pages/basketPage/basketPage';
import { MainPage } from './pages/mainPage/mainPage';
import { InfoCardPage } from './pages/infoCardPage/InfoCardPage';
import { useSelector } from 'react-redux';

function App() {
    const navigate = useNavigate()
    const {isAuth} = useSelector(state => state.user)
    useEffect(() => {
        if (!isAuth) {
            const lsLogin = localStorage.getItem('login')
            const lsPassword = localStorage.getItem('password')
                if (lsLogin && lsPassword) {
                        navigate('/input')
                } else {
                    navigate('/registration')
                }
        } 
    }, [])
    return (
        <Routes>
            <Route path='/*' exact={true} element={<MainPage />} />
            <Route path='menu' exact={true} element={<MenuPage />} />
            <Route path='basket' exact={true} element={<BasketPage />} />
            <Route path='open/:id' exact={true} element={<InfoCardPage />} />
        </Routes>
    );
}

export default App;