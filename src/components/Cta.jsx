import cta_image from '../assets/cta_image.png'

const Cta = () => {
  return (
    <div className="container mx-auto px-4 md:px-20 my-18">
      <div className="rounded-lg flex flex-col md:flex-row items-center justify-between overflow-hidden">
        
        
        <div className="w-full md:w-7/12 bg-primary md:h-[350px] flex flex-col justify-center text-left p-6 md:p-10 md:space-y-2">
          <h1 className="text-2xl md:text-3xl font-semibold text-white mt-4">Give us a shot</h1>
          <p className="text-[#E9D7FE] mt-3">
            Join over 4,000+ startups already growing with Untitled.
          </p>

          
          <div className="flex flex-col-reverse md:flex-row items-stretch md:items-center gap-3 mt-5 w-full mb-4">
            <button className="bg-white text-black py-2 px-4 rounded-lg w-full md:w-auto">
              Learn more
            </button>
            <button className="bg-secondary text-white py-2 px-4 rounded-lg w-full md:w-auto">
              Get started
            </button>
          </div>
        </div>

       
        <div className="w-full md:w-5/12">
          <img
            className="h-[250px] md:h-[350px] w-full object-cover"
            src={cta_image}
            alt="CTA Banner"
          />
        </div>
      </div>
    </div>
  )
}

export default Cta
