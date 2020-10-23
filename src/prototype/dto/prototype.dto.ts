import { PrototypeInterface } from '../interface/prototype.interface';
import { IsInt, IsNotEmpty, IsString } from 'class-validator';

export class PrototypeDto {
  constructor(init: PrototypeInterface) {
    this.type = init.type;
    this.radius = init.radius;
    this.width = init.width;
    this.height = init.height;
  }

  @IsString()
  @IsNotEmpty()
  type: 'circle' | 'rectangle';
  @IsInt()
  radius: number;
  @IsInt()
  width: number;
  @IsInt()
  height: number;
}