import { Injectable } from '@nestjs/common';
import { Circle } from '../circle/circle.prototype';
import { RectanglePrototype } from '../rectangle/rectangle.prototype';
import { PrototypeDto } from '../dto/prototype.dto';

@Injectable()
export class PrototypeService {

  async calculateArea(source: PrototypeDto): Promise<number> {
    switch (source.type) {
      case 'circle': {
        const circle = new Circle(Circle.prototype);
        circle.radius = source.radius;
        return circle.area();
      }
      case 'rectangle': {
        const rectangle = new RectanglePrototype(RectanglePrototype.prototype);
        rectangle.width = source.width;
        rectangle.height = source.height;
        return rectangle.area();
      }
    }
  }
}