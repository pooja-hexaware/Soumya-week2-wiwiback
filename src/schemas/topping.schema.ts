import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type toppingDocument = topping & Document;

@Schema()
export class topping {
   
   @Prop()
   toppingid: string; 
   
   @Prop()
   toppingname: string; 
   
   @Prop()
   toppingprice: string; 
   
   @Prop()
   toppingimg: string; 
   
}

export const toppingSchema = SchemaFactory.createForClass(topping);