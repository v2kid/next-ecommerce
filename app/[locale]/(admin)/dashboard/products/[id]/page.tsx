import React from "react";
import EditProduct from "../components/editproduct";

const SingleProductPage = async ({ params }) => {
  const  {id}  = params;
  return (
    <EditProduct id={id}/>
  );
};

export default SingleProductPage;
