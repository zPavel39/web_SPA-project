import React from 'react';
import closeBtn from '../../../assets/svg/close.svg';
import { useDispatch } from 'react-redux';
import { removeProductCard } from '../../../redux/basket/basketSlice';
import { useNavigate } from 'react-router-dom';
import style from './cardBasket.module.scss'

export const CardBasket = ({ cardItem }) => {

    const { imageUrl, title, price, id } = cardItem;
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleOpenCard = () => navigate(`/open/${id}`)
    
    const handleDel = (e) => {
        e.stopPropagation()
        dispatch(removeProductCard(cardItem))
    };

    return (
        <li key={id} className={style.basketCard} onClick={handleOpenCard} >
            <div className={style.basketCard__main}>
                <img src={imageUrl} className={style.basketCard__img} />
                <h3 className={style.basketCard__title}>{title}</h3>
            </div>
            <div className={style.basketCard__action}>
                <span className={style.basketCard__price}>{price}&#32;&#8381;</span>
                <button className={style.basketCard__button} onClick={handleDel}>
                    <img src={closeBtn} alt="close" />
                </button>
            </div>
        </li>
    );
}