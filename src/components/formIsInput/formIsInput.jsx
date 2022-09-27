import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { setIsAuth } from '../../redux/user/userSlice'
import { loginUser } from '../../database/user'
import { useNavigate, Link } from 'react-router-dom'
import style from './formIsInput.module.scss'

export const FormIsInput = () => {

    const navigate = useNavigate()
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('')
    const dispatch = useDispatch()
    const [active, setActive] = useState(false)

    const handleSubmitInp = (e) => {
        e.preventDefault()
        if (login && password) {
            const currentUser = loginUser({
                login,
                password,
            })
            if (currentUser) {
                dispatch(setIsAuth(true))
                navigate('/menu')
            } else {
                setActive(prev => prev = true)
            }
        }
    }
    return (
        <form className={style.form} onSubmit={handleSubmitInp}>
            <Link className={style.form__link} to='/registration'>Зарегистрироваться</Link>
            <h2 className={style.form__title}>Вход</h2>
            <div className={style.form__block}>
                <input
                    className={style.form__mail}
                    type='text'
                    value={login}
                    placeholder='Логин'
                    onChange={(e) => setLogin(e.target.value)}
                />
            </div>
            <div className={style.form__block}>
                <span className={active ? style.form__active : style.form__error}> Логин или пароль не верный</span>
                <input className={style.form__password}
                    type='password' value={password}
                    placeholder='Пароль'
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>
            <div className={style.form__checkbox}>
                <input className={style.form__checkbox_check} type='checkbox' />
                <span className={style.form__checkbox_text}>Я согласен получать обновления на почту</span>
            </div>
            <button className={style.form__btn} type={'submit'}>Войти</button>
        </form>
    )
}