import { Injectable } from '@nestjs/common';
import { Circle } from '../circle/circle';
import { Rectangle } from '../rectangle/rectangle';
import { PrototypeDto } from '../dto/prototype.dto';

@Injectable()
export class PrototypeService {
  constructor() {
  }

  async calculateArea(source: PrototypeDto): Promise<number> {
    switch (source.type) {
      case 'circle': {
        const circle = new Circle(Circle.prototype);
        return circle.Area();
      }
      case 'rectangle': {
        const rectangle = new Rectangle(Rectangle.prototype);
        return rectangle.Area();
      }
    }
  }
}