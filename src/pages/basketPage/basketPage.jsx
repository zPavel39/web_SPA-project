import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Footer } from '../../components/footer/footer';
import { CardBasket } from './cardBasket/cardBasket';
import { ButtonAction } from '../../components/ButtonAction/ButtonAction.jsx';
import { ButtonBack } from '../../components/buttonBack/ButtonBack';
import { setIsAuth } from "../../redux/user/userSlice";
import { useNavigate } from "react-router-dom";
import style from './basketPage.module.scss';



export const BasketPage = () => {

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { basketCards, sumProducts } = useSelector(state => state.basket)

    const handleLogout = () => {
        dispatch(setIsAuth(false))
        navigate('/')
    }
    
    return (
        <>
            <main className={style.basket}>
                <div className={style.basket__header}>
                    <ButtonBack />
                    <h1 className={style.basket__title}>Корзина с выбранными товарами</h1>
                    <ButtonAction
                        description="Выйти"
                        onClick={handleLogout}
                    />
                </div>
                <ul className={style.basket__list}>
                    {basketCards.map((card, id) => {
                        return (
                            <li key={id} className={style.basketCard}>
                                <CardBasket
                                    cardItem={card}
                                />
                            </li>
                        )
                    })
                    }
                </ul>
            </main>
            <Footer sumProducts={sumProducts} basketCards={basketCards} />
        </>
    );
}