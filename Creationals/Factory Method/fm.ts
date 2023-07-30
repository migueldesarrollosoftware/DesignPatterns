// interaface product of factory
interface SuperHero {
    age: number;
    name: string;
    jump(): void;
    punch(): void;
}

// factory
abstract class HeroFactory {
    abstract createHero(): SuperHero;
    saludar(){
        console.log(`hello`)
    }
}

// factoryConcrete 
class AquaHero extends HeroFactory{
    createHero(): SuperHero {
        this.saludar();
        console.log('Aqua Hero was born')
        return new Aquaman();
    }
}

// factoryConcrete
class TerraHero extends HeroFactory{
    createHero(): SuperHero {
        this.saludar();
        console.log('Terra Hero was born')
        return new Aquaman();
    }
}

// product one
class Aquaman implements SuperHero {
    age: number = 0;    
    name: string = '';

    jump(): void {
    throw new Error("Method not implemented.");
    }
    punch(): void {
    throw new Error("Method not implemented.");
    }
}

// product two
class SuperMan implements SuperHero {
    age: number = 0;
    name: string = '';

    jump(): void {
        throw new Error("Method not implemented.");
    }
    punch(): void {
        throw new Error("Method not implemented.");
    }
}

// use
const aquaman1 = new AquaHero().createHero();
const terraman1 = new TerraHero().createHero();
