import './footer.scss'
import { FaTelegramPlane, FaWhatsapp } from 'react-icons/fa'
import { MdPhoneInTalk } from 'react-icons/md'

const Footer = () => {
    return (
        <footer className='footer'>
            <div className="container">


                <div className="footer__main">
                    <div className="footer__main__company">
                        <div className="footer__main-title">
                            О компании
                        </div>
                        <div className="footer__main__company-desc">
                            <div>
                                Партнёрская программа
                            </div>
                            <div>
                                Вакансии
                            </div>
                        </div>
                    </div>
                    <div className="footer__main__menu">
                        <div className="footer__main-title">
                            Меню
                        </div>
                        <div className="footer__main__menu-desc">

                            <div className='desktop'>
                                Расчёт стоимости
                            </div>
                            <div className='desktop'>
                                Кейсы
                            </div>
                            <div className='desktop'>
                                Услуги
                            </div>
                            <div className='desktop'>
                                Благодарственные письма
                            </div>
                            <div className='desktop'>
                                Виджеты
                            </div>
                            <div className='desktop'>
                                Сертификаты
                            </div>
                            <div className='desktop'>
                                Интеграции
                            </div>
                            <div className='desktop'>
                                Блог на Youtube
                            </div>
                            <div className='desktop'>
                                Наши клиенты
                            </div>
                            <div className='desktop'>
                                Вопрос / Ответ
                            </div>


                            <div className='mob'>
                                Расчёт стоимости
                            </div>
                            <div className='mob'>
                                Благодарность клиентов
                            </div>
                            <div className='mob'>
                                Услуги
                            </div>
                            <div className='mob'>
                                Кейсы
                            </div>
                            <div className='mob'>
                                Виджеты
                            </div>
                            <div className='mob'>
                                Сертификаты
                            </div>
                            <div className='mob'>
                                Интеграции
                            </div>
                            <div className='mob'>
                                Блог на Youtube
                            </div>
                            <div className='mob'>
                                Наши клиенты
                            </div>
                            <div className='mob'>
                                Вопрос / Ответ
                            </div>
                        </div>

                    </div>
                    <div className="footer__main__contacts">
                        <div className="footer__main-title">
                            Контакты
                        </div>
                        <div className="footer__main__contacts-number">
                            +7 555 555-55-55
                        </div>
                        <div className="footer__main__contacts-imgs">
                            <FaTelegramPlane />
                            <MdPhoneInTalk />
                            <FaWhatsapp />
                        </div>
                        <div>
                            Москва, Путевой проезд 3с1, к 902
                        </div>


                    </div>
                </div>
                <div className="footer__foot">
                    <div>
                        ©WELBEX 2022. Все права защищены.
                    </div>
                    <div className="footer__foot-second">
                        Политика конфиденциальности
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer