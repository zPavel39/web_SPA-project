import React from 'react'
import style from './button.module.scss'


export const ButtonAction = ({ description, onClick }) => {
    return (
        <button className={style.buttonAction} onClick={onClick}>
            <span>{description}</span>
        </button>
    )
}