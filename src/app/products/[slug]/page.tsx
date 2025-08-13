"use client";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { apiCall } from "@/app/lib/axios-client";
import { Methods } from "@/app/lib/const";

const ProductDetails = () => {
  const [product, setProduct] = useState(null);
  const params = useParams<{ slug: string }>();
  const slug = params.slug;
  console.log("Product Details for slug:", slug);

  const getProductDetails = async () => {
    try {
      // const response = await fetch(`product/detail/${slug}`);
      const res = await apiCall(Methods.GET, `product/detail/${slug}`);
      console.log("Response:", res);
      // if (!response.ok) {
      //   throw new Error("Network response was not ok");
      // }
      // console.log("Response:", response);

      // const data = await response.json();
      // setProduct(data);
    } catch (error) {
      console.error("Error fetching product details:", error);
    }
  };

  useEffect(() => {
    getProductDetails();
  }, []);

  return <div>ProductDetails for slug: {slug}</div>;
};

export default ProductDetails;
