import React from 'react'
import { useNavigate } from 'react-router-dom';
import backImg from './../../assets/svg/back.svg'
import style from './ButtonBack.module.scss'


export const ButtonBack = () => {
  const navigate = useNavigate()
  return (
    <>
      <button className={style.back} onClick={() => navigate(-1)}>
        <img className={style.back__img} src={backImg}></img>
      </button>
    </>
  )
}

