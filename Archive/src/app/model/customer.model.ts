export class Customer {
    fullName:string = "";
    phone:number = 0;
    mail:string = "";
    address:string = "";
  
    
    constructor(fullName:string = "", address:string="", mail:string ="",  phone:number = 0)
    {
        this.fullName = fullName;
        this.address = address;
        this.mail = mail;
        this.phone = phone;
    }
}