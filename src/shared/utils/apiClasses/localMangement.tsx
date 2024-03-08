"use client"

import { useState } from "react";

class LocalManagement {

    getItem<TData>(key:string):TData{
        return JSON.parse(localStorage.getItem(key) ?? JSON.stringify([]));
    }

    setItem<TData>(key:string,data:TData):void{
        localStorage.setItem(key,JSON.stringify(data));
    }

    removeItem(key:string){
        localStorage.removeItem(key);
    }
}
export const localManagement = new LocalManagement();

const useLocalState = (key:string,initial:string) =>{
    const [state,setState] = useState('initial')
    // Generic typescript - same as useState
    // local storag key -> get -> items (yes) _ itemvalue : insitail
    // update locacal on setState



    return [state,setState]
}
