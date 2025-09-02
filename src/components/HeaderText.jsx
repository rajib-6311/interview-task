import play from '../assets/play.png'

const HeaderText = () => {
  return (
    <div className="mt-20">
      
      <div className="px-6 md:text-center md:space-y-8 space-y-4">
        <p className="text-[#E9D7FE]">Super. Simple. Banking.</p>
        <h1 className="text-3xl text-white md:text-5xl font-semibold md:leading-[3.8rem]">
          Banking technology <br /> that has your back.
        </h1>
        <p className="text-[#E9D7FE]">
          Simple, transparent banking. No hidden fees and free overdrafts.
        </p>
      </div>

       
      <div className="px-6 flex flex-col-reverse md:flex-row items-center justify-center gap-4 md:gap-5 mt-8">
        
        <button className="w-full md:w-auto bg-white text-black py-2 px-4 rounded-lg flex items-center justify-center gap-2 cursor-pointer">
          <img className="w-5 h-5" src={play} alt="play icon" />
          <span>Demo</span>
        </button>

        
        <button className="w-full md:w-auto text-white bg-secondary py-2 px-4 rounded-lg cursor-pointer">
          Sign Up
        </button>
      </div>
    </div>
  )
}

export default HeaderText
