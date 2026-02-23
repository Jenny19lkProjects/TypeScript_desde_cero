(()=>{
    class Avenger{
        constructor(
            public name:String,
            public realName:String,
        ){
            console.log('Constructo Avenger llamado!')
        }
        private getFullname(){
            return `${this.name} ${this.realName}`
        }
    }

    class Xmen extends Avenger{
        constructor(
            public name:string,
            public realName:string,
            public isMutant:boolean
        ){
            super(name, realName);
            console.log('Constructor Xmen llamado')
        }

        get fullName(){
            return `${this.name}-${this.realName}`
        }
        set fullName(name:string){
           if(name.length<3){
            throw new Error('El nombre debe ser mayor de 3 letras')
           }
            this.name=name;
        }

        getFullnameDesdeXmen(){
            console.log(super.getFullname())
        }
    }
    const wolverine=new Xmen('Wolverine','Logan',true)
    wolverine.fullName='Fernando';
    console.log(wolverine.fullName);
    

})()