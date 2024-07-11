import React from "react";
import { Link, Navigate, Outlet } from "react-router-dom";
export const UserLoyaut = () => {
//   let user = null;
//   if (!user) {
//     return <Navigate to="/" />;
//   }
  return (
    <>
      <div className="flex">
        <div className=" bg-slate-700 h-96 flex-col gap-4 flex p-6 text-xl font-semibold text-white w-56">
          <Link to={"/profile"}>Profile</Link>
          <Link to={"/profile/order-list"}>Order list</Link>
          <Link to={"/profile/change-account"}>Change account</Link>
        </div>
        <div>
          <Outlet />
        </div>
      </div>
    </>
  );
};
