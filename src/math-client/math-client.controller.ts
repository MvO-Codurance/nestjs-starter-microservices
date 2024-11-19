import { Controller, Get, Inject } from '@nestjs/common';
import { MathClient } from './math.client';

@Controller('math-client')
export class MathClientController {
  constructor(@Inject() private client: MathClient) {}

  @Get()
  accumulate() {
    console.log('MathClientController::accumulate()');
    return this.client.accumulate();
  }
}
