"use server";
import Pagination from "@/shared/components/Pagination/Pagination";
import Showcase from "@/shared/components/showcase/Showcase";
import { apiProvideOptimised } from "@/shared/utils/apiClasses/optimisedProviderClass";

const getAllProducts = async (offset: number, pageNumber: number) => {
  const data = await apiProvideOptimised.getAllProductsOptimised(
    offset * pageNumber - offset,
    offset
  );
  return data;
};

export const preLoadProducts = () => {
  console.log("Preloading................");
  void getAllProducts(20, 1);
};


const Page = async ({ params }: { params: { pageNumber: string } }) => {
  const data = await getAllProducts(parseInt(params.pageNumber.split("%")[2].split("D")[1]), parseInt(params.pageNumber));

  return (
    <>
     
      <Showcase dataList={data.products} />
      <Pagination />
    </>
  );
};

export default Page;
