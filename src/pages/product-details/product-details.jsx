import React from "react";
import { useParams } from "react-router-dom";
import { productData } from "../../data/products";
export const ProductDetails = () => {
  const object = useParams();
  const data = productData.find((item) => item.id == object.id);
  return (
    <div className="w-[1200px] mx-auto flex items-center">
      <img className="w-1/2" src={data.img} alt="productImg" />
      <div className="px-7 w-1/2">
        <h2 className="text-3xl font-semibold">{data.name}</h2>
        <p className="font-semibold text-5xl mt-8 ">{data.price} so'm / dona</p>
        <p className="mt-8 text-2xl font-semibold text-blue-500">
          {Math.floor(data.price / 3)} so'm x 3 oy
        </p>
        <p className="text-xl font-semibold mt-8">
          Sotuvda: <span className="text-blue-500">{data.ordered}</span> dona bor.
        </p>
        <button className=" font-semibold py-2.5 px-14 mt-10 mr-[40px] bg-blue-500 text-white text-base	rounded-xl transition-all ease-in duration-300 hover:bg-slate-100 hover:text-blue-500">
          Sotib olish
        </button>
        <button className=" font-semibold py-2.5 px-14 mt-10 bg-blue-500 text-white text-base	rounded-xl transition-all ease-in duration-300 hover:bg-slate-100 hover:text-blue-500">
          Bo’lib to’lash
        </button>
      </div>
    </div>
  );
};
