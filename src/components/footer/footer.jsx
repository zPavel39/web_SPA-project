import React from 'react';
import { ButtonAction } from '../ButtonAction/ButtonAction'
import style from './footer.module.scss';



export const Footer = ({ sumProducts, basketCards }) => {

    const handleClick = () => {
        if (basketCards.length > 0) {
            const listBasket = basketCards.map((card) => card.title)
            console.log(`Кол-во ${basketCards.length} , Наиминование товаров:${listBasket} , на сумму:${sumProducts}  `)
        }
    }

    return (
        <footer className={style.footer}>
            <h2 className={style.footer__title}>Заказ на сумму:<span className={style.footer__title_sum}>{sumProducts}&#8381;</span></h2>
            <ButtonAction
                description="Оформить Заказ"
                onClick={handleClick}
            />
        </footer>
    );
}