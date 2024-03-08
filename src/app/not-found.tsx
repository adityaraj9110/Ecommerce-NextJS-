"use client";
import Button from "@/shared/components/Button/Button";
import { ButtonStyle } from "@/shared/styles/styles";
import Image from "next/image";
import { useRouter } from "next/navigation";
import notFound from "../assests/notFound.png";

const NotFound = () => {
  const router = useRouter();

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        gap: "20px",
        alignItems: "center",
      }}
    >
      <Image src={notFound} alt="not Found" width={400} height={300} />
      <h1>Oops Page Not Found !!!</h1>
      <Button
        callBack={() => router.push("/")}
        caption="click here"
        styles={ButtonStyle}
      />
    </div>
  );
};

export default NotFound;
