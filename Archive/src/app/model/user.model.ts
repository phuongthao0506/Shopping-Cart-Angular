export class User {
    fullName:string = "";
    phone:number =0
    password:string = "";
    mail:string = "";
    address:string = "";
    userName:string = "";
  
    
    constructor(fullName:string = "", address:string="", mail:string ="",  phone:number=0, password:string = "", userName:string = "")
    {
        this.fullName = fullName;
        this.address = address;
        this.mail = mail;
        this.phone = phone;
        this.password=password;
        this.userName=userName;
    }
}