// "use client";
import Pagination from "@/shared/components/Pagination/Pagination";
import styles from "./page.module.css";
import dynamic from "next/dynamic";
import LoaderWrapper from "@/shared/components/LoaderWrapper/LoaderWrapper";
import { ThreeCircles } from "react-loader-spinner";
import Landing from "@/shared/components/Landing/Landing";
import { preLoadProducts } from "./page/[pageNumber]/page";

// const DynamicFeatures = dynamic(
//   () => import("../shared/components/Features/Features"),
//   {
//     ssr: false,
//     loading: () => (
//       <LoaderWrapper>
//         <ThreeCircles
//           visible={true}
//           height="100"
//           width="100"
//           color="#fff"
//           ariaLabel="Loading ..."
//         />
//       </LoaderWrapper>
//     ),
//   }
// );

preLoadProducts();

const Page = () => {
  return <Landing />;
};

export default Page;
