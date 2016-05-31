module myModule {
    export  interface IUser {
        //id:number;
        get();
    }
    export class User implements IUser{
        id: number;
        constructor(id:number){
            this.id = id;
        }
        get(){
            return this.id;
        }
    }


}
var user  = new myModule.User(5);

console.log(user.get())