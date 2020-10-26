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

  public setParent(parent: ShapePrototype) {
    this.parent = parent;
  }

  public getParent(): ShapePrototype {
    return this.parent;
  }

  abstract clone(): ShapePrototype;

  abstract area(): number;

  public add(component: ShapePrototype): void {
  }

  public remove(component: ShapePrototype): void {
  }

  public isComposite(): boolean {
    return false;
  }

  public abstract operation(): string
}