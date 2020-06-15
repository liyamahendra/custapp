import { Customer } from "../redux/model/customer";

export const customerService = {
    create,
    list
};

function create(customerData: Customer) {
    var jsonCust = sessionStorage.getItem('customer');
    if (jsonCust == null) {
        jsonCust = "[]";
    }
    var cust = JSON.parse(jsonCust);
    customerData.id =  1;
    if (cust.length > 0) {
        var maxId = Math.max.apply(
            Math,
            cust.map(function (o: any) {
                return o.id;
            })
        );
        customerData.id = maxId + 1;
    }
    cust.push(customerData);
    sessionStorage.setItem('customer', JSON.stringify(cust));
    console.log(cust);
}

function list(id:number):[]{
    var jsonCust = sessionStorage.getItem('customer');
    if (jsonCust == null) {
        jsonCust = "[]";
    }
    var cust = JSON.parse(jsonCust);
    if(id==0){
        return cust;
    }
    else{
        return cust[id+1];
    }
}

