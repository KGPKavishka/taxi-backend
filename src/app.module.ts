import { Module } from '@nestjs/common';

import { PrismaModule } from './prisma/prisma.module';
import { UsersModule } from './users/users.module';
import { DriversModule } from './drivers/drivers.module';
import { RidesModule } from './rides/rides.module';

import { AppController } from './app.controller';

@Module({
  imports: [
    PrismaModule,
    UsersModule,
    DriversModule,
    RidesModule,
  ],
  controllers: [AppController],
})
export class AppModule {}