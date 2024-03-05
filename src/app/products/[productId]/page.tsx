"use client";
import { useEffect, useState } from "react";
import "./pageDetails.css";
import { DataType } from "@/shared/utils/DataTypes/ResponsedataType";
import Image from "next/image";
import { apiProvider } from "@/shared/utils/apiClasses/apiProvider";
import { getDataById } from "@/app/_serverSideFetching/apiCalls";
import { ThreeCircles } from "react-loader-spinner";
import ReactStars from "react-stars";

type PropType = {
  productId: string;
};

const Page = ({ params }: { params: PropType }) => {
  const [id, setId] = useState<string>(params.productId);
  const [data, setData] = useState<DataType>();

  const [thumbnailofProduct, setThumbnailOfProduct] = useState<
    string | undefined
  >(data?.thumbnail);

  const fetchData = async (id: string) => {
    const responseData = await getDataById(id);
    console.log("responseData", responseData);
    setData(responseData);
    setThumbnailOfProduct(responseData.thumbnail);
  };

  const handleClick = (e: React.MouseEvent<HTMLImageElement, MouseEvent>) => {
    setThumbnailOfProduct((e.target as HTMLImageElement).src);
  };

  // const handleDelete = () => {
  //   alert("item Deleted");
  //   setTimeout(() => {
  //     apiProvider.deleteProductById(id);
  //     navigate("/");
  //   }, 800);
  // };

  useEffect(() => {
    setId(params.productId);
    fetchData(id);
  }, []);

  return (
    <div className="showCase">
      <div className="mainDiv">
        {thumbnailofProduct ? (
          <Image
            src={thumbnailofProduct}
            alt="product image"
            width={670}
            height={400}
            priority
            className="main-thumbnail"
          />
        ) : (
          <ThreeCircles
            visible={true}
            height="100"
            width="100"
            color="#fff"
            ariaLabel="Loading ..."
            wrapperClass="loader-style"
          />
        )}

        <div className="allImages">
          {data?.images.map((imageUrl) => (
            <Image
              key={imageUrl}
              src={imageUrl}
              alt=""
              onClick={(e) => handleClick(e)}
              width={70}
              height={80}
            />
          ))}
        </div>
      </div>

      <div className="rightDiv">
        <div className="productInfo">
          <h3 className="productTitle">{data?.title}</h3>
          <i className="fa-solid fa-trash deleteBtn"></i>
          <div className="logoContainer">
            <span className="rating">
              <ReactStars
                count={5}
                size={24}
                edit={false}
                value={data?.rating}
                color2={"#ffd700"}
              />
            </span>
          </div>

          <h3 className="price">
            $ {data?.price}.00
            <span className="discount">{data?.discountPercentage}% off</span>
          </h3>

          <h3 className="stock">stock left: {data?.stock} </h3>
        </div>

        <div className="discriptionBox">
          <h4 className="productDescription">
            {data?.description}Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Eligendi iste mollitia harum maiores id sit?
            Corporis id eaque minima dolores {data?.description} aliquam beatae
            dicta consectetur tempore vel quas earum reiciendis mollitia nemo
            quisquam itaque inventore, tenetur commodi error odio non asperiores
          </h4>
        </div>

        <div className="actionButtons">
          <button>Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default Page;
