// import { useState } from 'react';
import classes from './PoglianoSection.module.css';

export default function PoglianoSection() {
  const advantages = [
  { id: 1, text: 'Толщина от 20 до 40 мкм, в зависимости от задачи' },
  { id: 2, text: 'До 8 цветов печати (флексография / офсет)' },
  { id: 3, text: 'Барьерные свойства — защита от света, влаги и кислорода' },
  { id: 4, text: 'Производство в Италии, более 50 лет на рынке' },
];


  return (
    <section className={classes.section}>
      <div className={classes.container}>
        
        <div className={classes.content}>
         
          <h2 className={classes.title}>
            Pogliano: алюминиевая фольга для премиальной упаковки
          </h2>
          <p className={classes.subtitle}>
            Надежная защита, исключительный внешний вид, совместимость с автоматическими линиями розлива
          </p>

          <ul className={classes.features}>
            {advantages.map(li => {
                return <li key={li.id} className={classes.featuresItem}>{li.text}</li>
              })}
          </ul>

          <div className={classes.actions}>
            <a href="#" className={classes.cta}>Запросить коммерческое предложение</a>
            <a href="#" className={classes.link}>Скачать спецификацию</a>
          </div>
        </div>

        

      </div>
    </section>
  );
}
