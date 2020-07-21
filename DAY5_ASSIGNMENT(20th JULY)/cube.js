pos=prompt("Enter the positive number");
if(pos<0){
    prompt("Enter only positive number");
}
let arr=[];
arr.push(pos);
for (var i=0;i<arr.length;i++){
    console.log(arr[i])
    console.log(arr)
}
let cub=arr.filter(el =>{
    el%1 == 0)
    return el *** 2;
})
console.log(cub);