interface hierarchy {
    _id:string;
    parent:string;
}

interface IAction<T> {
    type:string;
    payload:T|null|undefined;
}

type Action = string;