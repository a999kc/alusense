import classes from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={classes.footer}>
      <div className={classes.container}>
        <div className={classes.column}>
          <h3 className={classes.logo}>Pogliano & Alusense</h3>
          <p className={classes.description}>
            Производство алюминиевой фольги для упаковки и универсальныых капсул для кофе. Надежность и качество из Италии.
          </p>
        </div>

        <div className={classes.column}>
          <h4 className={classes.formHeader}>Контакты</h4>
          <p>📍 Санкт-Петербург, Россия</p>
          <p>📞 +7 (812) 123-45-67</p>
          <p>📧 info@poglianofoil.ru</p>
        </div>

        <div className={classes.column}>
          <h4 className={classes.formHeader}>Оставить заявку</h4>
          <form className={classes.form}>
            <input type="text" name="name" placeholder="Ваше имя" required />
            <input type="email" name="email" placeholder="E-mail" required />
            <input type="tel" name="phone" placeholder="Телефон" required />
            <textarea name="message" placeholder="Комментарий" rows={3}></textarea>
            <button type="submit">Отправить</button>
          </form>
        </div>
      </div>
    </footer>
  );
}
