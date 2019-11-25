interface IAccount {
    _id:string;
    username:string;
    thumbnail:string;
    
    message?:string;
    authentication?:string;
    email?:string;
    birth?:Date;
    name?:string;
    phone?:number;
    deleted?:string;
    owns?:IAccount['_id'][];
    managements?:IAccount['_id'][];
    togethers?:ITogether['_id'][];
}

type IAccounts = IAccount[];

type loggedAccount = {
    _id:IAccount['_id'];
    thumbnail:IAccount['thumbnail'];
    username:IAccount['username'];
}
