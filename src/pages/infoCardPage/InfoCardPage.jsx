import React from 'react'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { getCardsDB } from '../../database/const.js';
import { v4 as uuidv4 } from 'uuid';
import { addProductCard } from '../../redux/basket/basketSlice';
import background from '../../assets/img/card_info.png';
import { Header } from '../../components/header/header';
import { ButtonBack } from '../../components/buttonBack/ButtonBack';
import './infoCardPage.scss'



export const InfoCardPage = () => {
    const { id } = useParams()
    const [openCard, setOpenCard] = useState()
    const dispatch = useDispatch()
    const handleClick = () => {
        const cardItemBasket = { ...openCard, idx: uuidv4() }
        dispatch(addProductCard(cardItemBasket))
    }
    useEffect(() => {
        if (id) {
            console.log('id', id)
            const cardId = getCardsDB(id)
            setOpenCard(cardId)
        }
    }, [id])

    if (!openCard) {
        return (
            <div>Loading...</div>
        )
    }
    
    const { weight, amount, price } = openCard
    const aString = weight ? `${weight}г.` : `${amount}шт.`

    return (
        <div className='info' style={{ backgroundImage: `url(${background})` }} >
            <div className='info__header'>
                <ButtonBack />
                <Header />
            </div>
            <div className='info__main'>
                <div className='info__picture'>
                    <img className='info__img' src={openCard.imageUrl}></img>
                </div>
                <div className='info__list'>
                    <h2 className='info__title'>{openCard.title}</h2>
                    <p className='info__description'>{openCard.description2}</p>
                    <div className='info__action'>
                        <div className='info__price'>
                            <span className='info__price_card'>{price}&#32;&#8381;&#32;</span>
                            <span className='info__price_weight'>&#47;{aString}</span>
                        </div>
                        <div>
                            <button className="buttonAction" onClick={handleClick}>
                                <span>В карзину</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}