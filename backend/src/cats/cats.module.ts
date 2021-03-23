import { Global, Module } from '@nestjs/common';
import { CatsController } from './cats.controller';
import { CatsService } from './cats.service';

@Global()
@Module({
    controllers: [CatsController],
    providers: [CatsService], 
    exports: [CatsService]
})

export class CatsModule {}

// @Module({
//     controllers: [CatsController],
//     providers: [CatsService]
// })

// export class CatsModule {
//     constructor(private catsService: CatsService) {}
// }
