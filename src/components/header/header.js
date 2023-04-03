import './header.scss'
import logo from './../../assets/img/logo_welbex.svg'
import { FaTelegramPlane, FaWhatsapp } from 'react-icons/fa'
import { MdPhoneInTalk } from 'react-icons/md'

const Header = () => {
    return (
        <header className='header'>
            <div className="container">
                <div className="header__left">
                    <div className="header__left-logo">
                        <img src={logo} alt="" />
                        <div>
                            крупный интегратор CRM в Росcии и ещё 8 странах
                        </div>
                    </div>

                    <nav className="header__left-nav">
                        <div>
                            Услуги
                        </div>
                        <div>
                            Виджеты
                        </div>
                        <div>
                            Интеграции
                        </div>
                        <div>
                            Кейсы
                        </div>
                        <div className='header__left-nav-none'>
                            Сертификаты
                        </div>
                    </nav>
                </div>



                <div className="header__contacts">
                    <div>
                        +7 555 555-55-55
                    </div>
                    <FaTelegramPlane />
                    <MdPhoneInTalk />
                    <FaWhatsapp />
                </div>
            </div>
        </header>
    )
}

export default Header