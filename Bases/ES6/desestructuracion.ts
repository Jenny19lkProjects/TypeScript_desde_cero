(()=>{
    type Avengers ={
        nick: string;
        ironman: string;
        vision: string;
        activo: boolean;
        poder: number;
    }
    const avengers={
        nick:'Samuel L. Jackson',
        ironman:'Robert Doweney Jr.',
        vision:'Paul Bettany',
        activo:true,
        poder:1500.1232232
    }

    /*const {poder,vision}=avengers
    console.log(poder.toFixed(2),vision.toUpperCase())*/

    const printAvenger=({ironman,...resto}:Avengers)=>{
        console.log(ironman,resto);
    }
    //printAvenger(avengers);

    const AvengerArr:[string,boolean,number]=['Cap. America',true,150.15]
    const [capitan, iroman,seriaunNumero]=AvengerArr;
    console.log({iroman,capitan});
})()