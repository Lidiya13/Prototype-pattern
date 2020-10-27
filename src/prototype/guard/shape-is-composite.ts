import { ShapePrototype } from '../shape/shape.prototype';
import { ShapeComposite } from '../composite/shape.composite';

export const shapeIsComposite = (obj: ShapePrototype): obj is ShapeComposite => {
  return obj.isComposite();
}; //безопасное приведение типов