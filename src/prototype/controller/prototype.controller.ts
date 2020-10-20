import { Controller, Post } from '@nestjs/common';
import { PrototypeService } from '../service/prototype.service';

@Controller()
export class PrototypeController {
  constructor(
    private readonly prototypeService: PrototypeService,
  ) {
  }

  @Post()
  newShape() {

  }
}