export class RoleModel{
     id: string;
    FirstName: string;
    LastName: string;
    EmailAddress: string;
    Password: any;
    Roles: Array<Claim>;    
    CreatedDate: string;
    LastLogin: string;
    IpAddress: any;
    Active: any;
  constructor()
  {
  }
   
}
export class Claim{
id : string;
Name : string ;
DisplayText : string;

}
