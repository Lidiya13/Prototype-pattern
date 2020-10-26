import { ShapeParam, ShapePrototype } from '../shape/shape.prototype';

interface CircleParam extends ShapeParam {
  radius: number;
}

export class Circle extends ShapePrototype {
  radius: number;

  constructor(source: CircleParam) {
    super(source);
    this.radius = source.radius;
  }

  clone(): ShapePrototype {
    return new Circle(this);
  }

  area(): number {
    return Math.PI * (this.radius ** 2);
  }
}