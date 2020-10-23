import { Shape } from '../shape/shape';

export class Circle extends Shape {
  radius: number;

  constructor(source: Circle) {
    super(source);
    this.radius=source.radius;
  }

  clone(): Shape {
    return new Circle(this);
  }

  Area(): number {
    return Math.PI * (this.radius ** 2);
  }
}