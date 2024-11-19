import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MathController } from './math/math.controller';
import { MathModule } from './math/math.module';
import { MathClientModule } from './math-client/math-client.module';

@Module({
  imports: [MathModule, MathClientModule],
  controllers: [AppController, MathController],
  providers: [AppService],
})
export class AppModule {}
