import React from 'react'
import styles from './Steps.module.scss';

export const Welcome = ({onRoute}) => {
  return (
    <>
       <img src="/images/flag.png" height={100} width={100} alt='flag' />
      <h1 className={styles.welcomeTitle}>SPEED WORDS</h1>
      <p className={styles.welcomeText}>Игра на скорость ввода слов</p>
      <br />
      <button onClick={()=>onRoute('game')} className="button">
        <img src="/images/flame.png" alt='faer'/>
        Начать
      </button>
    </>
  )
}

