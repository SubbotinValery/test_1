import React from "react";
import { useGetProductQuery } from "../Store/product/product.api";

const ShopItem = () => {
  const { isError, isLoading, data } = useGetProductQuery(1);
  return <div></div>;
};
export default ShopItem;
