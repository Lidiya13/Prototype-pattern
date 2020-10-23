export abstract class Shape {
  x: number;
  y: number;
  color: string;

  protected constructor(source: Shape) {
    this.x = source.x;
    this.y = source.y;
    this.color = source.color;
  }

  abstract clone(): Shape;

  abstract area(): number;
}