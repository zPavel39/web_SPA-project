import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate, Link } from 'react-router-dom'
import { registerUser } from '../../database/user'
import { setIsAuth } from '../../redux/user/userSlice'
import { getAllUsers } from '../../database/user'
import style from './formIsAuth.module.scss'

export const FormIsAuth = () => {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('')
    const [active, setActive] = useState(false)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleSubmitReg = (e) => {
        e.preventDefault()
        const matchLogin = getAllUsers().find(x => x.login === login)
        if (matchLogin) {
            navigate('/registration')
            setActive(prev => prev = true)
        } else {
            console.log('matchLogin', matchLogin)
            const userLog = registerUser({
                login,
                password,
            })
            console.log('userLog', userLog)
            if (!userLog) {
                dispatch(setIsAuth(true))
                localStorage.setItem('login', login)
                localStorage.setItem('password', password)
                navigate('/menu')
            }
        }
    }
    return (
        <form className={style.form} onSubmit={handleSubmitReg}>
            <Link className={style.form__link} to='/input'>Авторизоваться</Link>
            <h2 className={style.form__title}>Регистрация</h2>
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
                <span className={active ? style.form__active : style.form__error}> Такой логин уже существует</span>
                <input
                    className={style.form__password}
                    type='password' value={password}
                    placeholder='Пароль'
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>
            <div className={style.form__checkbox}>
                <input className={style.form__checkbox_check} type='checkbox' />
                <span className={style.form__checkbox_text}>Я согласен получать обновления на почту</span>
            </div>
            <button className={style.form__btn} type={'submit'}>Зарегистрироваться</button>
        </form>
    )
}