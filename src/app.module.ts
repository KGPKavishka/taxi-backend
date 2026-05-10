import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { UsersModule } from './users/users.module';
import { PrismaModule } from './prisma/prisma.module';
import { DriversModule } from './drivers/drivers.module';
import { RidesModule } from './rides/rides.module';

@Module({
  imports: [
    UsersModule,
    PrismaModule,
    DriversModule,
    RidesModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}