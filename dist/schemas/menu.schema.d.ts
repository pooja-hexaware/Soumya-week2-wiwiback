import { Document } from 'mongoose';
export declare type menuDocument = menu & Document;
export declare class menu {
    menuid: number;
    menuname: string;
    menuprice: number;
    menudescription: string;
    menuimg: string;
    toppings: string[];
}
export declare const menuSchema: import("mongoose").Schema<Document<menu, any, any>, import("mongoose").Model<Document<menu, any, any>, any, any>, undefined, {}>;
