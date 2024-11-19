import { ClientProxy } from '@nestjs/microservices';
import { Inject, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class MathClient {
  constructor(@Inject('MATH_SERVICE') private client: ClientProxy) {}

  accumulate(): Observable<number> {
    console.log('MathClient::accumulate()');
    const pattern = { cmd: 'sum' };
    const payload = [1, 2, 3];
    return this.client.send<number>(pattern, payload);
  }
}
