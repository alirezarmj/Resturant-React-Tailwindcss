import burger0 from "../../public/images/burger0.jpg" 
const Hero = () => {
  return (
    <div className="max-w-[1240px] mx-auto p-4">
      <div className="w-full max-h-[500px] relative  ">
        <div className="absolute w-full h-full max-h-[500px] flex flex-col justify-center text-white  bg-black/40 px-4" >
            <h1 className='text-3xl md:text-4xl lg:text-5xl'>The <span className=' text-orange-500'>Best</span></h1>
            <h1 className='text-3xl md:text-4xl lg:text-5xl'><span className=' text-orange-500'>Foods </span>Delivered</h1>
        </div>
        <img className='w-full h-full object-cover  max-h-[500px]' src={burger0} alt="/ " />
      </div>
    </div>
  );
};

export default Hero;
