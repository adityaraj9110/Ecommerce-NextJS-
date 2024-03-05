"use client";
import Button from "@/shared/components/Button/Button";
import ErrorComponent from "@/shared/components/Error/Error";
import { ButtonStyle, ErrorStyle } from "@/shared/styles/styles";
import { useRouter } from "next/navigation";
import React from "react";

const Error = ({ error }: { error: any }) => {
  const router = useRouter();
  const handleRefresh = ()=>{
    router.push("/");
  }
  return (
    <div
      style={ErrorStyle}
    >
      <ErrorComponent textMessage="Sorry For Any Inconvenience :(" cause="Cause Of Error Is" error={error} />
      <Button callBack={handleRefresh} caption="click here" styles={ButtonStyle}/>
    </div>
  );
};

export default Error;
