import React from 'react';
import basketImg from '../../assets/img/basket.svg';
import ellipseImg from '../../assets/img/ellipse.svg';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setIsAuth } from "../../redux/user/userSlice";
import { ButtonAction } from "../ButtonAction/ButtonAction";
import style from './header.module.scss';



export const Header = ({ title }) => {

    const dispatch = useDispatch()
    const { basketCards, sumProducts } = useSelector(state => state.basket)
    const navigate = useNavigate()

    const handleClickExit = () => {
        dispatch(setIsAuth(false))
        navigate('/')
    }

    const handleClickBasket = () => {
        navigate('/basket')
    }
    
    return (
        <div className={style.header}>
            <h1 className={style.header__title}>{title}</h1>
            <div className={style.header__right}>
                <div className={style.header__description}>
                    <span className={style.header__description_text}>Выброно товаров: {basketCards.length}</span>
                    <span className={style.header__description_text}>На сумму:{sumProducts}</span>
                </div>
                <button className={style.header__button} onClick={handleClickBasket}>
                    <img className={style.image} src={basketImg} alt='' />
                    <img className={style.image} src={ellipseImg} alt='' />
                </button>
                <ButtonAction
                    description="Выйти"
                    onClick={handleClickExit}
                />
            </div>
        </div>
    );
}