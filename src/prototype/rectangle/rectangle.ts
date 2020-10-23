import { Shape } from '../shape/shape';

export class Rectangle extends Shape {
  width: number;
  height: number;

  constructor(source: Rectangle) {
    super(source);
    this.width = source.width;
    this.height = source.height;
  }

  clone(): Shape {
    return new Rectangle(this);
  }

  Area(): number {
    return this.width * this.height;
  }
}