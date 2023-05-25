class c1{
    constructor(private age:number){}
    get age1(){
        return this.age;
    }
    set age1(age:number){
        this.age = age;
    }
}

const c2 = new c1(12);
c2.age1 = 15;

console.log(c2.age1);