interface IPrototype {
    clone(): Prototype;
}
abstract class Prototype implements IPrototype{
    abstract clone(): Prototype;
}

class Hero extends Prototype{
    age: number =0;
    constructor(age:number){
        super();
        this.age = age;
    }
    clone(): Prototype {
        const dataOfClone = Object.create(this);
        const clone = new Hero(dataOfClone);
        return clone;
    }
}

const hero1 = new Hero(1); 
const hero2 = hero1.clone();
console.log(hero1);
console.log(hero2);