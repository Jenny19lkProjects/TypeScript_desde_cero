import { printObject, genericFunction, genericFunctionArrow } from '../generics/generics';
import { Villian, Hero } from '../interfaces';



const dealpool={
    name:'Deadpool',
    realName:'Wade Winston Wilson',
    dangerLevel:130
}
console.log(genericFunctionArrow<Villian>(dealpool).dangerLevel)