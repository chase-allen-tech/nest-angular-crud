import { MiddlewareConsumer, Module, RequestMethod } from '@nestjs/common';
import { AppController } from './app.controller';
import { CatsService } from './cats/cats.service';
import { AppService } from './app.service';
import { CatsController } from './cats/cats.controller';

import { CatsModule } from './cats/cats.module';
import { logger } from './common/middleware/logger.middleware';

@Module({
  imports: [CatsModule]
  // imports: [],
  // controllers: [CatsController],
  // providers: [AppService, CatsService],
})

export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(logger) // Apply middleware
      .exclude(
        { path: 'cats', method: RequestMethod.GET },
        { path: 'cats', method: RequestMethod.POST },
      )
      .forRoutes(CatsController);
  }
}



// export class AppModule {
//   configure(consumer: MiddlewareConsumer) {
//     consumer.apply(LoggerMiddleware)
//       .forRoutes({path: 'cats', method: RequestMethod.GET});
//   }
// }
