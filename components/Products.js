import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import Product from "./Product";
// get productsfrom productSlice
const Products = () => {
  // get products from productSlice
  const { products } = useSelector((state) => state.product);
  return (
    <Fragment>
      <div className="products_wrapper grid grid-cols-5 gap-[16px]">
        {products.length === 0 && (
          <div className="col-span-5 text-center text-2xl font-bold text=[#2A2F4F]">
            No Products Found
          </div>
        )}
        {products.map((prod,index) => (
          <Product data={prod} key={index} />
        ))}
      </div>
    </Fragment>
  );
};

export default Products;
