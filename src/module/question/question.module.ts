import { Module } from '@nestjs/common';
import { QuestionService } from './question.service';
import { QuestionController } from './question.controller';
import { TagModule } from '../tag/tag.module';
import { ViewModule } from '../view/view.module';
import { CommentService } from '../comment/comment.service';

@Module({
  imports: [TagModule, ViewModule],
  controllers: [QuestionController],
  providers: [QuestionService, CommentService],
  exports: [QuestionService],
})
export class QuestionModule {}
