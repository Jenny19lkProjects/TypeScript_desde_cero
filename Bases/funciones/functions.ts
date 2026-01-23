(()=>{

    const hero:string='Flash';
    function returnName():string{
        return hero;
    }
    const activateBatisignal=():string=>{
        return 'Batiseñal activado!';
    }
    console.log(typeof activateBatisignal);

    const hereName:string=returnName();
})()