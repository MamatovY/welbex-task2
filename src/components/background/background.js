import './background.scss';
import circle1 from './../../assets/img/redBall.png';
import circle2 from './../../assets/img/purpleBall.png';

const Background = () => {
    return (
        <div className="background">
            <div className="circle1">
                <img src={circle1} alt="" />
            </div>
            <div className="circle2">
                <img src={circle2} alt="" />
            </div>
            <div className="circle3">
                <img src={circle1} alt="" />
            </div>
            <div className="gradient1">
            </div>
            <div className="gradient2">
            </div>
        </div>

    )
}

export default Background