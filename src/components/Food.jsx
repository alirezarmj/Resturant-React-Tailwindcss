import { useState } from "react";
import {data} from "../data/data";

const Food = () => {
  const [foods, setFoods] = useState(data);

// Filter Type
const filterType=(category)=>{
  setFoods(
    data.filter(food=>food.category===category)
  )
}

// Filter Price
const filterPrice=(price)=>{
  setFoods(
    data.filter(food=>food.price===price)
  )
}
  return (
    <div className="max-w-[1240px] mx-auto p-4">
      <h1 className="text-center text-orange-600 font-bold">
        Top Rated Menu Items
      </h1>
      <div className="flex flex-col md:flex-row md:justify-between gap-4 md:gap-8">
        <div>
          <h3>Filter Type</h3>
          <div className="flex justify-between gap-4">
            <button onClick={()=>setFoods(data)} className="px-3  text-orange-500 bg-white hover:text-white hover:bg-orange-600 border border-slate-300 rounded-full duration-500 hover:duration-500">
              All
            </button>
            <button onClick={()=>filterType("burger")} className="px-3  text-orange-500 bg-white hover:text-white hover:bg-orange-600 border border-slate-300 rounded-full duration-500 hover:duration-500">
              Burgers
            </button>
            <button onClick={()=>filterType("pizza")} className="px-3  text-orange-500 bg-white hover:text-white hover:bg-orange-600 border border-slate-300 rounded-full duration-500 hover:duration-500">
              Pizza
            </button>
            <button onClick={()=>filterType("salad")} className="px-3  text-orange-500 bg-white hover:text-white hover:bg-orange-600 border border-slate-300 rounded-full duration-500 hover:duration-500">
              Salad
            </button>
            <button onClick={()=>filterType("chicken")} className="px-3  text-orange-500 bg-white hover:text-white hover:bg-orange-600 border border-slate-300 rounded-full duration-500 hover:duration-500">
              Chicken
            </button>
          </div>
        </div>
        <div>
          <h3>Filter Price</h3>
          <div className="flex justify-between gap-4">
            <button onClick={()=>{filterPrice("$")}} className="px-3  text-orange-500 bg-white hover:text-white hover:bg-orange-600 border border-slate-300 rounded-full duration-500 hover:duration-500">
              $
            </button>
            <button onClick={()=>{filterPrice("$$")}} className="px-3  text-orange-500 bg-white hover:text-white hover:bg-orange-600 border border-slate-300 rounded-full duration-500 hover:duration-500">
              $$
            </button>
            <button onClick={()=>{filterPrice("$$$")}} className="px-3  text-orange-500 bg-white hover:text-white hover:bg-orange-600 border border-slate-300 rounded-full duration-500 hover:duration-500">
              $$$
            </button>
            <button onClick={()=>{filterPrice("$$$$")}} className="px-3  text-orange-500 bg-white hover:text-white hover:bg-orange-600 border border-slate-300 rounded-full duration-500 hover:duration-500">
              $$$$
            </button>
          </div>
        </div>
      </div>
      <div className="w-full grid grid-cols-2 lg:grid-cols-4 gap-2 py-4 rounded-lg">
        {foods.map((food) => (
          <div className=" rounded-xl hover:scale-105 hover:duration-300 duration-300 shadow-xl cursor-pointer">
            <img
              className="w-full h-[170px] lg:h-[200px] object-cover rounded-lg"
              src={food.image}
              alt={food.category}
            />
            <div className="flex justify-between p-2">
              <p className="text-sm font-bold">{food.name}</p>
              <p className="text-sm font-bold text-orange-500">{food.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Food;
