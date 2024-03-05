"use client";
import LoaderWrapper from "@/shared/components/LoaderWrapper/LoaderWrapper";
import styles from "./cart.module.css";
import ProductCard from "@/shared/components/ProductCard/ProductCard";
import { cartSelector } from "@/shared/redux/reducers/CartReducers";
import { store } from "@/shared/redux/store";
import { DataType } from "@/shared/utils/DataTypes/ResponsedataType"
import React, { useEffect, useState } from "react";
import { Provider, useSelector } from "react-redux";
import { ThreeCircles } from "react-loader-spinner";
import empty from "../../assests/empty.png";
import Image from "next/image";
import { getAllDataByIds } from "../_serverSideFetching/apiCalls";

const Cart = () => {
  const cartItems: string[] = useSelector(cartSelector);

  const [dataList, setDataList] = useState<DataType[]>();

  const fetchData = async () => {
    const data = await getAllDataByIds(cartItems);
    setDataList(data);
  };

  useEffect(() => {
    fetchData();
  }, []);



  const removeItemFromCart = (id: number) => {
    setDataList((prevData: DataType[] | undefined) => {
      if (!prevData) return prevData;
      return prevData.filter((item) => item.id !== id);
    });
  };

  const totalAmount = dataList?.reduce((acc, curr) => {
    return acc + curr?.price;
  }, 0);

  const renderCartContent = () => {
    if (dataList === undefined) {
      return (
        <LoaderWrapper>
          <ThreeCircles
            visible={true}
            height="100"
            width="100"
            color="#fff"
            ariaLabel="Loading ..."
          />
        </LoaderWrapper>
      );
    } else if (dataList.length > 0) {
      return dataList.map((item: DataType) => (
        <ProductCard key={item.id} data={item} setData={removeItemFromCart} />
      ));
    } else {
      return <Image src={empty} alt="empty" width={400} height={400} />;
    }
  };

  return (
    <div className={styles.cartContent}>
      {renderCartContent()}
      {dataList && dataList?.length > 0 && (
        <div className={styles["price-section"]}>
          <h3 className={styles["price-title"]}>Price Details</h3>
          <div className={styles["price-info"]}>
            <div className={styles.price}>
              <h3>Price ({dataList?.length} items)</h3>
              <span>$ {totalAmount}</span>
            </div>
            <div className={styles.delivery}>
              <h3>Delivery Charges</h3>
              <span style={{ color: "#388E3C" }}> Free</span>
            </div>
            <div className={styles.totalAmount}>
              <h3>Total Amount</h3>
              <span>$ {totalAmount}</span>
            </div>
          </div>
          <button className={styles["checkout-btn"]}>Checkout</button>
        </div>
      )}
    </div>
  );
};

const CartWithReduxProvider = () => (
  <Provider store={store}>
    <Cart />
  </Provider>
);

export default CartWithReduxProvider;
