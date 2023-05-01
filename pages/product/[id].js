import { setSingleProduct } from "@/store/productSlice";
import { useRouter } from "next/router";
import React, { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Rate } from "antd";

const SingleProduct = () => {
  const router = useRouter();
  const { product, loading } = useSelector((state) => state.product);
  const { id } = router.query;
  const dispatch = useDispatch();
  const getSingleProduct = async () => {
    const res = await fetch(`https://fakestoreapi.com/products/${id}`).then(
      (res) => {
        console.log(res);
        res.json();
      }
    );
    console.log(res);
    dispatch({ type: setSingleProduct.type, payload: res });
    dispatch({ type: "product/setLoading", payload: false });
  };

  useEffect(() => {
    // setLoading start here
    dispatch({ type: "product/setLoading", payload: true });
    getSingleProduct();
  }, []);
  if (loading) return <h1>Loading...</h1>;

  return (
    <Fragment>
      <div className="single_product_wrapper">
        <div className="single_product_inner flex flex-col md:flex-row items-center justify-center md:justify-between">
          <div className="product_img bg-[#fff]  text-center p-[8px]">
            <img
              src={product?.image}
              alt={product?.title}
              className="aspect-square object-contain max-h-[250px] m-auto"
            />
          </div>
          <div className="product_info p-[8px]">
            <h1
              className="text-lg font-bold text-[#2A2F4F] line-clamp-2 leading-[28px] h-[56px]"
              title={product?.title}
            >
              {product?.title}
            </h1>
            <p className="text-sm text-[#2A2F4F] line-clamp-4 leading-[20px] h-[80px]">
              {product?.description}
            </p>
            <div className="product_price text-[#2A2F4F] font-bold text-lg">
              ${product?.price}
            </div>
            <div className="product_rating">
              <div className="flex items-center">
                <div className="total_rating">
                  Total Rating: {product?.rating?.count}
                </div>
                <div className="rating_star">
                  <Rate disabled defaultValue={product?.rating?.rate} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default SingleProduct;
