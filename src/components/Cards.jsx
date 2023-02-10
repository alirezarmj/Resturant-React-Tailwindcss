import burger01 from "../../public/images/burger01.jpg"
import burger02 from "../../public/images/burger02.jpg";
import dessert from "../../public/images/dessert.jpg";


const Cards = () => {
  return (
    <div className="max-w-[1240px] mx-auto p-4 grid md:grid-cols-3  gap-4">
      {/* Overlay */}
      <div className="relative rounded-xl flex justify-between text-white">
        {/* Card */}
        <div className="absolute bg-black/40 rounded-xl w-full h-full  p-4 ">
          <p className="text-md md:text-md lg:text-lg font-bold">
            Sun 's Out, BOGO's Out
          </p>
          <p className="text-md md:text-md lg:text-lg ">Through 10/23</p>
          <button className="absolute  bottom-4 left-4 text-sm md:text-md lg:text-lg z-10 bg-white text-black p-1 rounded-full">
            Order Now
          </button>
        </div>
        <img
          className="w-full max-h-[160px] md:max-h-[200px] rounded-xl object-cover"
          src={burger01}
          alt="/"
        />
      </div>
      {/* Overlay */}
      <div className="relative rounded-xl flex justify-between text-white">
        {/* Card */}
        <div className="absolute bg-black/40 rounded-xl w-full h-full  p-4 ">
          <p className="text-md md:text-md lg:text-lg font-bold">
            New Restaurants
          </p>
          <p className="text-md md:text-md lg:text-lg ">  Added Daily</p>
          <button className="absolute  bottom-4 left-4 text-sm md:text-md lg:text-lg z-10 bg-white text-black p-1 rounded-full">
          Order Now
          </button>
        </div>
        <img
          className="w-full max-h-[160px] md:max-h-[200px] rounded-xl object-cover"
          src={burger02}
          alt="/"
        />
      </div>
      {/* Overlay */}
      <div className="relative rounded-xl flex justify-between text-white">
        {/* Card */}
        <div className="absolute bg-black/40 rounded-xl w-full h-full  p-4 ">
          <p className="text-md md:text-lg lg:text-2xl font-bold">
           We Deliver Desserts too
          </p>
          <p className="text-md md:text-md lg:text-lg "> Tasty Treats</p>
          <button className="absolute  bottom-4 left-4 text-sm md:text-md lg:text-lg z-10 bg-white text-black p-1 rounded-full">
          Order Now
          </button>
        </div>
        <img
          className="w-full max-h-[160px] md:max-h-[200px] rounded-xl object-cover"
          src={dessert}
          alt="/"
        />
      </div>
    </div>
  );
};

export default Cards;
