import React, { useMemo } from 'react';
import cardBtn from '../../../assets/svg/btn-main.svg';
import cardBtnHover from '../../../assets/svg/btn-main_hover.svg';
import { v4 as uuidv4 } from 'uuid';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addProductCard } from '../../../redux/basket/basketSlice';
import style from './card.module.scss';

export const Card = ({ cardItem }) => {

    const { imageUrl, title, description, price, weight, amount, id } = cardItem;

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleOpenCard = () => navigate(`/open/${id}`)

    const handleClick = (e) => {
        e.stopPropagation()
        const cardItemBasket = { ...cardItem, idx: uuidv4() }
        dispatch(addProductCard(cardItemBasket))
    }
    
    const aString = useMemo(() => weight ? `${weight}г.` : `${amount}шт.`, [weight, amount])

    return (
        <div className={style.card} onClick={handleOpenCard}>
            <div className={style.card__main}>
                <img className={style.card__image} src={imageUrl} alt={imageUrl} />
                <h2 className={style.card__title}>{title}</h2>
                <p className={style.card__description}>
                    {description}
                </p>
            </div>
            <div className={style.card__footer}>
                <div>
                    <span className={style.card__price}>{price}&#32;&#8381;&#32;</span>
                    <span className={style.card__weight}>&#47;{aString}</span>
                </div>
                <button className={style.card__button} onClick={handleClick}>
                    <img src={cardBtn} alt="" />
                    <img src={cardBtnHover} alt="" />
                </button>
            </div>
        </div>
    );
}