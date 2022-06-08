var arr = [4,5,734,43,45,8];

// Your code here, use the push function and the random function.
const aleatorio = arr[Math.floor(Math.random() * arr.length)];

arr.push(aleatorio);
console.log(arr);