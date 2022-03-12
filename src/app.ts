export{}
// type Product={
//     id:number;
//     name:string;
// }
// const a:number = 20;
// const b:number = 30;
// const name:string = "Nguyễn Văn Duy";
// const age:number =20;
// const status:boolean=true;
// const info:Product={id:1,name:'a'};
// const stringArr:string[]=["a","b","c"];
// const numberArr:number[]=[1,2,3,4,5];
// // const objectAr:Product[]=[{id:1},{id:2}];
// function sum(numA:number,numB:number):number{
//     return numA + numB;
// }
// sum(a,b);
// console.log(age);
type Product ={
    id:number;
    name:string;
}

const product =[
    {id:1,name:'productA'},
    {id:2,name:'productB'},
]

function getProducts<t extends Product[]>(products:t):void{
    products.map(item =>`<div>${item.name}</div>`)

}
getProducts(product);

function show<t,u>(a:t,b:u):[t,u]{
    return [a,b]
}
show(1,2);
show("H","T");