"use client";
import { useCallback, useState } from "react";
import { LocalStorageKeys } from "../utils/DataTypes/ResponsedataType";

// const useLocalState= (key:LocalStorageKeys,initial:T) =>{
//     const [state,setState] = useState()

//     // Generic typescript - same as useState
//     // local storag key -> get -> items (yes) _ itemvalue : insitail
//     // update locacal on setState

//     return [state,setState]
// }

export default function useLocalState<T>(
  key: keyof typeof LocalStorageKeys,
  initialValue: T
) {
  const storedValue = JSON.parse(
    localStorage.getItem(key) ?? JSON.stringify(initialValue)
  ) as T;
  const [state, setState] = useState<T>(storedValue);

  const setLocalState = useCallback(
    (value: T) => {
      localStorage.setItem(key, JSON.stringify(value));
      setState(value);
    },
    [key]
  );

  // useEffect(() => {
  //   localStorage.setItem(key, JSON.stringify(state));
  // }, [state, key]);

  return [state, setLocalState] as const;
}
