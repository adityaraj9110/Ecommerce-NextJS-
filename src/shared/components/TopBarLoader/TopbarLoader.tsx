"use client";
import { Provider, useSelector } from "react-redux";
import styles from "./topBarLoader.module.css";
import { loaderSelector } from "@/shared/redux/reducers/LoaderReducer";
import { useEffect, useState } from "react";
import { store } from "@/shared/redux/store";

const TopbarLoader = () => {
  const loader = useSelector(loaderSelector);
  const [widthOfLoader, setWidthOfLoader] = useState(0);

  const setWidth = () => {
    for (let i = 1; i <= 100; i += 12) {
      if (loader === true) {
        setWidthOfLoader(i);
      }
      if (loader === false) {
        setWidthOfLoader(0);
        break;
      }
    }
  };

  useEffect(() => {
    setWidth();
  }, [loader]);

  return (
    <div
      className={styles.topLoader}
      style={{ width: `${widthOfLoader}%` }}
    ></div>
  );
};

const TopbarLoaderWithReduxProvider = () => (
  <Provider store={store}>
    <TopbarLoader />
  </Provider>
);

export default TopbarLoaderWithReduxProvider;

// export default TopbarLoader;
