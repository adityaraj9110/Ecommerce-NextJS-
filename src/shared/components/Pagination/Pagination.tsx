"use client";
import { pageSelector } from "@/shared/redux/reducers/PageReducers";
import styles from "./pagination.module.css";
import { useDispatch } from "react-redux";
import {
  NEXT_PAGE,
  OFFSET,
  PREVIOUS_PAGE,
  UPDATE_PAGE,
} from "@/shared/redux/Constant";
import { useSelector } from "react-redux";
import { ChangeEvent } from "react";
import { offsetSelector } from "@/shared/redux/reducers/OffsetReducer";

export enum ButtonHeading {
  H5 = "H5",
}

export const totalPageNumber = [1, 2, 3, 4, 5];

const Pagination = () => {

  const dispatch = useDispatch();
  const currentPageNumber = useSelector(pageSelector);
  const currentOffset = useSelector(offsetSelector);

  const handleClick = (ind: number) => {
    dispatch({
      type: UPDATE_PAGE,
      payload: ind,
    });
  };

  const handleNext = () => {
    if (currentOffset * currentPageNumber < 100) {
      if (currentPageNumber > 3) {
        totalPageNumber.forEach((item, index) => {
          totalPageNumber[index] = item + 1;
        });
      }

      dispatch({
        type: NEXT_PAGE,
        payload: currentPageNumber,
      });
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
    dispatch({
      type: PREVIOUS_PAGE,
      payload: currentPageNumber,
    });
  };

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    dispatch({
      type: OFFSET,
      payload: parseInt(e.target.value),
    });
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
          value={currentOffset}
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

export default Pagination;
