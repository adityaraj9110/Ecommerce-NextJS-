"use client";
import { useEffect, useState } from "react";
import ProductCard from "../ProductCard/ProductCard";
import styles from "./features.module.css";
import {
  ApiResponseType,
  DataType,
} from "@/shared/utils/DataTypes/ResponsedataType";
import LoaderWrapper from "../LoaderWrapper/LoaderWrapper";
import { ThreeCircles } from "react-loader-spinner";
import { useSelector } from "react-redux";
import { pageSelector } from "@/shared/redux/reducers/PageReducers";
import { offsetSelector } from "@/shared/redux/reducers/OffsetReducer";
import { getData } from "@/app/_serverSideFetching/apiCalls";

const Features = () => {
  const [listOfData, setListOfData] = useState<DataType[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const currentpageNumber = useSelector(pageSelector);
  const offset = useSelector(offsetSelector);

  console.log("pathName", offset);

  const fetchData = async (): Promise<void> => {
    setLoading(true);
    try {
      const dataFromServerv: ApiResponseType<DataType> = await getData(
        offset * currentpageNumber - offset,
        offset
      );
      

      setListOfData(dataFromServerv.products);
    } catch (error: any) {
      return error.message;
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [currentpageNumber, offset]);

  return (
    <div className={styles.container}>
      {listOfData === undefined || listOfData.length === 0 || loading ? (
        <LoaderWrapper>
          <ThreeCircles
            visible={true}
            height="100"
            width="100"
            color="#fff"
            ariaLabel="Loading ..."
          />
        </LoaderWrapper>
      ) : (
        listOfData.map((data) => <ProductCard key={data.id} data={data} />)
      )}
    </div>
  );
};

export default Features;
