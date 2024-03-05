"use client";
import Pagination from "@/shared/components/Pagination/Pagination";
import styles from "./page.module.css";
import { Provider } from "react-redux";
import { store } from "@/shared/redux/store";
import dynamic from "next/dynamic";
import LoaderWrapper from "@/shared/components/LoaderWrapper/LoaderWrapper";
import { ThreeCircles } from "react-loader-spinner";

const DynamicFeatures = dynamic(
  () => import("../shared/components/Features/Features"),
  {
    ssr: false,
    loading: () => (
      <LoaderWrapper>
        <ThreeCircles
          visible={true}
          height="100"
          width="100"
          color="#fff"
          ariaLabel="Loading ..."
        />
      </LoaderWrapper>
    ),
  }
);



const Page = () => {
  return (
    <Provider store={store}>
      <div className={styles.container}>
        <DynamicFeatures />
        <Pagination />
      </div>
    </Provider>
  );
};

export default Page;
