"use client"

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
