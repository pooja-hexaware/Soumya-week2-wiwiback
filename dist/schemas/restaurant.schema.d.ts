import { Document } from 'mongoose';
export declare type restaurantDocument = restaurant & Document;
export declare class restaurant {
    storeid: number;
    storename: string;
    storeaddress: string;
    storezip: number;
    storecity: string;
    storestate: string;
    storephone: number;
}
export declare const restaurantSchema: import("mongoose").Schema<Document<restaurant, any, any>, import("mongoose").Model<Document<restaurant, any, any>, any, any>, undefined, {}>;
