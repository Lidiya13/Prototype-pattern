import { ShapeParam, ShapePrototype } from '../shape/shape.prototype';
import { shapeIsComposite } from '../guard/shape-is-composite';

export class ShapeComposite extends ShapePrototype {
  protected children: ShapePrototype[] = [];

  constructor(source: ShapeParam) {
    super(source);
  }

  add(component: ShapePrototype): void {
    this.children.push(component);
  }

  remove(component: ShapePrototype): void {
    const componentIndex = this.children.indexOf(component);
    this.children.splice(componentIndex, 1);
  }

  isComposite(): boolean {
    return true;
  }

  area(): number {
    return this.calculateArea(this.children);
  }

  clone(): ShapePrototype {
    return Object.create(this);
  }

  getChildren() {
    return this.children;
  }

  private calculateArea(children: ShapePrototype[]): number {
    let resultSum = 0;
    for (let i = 0; i < children.length; i++) {
      const item = children[i];
      if (shapeIsComposite(item)) {
        resultSum += this.calculateArea(item.getChildren());
      } else {
        resultSum += item.area();
      }
    }
    return resultSum;
  }
}