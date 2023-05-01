import Link from "next/link";
import React, { Fragment } from "react";

const Product = ({ data }) => {
  return (
    <Fragment>
      <Link href={`/product/${data.id}`} className="product_wrapper rounded-[16px] bg-[#EDC6B1] pb-[8px] overflow-hidden transition-all duration-700 shadow-[0px_2px_8px_0px_#2a2f4f2a] hover:shadow-[0px_2px_8px_0px_#2a2f4f6c]">
        <div className="product_img bg-[#fff]  text-center p-[8px]">
          <img
            src={data.image}
            alt={data.title}
            className="aspect-square object-contain max-h-[250px] m-auto"
          />
        </div>
        <div className="product_info p-[8px]">
          <h1 className="text-lg font-bold text-[#2A2F4F] line-clamp-2 leading-[28px] h-[56px]" title={data.title}>{data.title}</h1>
          <p className="text-sm text-[#2A2F4F] line-clamp-4 leading-[20px] h-[80px]">{data.description}</p>
          <div className="product_price text-[#2A2F4F] font-bold text-lg">
            ${data.price}
          </div>
        </div>
      </Link>
    </Fragment>
  );
};

export default Product;
