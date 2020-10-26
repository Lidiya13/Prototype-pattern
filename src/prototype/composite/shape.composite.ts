import { ShapePrototype } from '../shape/shape.prototype';

export class ShapeComposite extends ShapePrototype {
  protected children: ShapePrototype[] = [];

  public add(component: ShapePrototype): void {
    this.children.push(component);
    component.setParent(this);
  }

  public remove(component: ShapePrototype): void {
    const componentIndex = this.children.indexOf(component);
    this.children.splice(componentIndex, 1);
    component.setParent(null);
  }

  public isComposite(): boolean {
    return true;
  }

  public operation(): string {
    const result = [];
    for (const child of this.children) {
      result.push(child.operation());
    }
    return `(${result.join('+')})`;
  }

  area(): number {
    return 0;
  }

  clone(): ShapePrototype {
    return undefined;
  }
}