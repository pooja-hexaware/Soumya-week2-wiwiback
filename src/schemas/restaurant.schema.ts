import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document ,Types,Mongoose} from 'mongoose';
import { menu } from './menu.schema';
export type restaurantDocument = restaurant & Document;

@Schema()
export class restaurant {
   
   @Prop()
   storeid: number; 
   
   @Prop()
   storename: string; 
   
   @Prop()
   storeaddress: string; 
   
   @Prop()
   storezip: number; 
   
   @Prop()
   storecity: string; 
   
   @Prop()
   storestate: string; 
   
   @Prop()
   storephone: number; 

   

   
}

export const restaurantSchema = SchemaFactory.createForClass(restaurant);