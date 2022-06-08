var arr = [4,5,734,43,45,8,6,2,10,12,14,16,18,20];

//*****************
// Your code here
// you need to loop 10 times, for example, using a for loop
for(let r=0; r<arr.length; r++)
{
    var b= Math.floor(Math.random()*arr[r]);
}
arr.push(b);
console.log(arr);
//*****************

