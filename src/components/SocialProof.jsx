import s1 from '../assets/s1.png'
import s2 from '../assets/s2.png'
import s3 from '../assets/s3.png'
import s4 from '../assets/s4.png'
import s5 from '../assets/s5.png'
import s6 from '../assets/s6.png'

const SocialProof = () => {
    return (
        <div className='mt-12'>
            <p className="text-[#475467] text-center">Join 4,000+ companies already growing</p>
            <div className='grid grid-cols-2 md:flex items-center justify-center md:gap-12 mt-8'>
                <img className='w-30 ' src={s1} alt="" />
                <img className='w-30 ' src={s2} alt="" />
                <img className='w-30 ' src={s3} alt="" />
                <img className='w-30 ' src={s4} alt="" />
                <img className='w-30 ' src={s5} alt="" />
                <img className='w-30 ' src={s6} alt="" />
            </div>
        </div>
    );
};

export default SocialProof;