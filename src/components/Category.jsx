import { categories } from "../data/data";

const Category = () => {
  return (
    <div className="max-w-[1240px] p-4 mx-auto">
      <h1 className="text-center text-orange-600 font-bold ">
        Top Rated Menu Items
      </h1>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-2 ">
        {categories.map((categ) => (
          <div className="flex justify-between items-center px-4 py-2 bg-slate-100 rounded-lg hover:scale-105 cursor-pointer hover:duration-500 duration-500">
            <p>{categ.name}</p>
            <img className="  object-fill w-[50px] h-fit hover:duration-500 " src={categ.image} alt="/" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
