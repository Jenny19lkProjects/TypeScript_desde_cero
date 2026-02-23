(()=>{
    abstract class Mutante{
        constructor(
            public name:string,
            public realName:string
        ){

        }
    }
    
    class Xmen extends Mutante{
        salvarMundo(){
            return 'Mundo a salvo'
        }
    }
    class Villan extends Mutante{
        conquistarMundo(){
            return 'Mundo conquistado';
        }
    }
    const wolverine=new Xmen('Wolverine', 'Logan');
    const magneto=new Villan('Magneto', 'Magnus');


    const printName=(character:Mutante)=>{
        console.log(character.realName);
    }
    printName(magneto)

})()