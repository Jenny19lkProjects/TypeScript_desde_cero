(()=>{
    let flash={
        name:'Barry Allen',
        age:24,
        powers:['Súper velocidad', 'Viajar en el tiempo'],
    }
    flash={
        name:'Clark Ken',
        age:60,
        powers:['Súper fuerza'],
        getNombre(){
            return this.name;
        }
    }

    console.log(flash);
})()