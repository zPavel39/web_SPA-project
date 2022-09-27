import { Header } from '../../components/header/header';
import { Card } from './card/card';
import { getAllCardsDB } from '../../database/const.js'
import { useEffect } from 'react';
import { useState } from 'react';
import style from './menuPage.module.scss'

export const MenuPage = () => {

    const [cards, setCards] = useState([]);

    useEffect(() => {
        const cardsDatabase = getAllCardsDB();
        setCards(cardsDatabase)
    }, [])

    return (
        <div className={style.main}>
            <Header
                title="Наша продукция"
            />
            <ul className={style.cards}>
                {cards.map((card) => {
                    return (
                        <li key={card.id}>
                            <Card
                                cardItem={card}
                            />
                        </li>
                    )
                })}
            </ul>
        </div>
    );
}