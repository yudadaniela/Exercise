
/* cuenta Automatico
   - [ok] Agregar Saldo: NO Saldo Negativo  YA
   - [ok] Remover Saldo: NO Remover saldo no disponible YA
   - [ok] Mostrar Saldo  YA
   - [ok] Mostrar Operaciones  YA

   - [ok] Agrege el nombre del titular de la cuenta  YA
   - Historial registre intentos fallidos
   - Tranferencias entre cuentas  YA */
  
class user{
    constructor(name, use, password){
        this.name=name;
        this.use=use;
        this.password=password  
    }
 

}
class automatiCachier {
    constructor( user,initialBalance=0,optionNum ) {
        
        this.user=user;
        this.balance=initialBalance;
        this.optionNum = optionNum;
        this.resume=[];
    }
 
 

    

    showMyMoney(){
        console.log(`Usuario: ${this.user.name}`);
        console.log(`Saldo: ${this.balance}`);
    }
    addMoney(amount){
        if(amount>0){
            this.balance+=amount;
            this.resume.push(`+${amount}`);
            console.log(`se consigno ${amount}`);
        }
    }
    removeMoney(amount){
        if(amount>0 && amount<=this.balance){
            this.balance-=amount;
            this.resume.push(`-${amount}`);
            console.log(`se retiro ${amount}`);   
        }
    }
    showResume(){
    this.resume.forEach((these, index)=>{
        console.log(`${index+1} ${these}`);
    })
    }
    transferToOther(other,amount){
    if(amount>0 && amount<=this.balance){
        this.balance-=amount;
        other.balance+=amount;
        this.resume.push(`Transferencia realizada a ${other.user.name},-${amount} `);
        other.resume.push(`Transferencia realizada de ${this.user.name},+${amount} `);
        console.log(`Transfetencia exitosa ${this.balance}`);
    }else{
        console.log(`Saldo Insuficiente`);
    }
    }

    
}
//creando usuario
const Daniela = new user("Daniela Nieto","Dani","1234");
const Bibian = new user("Bibian Castro","Bibi", "2431");

//const isAutentication = autenticar("Daniela","2345");
//if(isAutentication===true){"Bienvenido"}
//creando cuenta 
const acountDaniela = new automatiCachier(Daniela, 500, 1);
const acountBibian=new automatiCachier(Bibian, 200, 1 )

// funciones mostrando
acountDaniela.showMyMoney()
acountDaniela.addMoney(500);
acountDaniela.removeMoney(100);
acountDaniela.showMyMoney();
acountDaniela.showResume();
acountDaniela.transferToOther(acountBibian,200);

acountBibian.showMyMoney();
acountBibian.showResume();
//daniela.option()*/