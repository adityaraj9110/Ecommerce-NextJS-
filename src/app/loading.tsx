"use client";
import LoaderWrapper from "@/shared/components/LoaderWrapper/LoaderWrapper";
import { ThreeCircles } from "react-loader-spinner";

const loading = () => {
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
};

export default loading;
