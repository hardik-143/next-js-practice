import Image from "next/image";
import { Inter } from "next/font/google";
import { Fragment, useEffect, useState } from "react";
import axios from "axios";

const inter = Inter({ subsets: ["latin"] });
import { FaSearch } from "react-icons/fa";
import Products from "@/components/Products";
export default function Home() {
  const [search, setSearch] = useState("iron");

  const handleSearch = () => {
    let url = `https://fakestoreapi.com/carts`;
    axios
      .get(url)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {}, []);
  return (
    <Fragment>
      <Products />
    </Fragment>
  );
}
