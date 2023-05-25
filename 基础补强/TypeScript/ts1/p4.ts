interface a{
    name: string,
    age: number,
    id ?: string
}
const b={
    name: "b",
    age: 20,
    id :"1" 
}
const d={
    name: "d",
    age: 21,
    id :"2" 
}
const c =(eee:a)=>{
    eee.age >= 18 && console.log(eee.name + "通过了");
}
c(b);
c(d);