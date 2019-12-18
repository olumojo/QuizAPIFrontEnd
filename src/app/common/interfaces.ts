export interface IUser{
    id: number;
    firstName:string;
    LastName:string;
    DateOfBirth:Date;
    UserName:string;
    Password:string;
    token :string;
    Address: IAddress;
    Email: string;
    AddressId:number;
    CreatedBy:string;
    ModifiedBy:string;
    IsActive:boolean;
    IsVisible:boolean;
    RecoveryQuestionsId: number;
    SecretAnswer: string;
    userRoleResources: IUserRole[];
}

export interface IAddress {
    id: number;
    AddressLine1:string;
    AddressLine2:string;
    AddressLine3:string;
    City:string;
    County:string;
    PostCode:string;
    CountryId: number;
    CreatedBy:string;
    ModifiedBy:string;
}

export interface ICountry {
    id: number;
    description:string;
    CreatedBy: string;
    CreatedDate ; Date;
    ModifiedBy: string;
    ModifiedDate?:Date;
    Enabled : boolean;
}

export interface IUserRole {
    roleId :number;
    userId : number;
    roleDescription: string;
}