interface ITogether {
    _id:string;
    title:string;
    image:string;
    categoryId:string;
    locationId:Date;
    ownerId:string;
    managerIds:IAccount['_id'][];
    bannedIds:IAccount['_id'][];
    subscribe:string;
    message:string;
    limit:number;
    maxAge:Date;
    minAge:Date;
    eventcategories:IAccount['_id'][];
    members:IAccount['_id'][];
    createdAt:Date;
}


