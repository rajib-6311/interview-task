import card1 from '../assets/card1.png'
import card2 from '../assets/card2.png'
import card3 from '../assets/card3.png'
import card4 from '../assets/card4.png'
import card5 from '../assets/card5.png'
import CardsMobile from './CardsMobile'

const Cards = () => {
    return (
        <>
        <div className="hidden md:block md:container md:mx-auto md:px-50">
            <div className=''>
               <img className='md:w-[485px] absolute z-30 bottom-0' src={card1} alt="" />
               <img className='md:w-[580px] absolute z-35 md:pl-30 bottom-0' src={card2} alt="" /> 
               <img className='md:w-[660px] absolute z-40 md:pl-[360px] bottom-0' src={card3} alt="" /> 
               <img className='md:w-[910px] absolute z-45 md:pl-[430px] bottom-0' src={card4} alt="" /> 
               <img className='md:w-[1050px] absolute z-50 md:pl-[510px] bottom-0' src={card5} alt="" /> 
            </div>
        </div>
        <CardsMobile/>
        </>
    );
};

export default Cards;



