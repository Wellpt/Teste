import { Module } from '@nestjs/common';
import { ClienteController } from './cliente.controller';
import { ClienteRepository } from './cliente.repository';

@Module({
  controllers: [ClienteController],
  providers: [ClienteRepository],
})
export class ClienteModule { 

}