import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type menuDocument = menu & Document;

@Schema()
export class menu {
   
   @Prop()
   menuid: number; 
   
   @Prop()
   menuname: string; 
   
   @Prop()
   menuprice: number; 
   
   @Prop()
   menudescription: string;
   
   @Prop()
   menuimg: string;
   
   @Prop()
   toppings: string[]; 
   
}

export const menuSchema = SchemaFactory.createForClass(menu);