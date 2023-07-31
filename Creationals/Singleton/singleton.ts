// unique instance

class Database {
    private static instance: Database
    private constructor (){}
    public static getInstance(): Database {
        if(this.instance === null){
            this.instance = new Database();
        }
        return this.instance;
    }
}

function main(): void{
    console.log('main');
    const instance1 = Database.getInstance();
    const instance2 = Database.getInstance();
    console.log(instance1===instance2 ? 'are the same' : 'are not the same')
}

main();