import React from "react";
import { productData } from "../../data/products";
import { Link } from "react-router-dom";
export const Home = () => {
  return (
    <>
      <div className="max-w-[1200px] mx-auto flex flex-wrap justify-between gap-y-4 my-10 ">
        {productData.map((item) => (
          <Link to={`/products/products-datail/${item.id}`} key={item.id}>
            <div className="w-56 h-[410px] bg-orange-100 rounded-xl p-5 transition-all ease-in duration-300 hover:bg-slate-300">
              <img className="w-52 mx-auto" src={item.img} alt="product img" />
              <p className="text-lg	text-blue-500 my-2">{item.price} so'm</p>
              <h3 className="text-sm mb-5">{item.name}</h3>
              <p className="text-sm	opacity-60	mb-5">
                {" "}
                {item.ordered} ta buyurtma
              </p>
              <div>
                <button className="py-2.5 px-5 bg-blue-500 text-white text-base	rounded-xl transition-all ease-in duration-300 hover:bg-slate-100 hover:text-blue-500">
                  Buyurtma berish
                </button>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
};
