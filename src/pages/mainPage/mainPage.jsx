import React, { useEffect } from 'react';
import { Route, Routes, useNavigate} from "react-router-dom";
import { FormIsAuth } from './../../components/formIsAuth/formIsAuth.jsx'
import { FormIsInput } from '../../components/formIsInput/formIsInput.jsx';
import style from'./mainPage.module.scss';

export const MainPage = () => {

    const navigate = useNavigate()

    useEffect(() => {
        const lsLogin = localStorage.getItem('login')
        const lsPassword = localStorage.getItem('password')
            if (lsLogin && lsPassword) {
                    navigate('/input')
            } else {
                navigate('/registration')
            }
    }, [])

    return (
        <div className={style.main}>
            <Routes>
                <Route index path='registration' element={<FormIsAuth />} />
                <Route path='input' element={<FormIsInput />} />
            </Routes>
        </div>
    )
}