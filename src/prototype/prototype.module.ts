import { Module } from '@nestjs/common';
import { PrototypeService } from './service/prototype.service';
import { PrototypeController } from './controller/prototype.controller';

@Module({
  imports: [],
  providers: [PrototypeService],
  controllers: [PrototypeController],
})
export class PrototypeModule {
}