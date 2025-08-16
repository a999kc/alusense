import classes from './Offer.module.css'
import alusenseLogo from '../../../../shared/assets/img/alusenseLogo.png'
import poglianoLogo from '../../../../shared/assets/img/poglianoLogo.png'


const Offer = () => {
    return (
        <section className={classes.offer}>
            <div className={classes.container}>

                <h2 className={classes.offerHeader}>
                    Alusense и Pogliano: <br/> ваши партнеры в упаковке
                </h2>

                <p className={classes.offerDesc}>
                    Капсулы для кофе премиум-класса из Бельгии и качественная 
                    <br/> алюминиевая фольга для премиального сегмента
                </p>

                <div className={classes.offerCards}>

                    <div className={classes.offerCard}>
                        {/* <h3 className={classes.offerCardTitle}>
                            Капсула из мономатериала, 100% алюминий
                        </h3>
                        
                        <p className={classes.offerCardDesc}>
                            Отгрузка в течение 3 рабочих дней, 
                            персонализация без ограничений
                        </p>
                         */}

                        <img src={alusenseLogo} alt="alusense logo" className={classes.offerCardImg} />

                        <a className={classes.offerCardLink}>
                            Подробнее 
                        </a>
                    </div>

                    <div className={classes.offerCard}>
                        {/* <h3 className={classes.offerCardTitle}>
                            Индивидуальный дизайн и решения
                        </h3>
                        
                        <p className={classes.offerCardDesc}>
                            Короткие сроки изготовления заказов от 5 недель, 
                            печать до 10 цветов
                        </p> */}

                        <img src={poglianoLogo} alt="alusense logo" className={classes.offerCardImg} />

                        <a className={classes.offerCardLink}>
                            Подробнее
                        </a>
                    </div>
                </div>
            </div>
        </section>
        
    )
    
}

export default Offer;