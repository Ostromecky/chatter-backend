import { Module } from '@nestjs/common';
import { ChatsService } from './chats.service';
import { ChatsResolver } from './chats.resolver';
import { ChatsRepository } from './chats.repository';
import { DatabaseModule } from '../common/database/database.module';
import { Chat, ChatSchema } from './entities/chat.entity';

@Module({
  providers: [ChatsResolver, ChatsService, ChatsRepository],
  imports: [
    DatabaseModule.forFeature([
      {
        name: Chat.name,
        schema: ChatSchema,
      },
    ]),
  ],
})
export class ChatsModule {}
