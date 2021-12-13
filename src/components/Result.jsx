import React from 'react';
import styles from './Steps.module.scss';

export const Result = ({onRoute,count,setCount}) => {
    return (
    <div className={styles.resultBlock}>
      <img width={100} height={100} src="/images/emoji-1.png" alt='emoj'/>
      <p>
        Неплохо! За <b>{10}</b> секунды, ты ввел:
      </p>
      <h2>{count} слов</h2>
      <button onClick={()=>{
        onRoute('game');
        setCount(0);
      }
      } 
        className="button">
        Попробовать снова?
      </button>
      <button onClick={()=>{
        onRoute('welcome');
        setCount(0);
      }
      }
      className="button">
        Главная
      </button>
    </div>
  );
}
