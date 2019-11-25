interface IAccount {
    _id:string;
    email?:string;
    username:string;
    authentication:string;
    birth?:Date;
    thumbnail:string;
    name?:string;
    phone?:number;
    deleted:string;
    owns?:IAccount['_id'][];
    managements?:IAccount['_id'][];
    togethers?:ITogether['_id'][];
    message:string;
}

type IAccounts = IAccount[];

type loggedAccount = {
    _id:IAccount['_id'];
    thumbnail:IAccount['thumbnail'];
    username:IAccount['username'];
}
