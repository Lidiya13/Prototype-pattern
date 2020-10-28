import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ShapeComposite } from './prototype/composite/shape.composite';
import { ShapeParam } from './prototype/shape/shape.prototype';
import { Circle } from './prototype/circle/circle';
import { Rectangle } from './prototype/rectangle/rectangle';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}

// bootstrap();

const source: ShapeParam = {
  x: 4,
  y: 5,
};
const compositeShape = new ShapeComposite(source);
const circle = new Circle({ x: 4, y: 5, radius: 5 });
compositeShape.add(circle);
const compositeRectangle = new ShapeComposite({ x: 3, y: 2 });
const rectangle = new Rectangle({ x: 3, y: 2, width: 5, height: 6 });
compositeRectangle.add(rectangle);
compositeShape.add(compositeRectangle);

console.log(circle.area());
console.log(compositeRectangle.area());
console.log(compositeShape.area());