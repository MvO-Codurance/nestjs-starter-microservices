import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { MathClientController } from './math-client.controller';
import { MathClient } from './math.client';

@Module({
  imports: [
    ClientsModule.register([
      { name: 'MATH_SERVICE', transport: Transport.TCP },
    ]),
  ],
  controllers: [MathClientController],
  providers: [MathClient],
})
export class MathClientModule {}
