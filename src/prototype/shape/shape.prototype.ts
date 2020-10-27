export interface ShapeParam {
  x: number;
  y: number;
  color: string;
}

export abstract class ShapePrototype {
  protected parent: ShapePrototype;

  x: number;
  y: number;
  color: string;
  name: string;

  protected constructor(source: ShapeParam) {
    this.x = source.x;
    this.y = source.y;
    this.color = source.color;
  }

  abstract clone(): ShapePrototype;

  abstract area(): number;

  public isComposite(): boolean {
    return false;
  }
}