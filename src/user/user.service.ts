import { EventPattern } from '@nestjs/microservices';

export class UserService {
  @EventPattern('user_created')
  async handleUserCreated(data: Record<string, unknown>) {
    // business logic
  }
}
