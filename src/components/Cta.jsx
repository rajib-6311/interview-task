import cta_image from '../assets/cta_image.png'

const Cta = () => {
  return (
    <div className="container mx-auto px-4 md:px-20 my-12">
      <div className="rounded-lg flex flex-col md:flex-row items-center justify-between overflow-hidden">
        {/* Text Section */}
        <div className="w-full md:w-7/12 bg-primary h-[350px] flex flex-col items-center justify-center text-center md:text-left p-6 md:p-10">
          <h1 className="text-2xl md:text-3xl font-semibold text-white">Give us a shot</h1>
          <p className="text-white mt-3">
            Join over 4,000+ startups already growing with Untitled.
          </p>
        </div>

        {/* Image Section */}
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
