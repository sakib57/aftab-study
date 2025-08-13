"use client";
import React, { useEffect, useState } from "react";
import Slider from "./Slider";
import Categories from "./Categories";
import Books from "./Books";
import Tutorial from "./Tutorial";
import Quotes from "./Quotes";
import { apiCall } from "@/app/lib/axios-client";
import { Methods } from "@/app/lib/const";

const Root = () => {
  const [categories, setCategories] = useState([]);
  const [books, setBooks] = useState([]);

  const init = async () => {
    try {
      const [categoriesData, booksData] = await Promise.all([
        apiCall(Methods.GET, "category"),
        apiCall(Methods.GET, "product"),
      ]);
      setCategories(categoriesData.data);
      setBooks(booksData.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  useEffect(() => {
    init();
  }, []);

  return (
    <div>
      <Slider />
      <Categories />
      <Books books={books} />
      <Tutorial />
      <Quotes />
    </div>
  );
};

export default Root;
