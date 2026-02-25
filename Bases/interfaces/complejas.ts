(()=>{

interface Client{
    name:string;
    age?:number;
    address:{
        id:number;
        zip:string;
        city:string;
    }
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
    }
}

const client2:Client={
    name:'Melissa',
    age:30,
    address:{
        city:'Toronto',
        id:120,
        zip:'k2O'
    }
}

})()