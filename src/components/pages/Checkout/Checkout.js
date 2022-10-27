import React from "react";
import { useLoaderData } from "react-router-dom";

const Checkout = () => {
  const checkouts = useLoaderData();
  console.log(checkouts);

  return (
    <div>
      {checkouts.map((checkout) => (
        <div className="card w-96 bg-base-100 shadow-xl my-5">
          <div className="card-body">
            <p>{checkout.title}</p>
            <h2 className="card-title">id: {checkout._id}</h2>
            <p>price: $20</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Checkout;
