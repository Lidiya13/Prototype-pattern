import { DecoratorInterface } from '../interface/decorator.interface';
import { ShapePrototype } from '../shape/shape.prototype';

export class Decorator implements DecoratorInterface {
  protected component: ShapePrototype;

  constructor(source: ShapePrototype) {
    this.component = source;
  }

  setName(shapeName: string): void {
    this.component.name = shapeName;
  }
}