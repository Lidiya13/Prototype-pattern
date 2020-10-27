import { ShapeParam, ShapePrototype } from '../shape/shape.prototype';

interface CompositeParam extends ShapeParam {
  radius: number;
  width: number;
  height: number;
}

export class ShapeComposite extends ShapePrototype {
  radius: number;
  width: number;
  height: number;
  protected children: ShapePrototype[] = [];

  constructor(source: CompositeParam) {
    super(source);
    this.radius = source.radius;
    this.width = source.width;
    this.height = source.height;
  }

  public add(component: ShapePrototype): void {
    this.children.push(component);
  }

  public remove(component: ShapePrototype): void {
    const componentIndex = this.children.indexOf(component);
    this.children.splice(componentIndex, 1);
  }

  public isComposite(): boolean {
    return true;
  }

  area(): number {
    const result = Math.PI * (this.radius ** 2) + this.width * this.height;
    return result;
  }

  clone(): ShapePrototype {
    return new ShapeComposite(this);
  }
}