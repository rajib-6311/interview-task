import card1 from '../assets/card1.png'
import card2 from '../assets/card2.png'
import card3 from '../assets/card3.png'
import card4 from '../assets/card4.png'
import card5 from '../assets/card5.png'


const CardsMobile = () => {
    return (
        <div className="md:hidden">
            <div className='relative w-full h-[300px] overflow-hidden'>
            <img className='w-[315px] -left-20 absolute z-30 bottom-0' src={card1} alt="" />
            <img className='w-[300px] -left-3 absolute z-35 bottom-0' src={card2} alt="" />
            <img className='w-[340px] absolute z-40 pl-35 bottom-0' src={card3}
             alt="" />
            <img className='w-[1040px] left-25 absolute z-40 pl-20 bottom-0 ' src={card4} 
            alt="" />
            <img className='w-[1050px] left-38 absolute z-50 pl-20 bottom-0 ' src={card5} alt="" />
            </div>
        </div>
    );
};

export default CardsMobile;