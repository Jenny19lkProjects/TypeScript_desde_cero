(()=>{

interface Client{
    name:string;
    age?:number;
    address:Address;
    getFullAdress(id:string):void;
}
interface Address{
    id:number;
    zip:string;
    city:string;
}
const client:Client={
    name:'Fernando',
    age:25,
    address:{
        id:125,
        zip:'KY2 sup',
        city:'Ottwa'
    },
    getFullAdress(id:string){
        return this.address.city;
    }
}

const client2:Client={
    name:'Melissa',
    age:30,
    address:{
        city:'Toronto',
        id:120,
        zip:'k2O'
    },
     getFullAdress(id:string){
        return this.address.city;
    }
}

})()