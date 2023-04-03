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
                        <div>
                            Партнёрская программа
                        </div>
                        <div>
                            Вакансии
                        </div>
                    </div>
                    <div className="footer__main__menu">
                        <div className="footer__main-title">
                            Меню
                        </div>
                        <div className="footer__main__menu-desc">

                            <div>
                                Расчёт стоимости
                            </div>
                            <div>
                                Кейсы
                            </div>
                            <div>
                                Услуги
                            </div>
                            <div>
                                Благодарственные письма
                            </div>
                            <div>
                                Виджеты
                            </div>
                            <div>
                                Сертификаты
                            </div>
                            <div>
                                Интеграции
                            </div>
                            <div>
                                Блог на Youtube
                            </div>
                            <div>
                                Наши клиенты
                            </div>
                            <div>
                                Вопрос / Ответ
                            </div>
                        </div>

                    </div>
                    <div className="footer__main__contacts">
                        <div className="footer__main-title">
                            Контакты
                        </div>
                        <div>
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
                        ©WELBEX 2022. Все права защищены. <br />
                        Политика конфиденциальности
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer