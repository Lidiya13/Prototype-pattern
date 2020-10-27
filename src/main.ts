import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ShapeComposite } from './prototype/composite/shape.composite';
import { ShapeParam } from './prototype/shape/shape.prototype';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}

bootstrap();

const source: ShapeParam = {
  x: 4,
  y: 5,
};
const compositeShape = new ShapeComposite(source);
const circle = new ShapeComposite(compositeShape);
const compositeRectangle = new ShapeComposite(compositeShape);
const rectangle = new ShapeComposite(compositeRectangle);