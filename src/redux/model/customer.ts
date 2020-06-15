export interface ICustomer {
    id: number;
    first_name: string,
    last_name: string,
    dob: string,
    phone: string,
}

export interface ICustomers {
    [id: number]: ICustomer;
}


export class Customer implements ICustomer{
    constructor(public id:number=0,public first_name:string='',
    public last_name:string='',
    public dob:string='',
    public phone:string=''){

    }
}

