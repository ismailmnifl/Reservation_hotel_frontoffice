import './header.css';
import headerImage from '../../addOns/images/headerImg.jpg';
import hotelHeader from '../../addOns/images/hotelHeader.jpg';



export default function Header() {
    return (

        <div className="header">
            <div className="headerTitles">
                <span className="headerTitleSm">Brendan Eich</span>
                <span className="headerTitleLg">Hotel</span>
            </div>
            <img className='headerImg' src={hotelHeader} alt="" />
        </div>
    );
}
