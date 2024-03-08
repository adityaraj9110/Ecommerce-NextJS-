"use client";
// import { useEffect, useState } from "react";
import ProductCard from "../ProductCard/ProductCard";
import styles from "./showcase.module.css";
import {
  ApiResponseType,
  DataType,
} from "@/shared/utils/DataTypes/ResponsedataType";
import LoaderWrapper from "../LoaderWrapper/LoaderWrapper";
import { ThreeCircles } from "react-loader-spinner";
import { getData } from "@/app/_serverSideFetching/apiCalls";
// import { useDispatch } from "react-redux";
import { ISLOADING, LOADING } from "@/shared/redux/Constant";
import { Provider } from "react-redux";
import { store } from "@/shared/redux/store";
import { usePathname } from "next/navigation";
// import useLocalState from "@/shared/hooks/useLocalState";

const Showcase = ({ dataList }: { dataList: DataType[] }) => {
  const path = usePathname();
  console.log(path);
  // console.log(dataList);
  // const [offset, setOffset] = useLocalState("TESTING_OFFSET", 20);
  // const [listOfData, setListOfData] = useState<DataType[]>([]);
  // const [loading, setLoading] = useState<boolean>(false);
  // const dispatch = useDispatch();

  // const fetchData = async (): Promise<void> => {
  //   setLoading(true);
  //   dispatch({
  //     type: LOADING,
  //   });

  //   try {
  //     const dataFromServerv: ApiResponseType<DataType> = await getData(
  //       offset * currentpageNumber - offset,
  //       offset
  //     );

  //     setListOfData(dataFromServerv.products);
  //   } catch (error: any) {
  //     return error.message;
  //   } finally {
  //     setLoading(false);
  //     dispatch({
  //       type: ISLOADING,
  //     });
  //   }
  // };

  // useEffect(() => {
  //   fetchData();
  // }, [currentpageNumber, offset]);

  return (
    <Provider store={store}>
      <div className={styles.container}>
        {/* {loading ? (
        <LoaderWrapper>
          <ThreeCircles
            visible={true}
            height="100"
            width="100"
            color="#fff"
            ariaLabel="Loading ..."
          />
        </LoaderWrapper>
      ) : ( */}

        {dataList?.map((data) => (
          <ProductCard key={data.id} data={data} />
        ))}

        {/* ) */}
        {/* } */}
      </div>
    </Provider>
  );
};

export default Showcase;
