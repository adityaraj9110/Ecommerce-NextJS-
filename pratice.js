// const required = ["rice","gas"];

// const friedRice = new Promise((resolve,reject)=>{
//     if(required.includes("salt")){
//         resolve("All Ready Done")
//     }else{
//         reject("Not done")
//     }
// })

// friedRice.then((res)=>{
//     console.log(res)
// }).catch((err)=>console.log(new Error(err)));

// // but this ---------------------------------------------------------------->

// const promise1 = Promise.resolve(3);
// const promise2 = 42;
// const promise3 = new Promise((resolve, reject) => {
//   setTimeout(resolve, 100, 'foo');
// });

// Promise.all([promise1, promise2, promise3]).then((values) => {
//   console.log(values);
// });

// call,apply,breakInside:

function createObj(...args) {
  console.log(this.name, `he has ${args}`);
}

const obj1 = { name: "Aditya" };
const obj2 = { name: "Keshav" };

createObj.call(obj1);
createObj.apply(obj2, ["cricket", "hockey"]);
