// import { useState } from 'react';
import classes from './Alusense.module.css';
import palette from '@img/aluthumb.jpeg'



const Alusense = () => {

  const advantages = [
    {id:1, text:'Совместимы с Nespresso®'},
    {id:2, text:'Мономатериал — 100% перерабатываемый алюминий'},
    {id:3, text:'До 6 цветов на паллете',},
    {id:4, text:'Производство в Бельгии, более 10 лет на рынке'},
  ]
  
  return (
    <section className={classes.section}>
      <div className={classes.container}>
        <div className={classes.content}>
          <div className={classes.textBlock}>
            <h2 className={classes.title}>Alusense: алюминиевые капсулы премиум-класса</h2>

            <ul className={classes.features}>
              {advantages.map(li => {
                return <li key={li.id} className={classes.featuresItem}>{li.text}</li>
              })}
            </ul>

            <div className={classes.cta}>
              <button className={classes.btn}>Запросить коммерческое предложение</button>
              <a href="/files/Alusense_Spec.pdf" className={classes.link} target="_blank">
                Скачать спецификацию
              </a>
            </div>
          </div>

          <div className={classes.imageBlock}>
            <img src={palette} alt="" />
          </div>

        </div>
      </div>
    </section>
  );
};

export default Alusense;
