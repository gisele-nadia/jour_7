export interface Product {
    id:number;
    name:string;
    description:string;
    soldPrice:number;
    regularPrice:number;
    imageUrl:string;
    createAt:Date;
    updateAt?:Date;
    categories:string[];
}
