import { ShapeParam, ShapePrototype } from '../shape/shape.prototype';

interface RectangleParam extends ShapeParam {
  width: number;
  height: number;
}

export class RectanglePrototype extends ShapePrototype {
  width: number;
  height: number;

  constructor(source: RectangleParam) {
    super(source);
    this.width = source.width;
    this.height = source.height;
  }

  clone(): ShapePrototype {
    return new RectanglePrototype(this);
  }

  area(): number {
    return this.width * this.height;
  }
}