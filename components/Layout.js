import React, { Fragment, useEffect } from "react";
import Navbar from "./Navbar";
import { useDispatch } from "react-redux";
import { setCategories, setAllProducts } from "@/store/productSlice";

const Layout = ({ children }) => {
  const dispatch = useDispatch();
  const getCategoties = async () => {
    const res = await fetch(
      "https://fakestoreapi.com/products/categories"
    ).then((res) => res.json());
    console.log(res);
    dispatch({ type: setCategories.type, payload: res });
  };
  const getAllProducts = async () => {
    const res = await fetch("https://fakestoreapi.com/products").then((res) =>
      res.json()
    );
    console.log(res);
    dispatch({ type: setAllProducts.type, payload: res });
  };
  useEffect(() => {
    getCategoties();
    getAllProducts();
  }, []);
  return (
    <Fragment>
      <Navbar />

      <main
        className={`flex min-h-screen flex-col items-center justify-start p-[16px] bg-[#FFEBEB] `}
      >
        <div className="w-full max-w-[1900px]">{children}</div>
      </main>
    </Fragment>
  );
};

export default Layout;
