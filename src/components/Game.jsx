import React, { useRef } from 'react';
import styles from './Steps.module.scss';

const arr = [
  'Наверное', 'вы', 'ещё', 'не','готовы','к','такой','музыке','но','вашим', 'детям', 'она', 'понравится',
  'Тото', 'у', 'меня', 'такое', 'больше',
  'Не', 'судите', 'меня', 'за', 'прошлое', 'я', 'не', 'живу', 'там', 'больше',
  'Как', 'принято', 'считать', 'стремящиеся', 'вытеснить','традиционное','производство', 'нанотехнологии', 'обнародованы',
  'Не', 'следует', 'однако', 'забывать', 'о', 'том', 'что', 'выбранный', 'нами', 'инновационный',
  'Сегодняшний', 'день', 'она', 'планировала', 'завершить', 'порцией', 'тако',
  'У', 'Грей', 'не', 'намечалось', 'свадьбы', 'и', 'до', 'пенсии', 'ей', 'было', 'далеко',
  'На', 'третьем', 'этаже', 'новая', 'компания', 'айтишники',
  'Двери', 'лифта', 'открылись', 'на', 'втором', 'этаже',
  'Она', 'протирала', 'стекла', 'своих', 'черепаховых', 'очков', 'но', 'не', 'сводила', 'глаз', 'с', 'Дженнифер',
];


export const Game = ({onRoute,setCount,count}) => {
  const [isError, setIsError] = React.useState(false);
  const [value,setValue] = React.useState('');
  const [word,setWord] = React.useState(arr[Math.floor(Math.random()*arr.length)]);
  const [time,setTime] = React.useState(10);
  const timeRef = useRef();
  const onChangeInput = (e) => {
    setValue(e.target.value);
    if(e.target.value===word){
      setWord(arr[Math.floor(Math.random()*arr.length)]);
      setCount((prev)=>prev+1);
      setValue('');
      return;
    }

    if (value !== word) {
      setIsError(true);
    }

    if (!value) {
      setIsError(false);
    }
  };
  timeRef.current = time;
  if(time === 0){
    onRoute('result')
  }
  React.useEffect(() => {
    let timerSetInterval = setInterval(()=>{
      setTime(timeRef.current-1);
    },1000);
    return ()=>{
      clearInterval(timerSetInterval)
    }
  }, [])

  return (
    <div className={styles.container}>
      <p className={styles.subTitle}>Введите слово:</p>
      <h2 className={styles.wordTitle}>{word}</h2>
       <input value={value} onChange={onChangeInput}
        className={styles.inputWord + ' ' + (isError ? styles.error : '')}
        placeholder="Введите слово"
        type="text"
      />
      <div className={styles.statistics}>
        <div>
          <p>Осталось времени:</p>
          <b>{time} сек.</b>
        </div>
        <div>
          <p>Введено слов:</p>
          <b>{count}</b>
        </div>
      </div>
    </div>
  )
}
