import { searchProducts } from "@/store/productSlice";
import React, { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";

const Navbar = () => {
  const dispatch = useDispatch();
  const { search } = useSelector((state) => state.product);
  return (
    <Fragment>
      <nav className=" bg-[#2A2F4F] text-[#fff] px-[16px] py-[8px] ">
        <div className="inner flex justify-between items-center w-full max-w-[1900px] m-auto">
          <div className="left flex items-center">
            <div className="logo">
              <h1 className="text-2xl font-bold">Free Products</h1>
            </div>
          </div>
          <div className="right">
            <div className="input-wrapper flex">
              <input
                className={`w-full h-12 px-4 py-2 text-lg text-[#2A2F4F] font-inter font-bold border-2  rounded-md outline-none  focus:shadow-inner transition-all duration-300`}
                type="text"
                placeholder="Search for a Product"
                value={search}
                onChange={(e) => {
                  dispatch({
                    type: searchProducts.type,
                    payload: e.target.value,
                  });
                }}
              />
            </div>
          </div>
        </div>
      </nav>
    </Fragment>
  );
};

export default Navbar;
