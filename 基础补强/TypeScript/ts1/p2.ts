class Person{}
const p: Person = new Person()

const xjj:()=>string=()=>{return 'ddd'};
    
const xjj2:{
    name: string,
    age: number
} = {
    name: '大脚',
    age: 18
}

function getNumber({one}:{one:number}){
    return one;
}
const one = getNumber({one: 1});