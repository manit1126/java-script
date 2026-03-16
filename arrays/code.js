// backend
const username = ['rohit,manit']

console.log(Array.isArray(username));

const newname = ["rahul","sahil","punit"]
const othername = ["manit","sumit"]

// concat

// const newarray = newname.concat(othername)
// console.log(newarray);

// spread 

const newarray = [...newname,...othername]
console.log(newarray);

// flat

const nums = [1,2,3,4,5,6[7,8,9]]

console.log(nums.flat(Infinity));

// slice => origanal array is not modified (start,end) end is not counted

const movies = ['avengers','batman','superman','spiderman','ironman']
const mymovies = movies.slice(0,2)

console.log(mymovies);

// splice => end number nahi hai (start,deletecount)

const fruits = ['apple','banana','cherry','date','fig']

const myfruits = fruits.splice(0,4)
console.log(myfruits);
console.log(fruits);
