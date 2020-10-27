import { Body, Controller, Post } from '@nestjs/common';
import { PrototypeService } from '../service/prototype.service';
import { PrototypeDto } from '../dto/prototype.dto';

@Controller()
export class PrototypeController {
  constructor(
    private readonly prototypeService: PrototypeService,
  ) {
  }

  @Post('shape')
  async newShape(@Body() prototypeDto: PrototypeDto): Promise<number> {
    return await this.prototypeService.calculateArea(prototypeDto);
  }


}