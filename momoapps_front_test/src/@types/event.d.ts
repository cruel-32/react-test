interface IEvent {
    _id:string;
    togetherId:ITogether['_id'][];
    title:string;
    date:Date;
    eventCategoryId:IEventCategory['_id'];
    eventLocationId:ILocationCategory['_id'];
    limit:number;
    message:string;
    members:IAccount['_id'][];
}

interface IEventCategory extends hierarchy {
    title:string;
    parent:IEventCategory['_id'];
}

interface ILocationCategory extends hierarchy {
    title:string;
    parent:ILocationCategory['_id'];
}

