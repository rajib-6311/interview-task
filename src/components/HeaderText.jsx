
import play from '../assets/play.png'
const HeaderText = () => {
    return (
        <div className="mt-20">
            <div className="text-center space-y-8">
                <p className="text-[#E9D7FE]">Super. Simple. Banking.</p>
                <h1 className="text-white text-5xl font-semibold leading-[3.8rem]">Banking technology <br /> that has your back.</h1>
                <p className=" text-[#E9D7FE] ">Simple, transparent banking. No hidden fees and free overdrafts.</p>
            </div>
            <div className="flex items-center justify-center gap-5 mt-8">
                <button className="bg-white text-black py-2 px-3 rounded-lg flex items-center gap-2"><img className='w-5 h-5' src={play} alt="" /> Demo</button>
                <button className="text-white bg-secondary py-2 px-4 rounded-lg">Sign Up</button>
            </div>
        </div>
    );
};

export default HeaderText;