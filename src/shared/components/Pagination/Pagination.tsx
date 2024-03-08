"use client";
import styles from "./pagination.module.css";
import { ChangeEvent } from "react";
import { usePathname, useRouter } from "next/navigation";
import { Provider, useDispatch } from "react-redux";
import { LOADING } from "@/shared/redux/Constant";
import { store } from "@/shared/redux/store";
import useLocalState from "@/shared/hooks/useLocalState";

export enum ButtonHeading {
  H5 = "H5",
}

export const totalPageNumber = [1, 2, 3, 4, 5];

interface PaginationProps {
  findOffset: (offset: number) => number;
}

const Pagination = () => {
  const router = useRouter();
  const path = usePathname();
  const dispatch = useDispatch();
  const [offset, setOffset] = useLocalState("TESTING_OFFSET", 20);

  const currentPageNumber = parseInt(path ? path.split("/")[2] : "1");

  const handleClick = (ind: number) => {
    dispatch({
      type: LOADING,
    });

    router.push(`${ind}&limit=${offset}`);
  };

  const handleNext = () => {
    if (offset && offset * currentPageNumber < 100) {
      if (currentPageNumber > 3) {
        totalPageNumber.forEach((item, index) => {
          totalPageNumber[index] = item + 1;
        });
      }
      router.push(`${currentPageNumber + 1}`);
    } else {
      alert("No products are there on next page");
    }
  };

  const handlePrev = () => {
    if (
      currentPageNumber > 5 ||
      totalPageNumber[totalPageNumber.length - 1] > totalPageNumber.length
    ) {
      totalPageNumber.forEach((item, index) => {
        totalPageNumber[index] = item - 1;
      });

      totalPageNumber.forEach((item) => console.log(item));
    }

    router.push(`${currentPageNumber - 1}`);
  };

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setOffset && setOffset(parseInt(e.target.value));
    router.push(`${currentPageNumber}&limit=${e.target.value}`);
  };

  return (
    <div className={styles.container}>
      <div className={styles.pagination}>
        <h6 onClick={handlePrev}>prev</h6>
        <div className={styles.page}>
          {totalPageNumber.map((page) => (
            <h5
              key={page}
              onClick={() => handleClick(page)}
              style={{
                border: currentPageNumber === page ? "1px solid #fff" : "",
                padding: "5px",
              }}
            >
              {page}
            </h5>
          ))}
        </div>
        <h6 onClick={handleNext}>next</h6>

        <select
          className={styles.offset}
          onChange={(e) => handleChange(e)}
          value={offset}
        >
          <option value="20" style={{ color: "#000" }}>
            20
          </option>
          <option value="40" style={{ color: "#000" }}>
            40
          </option>
          <option value="60" style={{ color: "#000" }}>
            60
          </option>
          <option value="80" style={{ color: "#000" }}>
            80
          </option>
          <option value="100" style={{ color: "#000" }}>
            100
          </option>
        </select>
      </div>
    </div>
  );
};

const PaginationWithProvider = () => (
  <Provider store={store}>
    <Pagination />
  </Provider>
);

export default PaginationWithProvider;
