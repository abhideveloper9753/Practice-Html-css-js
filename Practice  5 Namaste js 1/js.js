// const arr = [5,1,3,4,5];
// function double (x){
//     return x * 2;
// }
// const output = arr.map((x)=>x.toString(2));
// function binary(x){
//     return x.toString(2);
// }
// const output = arr.map(binary);
// console.log(output);


// const months = ['january','february','march']
// const capital = months.map((x)=> 
//     console.log(months).
//     months.toupparcase);
// console.dir(capital);

const student =[
    { name: "Alice", age: 22 },
    { name: "Bob", age: 44 },
    { name: "Charlie", age: 55 },
    { name: "David", age: 22 }
];
// const adult = student.filter((student)=>{
//     return student.age >= 33
// }).map((student)=>{
//     return student.name;
// })
// console.log(adult)


// const numbers = [10, 21, 4, 15, 8, 33, 22, 7];

// let evenCount = 0;
// let oddCount = 0;

// numbers.forEach((num) => {
//     if (num % 2 === 0) {
//         evenCount++;
//     } else {
//         oddCount++;
//     }
// });

// console.log(`Even numbers: ${evenCount}`);
// console.log(`Odd numbers: ${oddCount}`);

// const arr =[3,5,6,7,8]

// const output = arr.reduce(function(acc,curr){
//     acc = acc + curr;
//     return acc;
// }, 0);

// const output = arr.reduce(function(max,curr){
//     if(curr>max){
//         max = curr;
//     }
//     return max;
// }, 0);
// console.log(output)



// const index = arr.indexOf(6);

// if (index !== -1) {
//     console.log(`6 is found in the array at index ${index}`);
// } else {
//     console.log('6 is not found in the array');
// }




const output = student.reduce(function(acc,cur){
    if(acc[cur.age]){
        acc[cur.age] = ++acc[cur.age];
    }else{
        acc[cur.age] = 1;
    }
    return acc;
}, {});
console.log(output);