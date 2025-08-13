"use client";
import { useRouter } from "next/navigation";
import React from "react";

function Books({ books }: any) {
  const router = useRouter();
  const handleDetails = (slug: string) => {
    console.log("Book slug:", slug);
    router.push(`/products/${slug}`);
  };
  return (
    <div>
      <h4>Popular Books</h4>
      <div className="justify-content-center d-flex flex-wrap flex-col">
        {books.map((book: any) => (
          <div
            key={book.id}
            className="d-flex flex-column align-items-center p-4 border rounded m-2 w-25 cursor-pointer"
            onClick={() => handleDetails(book.slug)}
          >
            <h4>{book.name}</h4>
            <p>Price: {book.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Books;
