// import { Module, DynamicModule } from '@nestjs/common';
// import { createDatabaseProviders } from './database.providers';
// import { Connection } from './conection.provider';

// @Module({
//     providers: [Connection],
// })

// export class DatabaseModule {
//     static forRoot(entities = [], options?): DynamicModule {
//         const providers = createDatabaseProviders(options, entities);
//         return {
//             module: DatabaseModule,
//             providers: providers,
//             exports: providers,
//         }
//     }
// }