import './banner.scss'

const Banner = () => {
    return (
        <div className='banner container'>
            <div className="banner__left">
                <h1>
                    Зарабатывайте <br />
                    больше <br />
                    <span>
                        с WELBEX
                    </span>
                </h1>
                <div>
                    Развиваем и контролируем <br />
                    продажи за вас
                </div>
            </div>

            <div className="banner__right">
                <div>
                    Вместе с <span>БЕСПЛАТНОЙ <br />
                        КОНСУЛЬТАЦИЕЙ</span> мы дарим:
                </div>
                <div className="banner__right-info">
                    <div>
                        <h3>
                            <span>----</span> Виджеты
                        </h3>
                        <div className="banner__right-info-desc">
                            30 готовых <br />
                            решений
                        </div>
                    </div>
                    <div>
                        <h3>
                            <span>----</span> Dashboard
                        </h3>
                        <div className="banner__right-info-desc">
                            с показателями <br />
                            вашего бизнеса
                        </div>
                    </div>
                    <div>
                        <h3>
                            <span>----</span> Skype Аудит
                        </h3>
                        <div className="banner__right-info-desc">
                            отдела продаж <br />
                            и CRM системы
                        </div>
                    </div>
                    <div>
                        <h3>
                            <span>----</span> 35 дней
                        </h3>
                        <div className="banner__right-info-desc">
                            использования <br />
                            CRM
                        </div>
                    </div>

                </div>

                <div className="banner__right-button">
                    Получить консультацию
                </div>
            </div>
        </div>
    )
}

export default Banner