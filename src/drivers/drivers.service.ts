import {
  Injectable,
  NotFoundException,
} from '@nestjs/common';

import { PrismaService } from 'src/prisma/prisma.service';

import { CreateDriverDto } from './dto/create-driver.dto';
import { UpdateDriverDto } from './dto/update-driver.dto';

import { calculateDistance } from './distance.helper';

@Injectable()
export class DriversService {

  constructor(private prisma: PrismaService) {}

  create(createDriverDto: CreateDriverDto) {

    return this.prisma.driver.create({
      data: createDriverDto,
    });

  }

  findAll() {

    return this.prisma.driver.findMany();

  }

  async nearbyDrivers(
    latitude: number,
    longitude: number,
  ) {

    const drivers = await this.prisma.driver.findMany({
      where: {
        isAvailable: true,
      },
    });

    return drivers.filter((driver) => {

      const distance = calculateDistance(
        latitude,
        longitude,
        driver.latitude,
        driver.longitude,
      );

      return distance <= 30;

    });

  }

  async findOne(id: number) {

    const driver = await this.prisma.driver.findUnique({
      where: { id },
    });

    if (!driver) {
      throw new NotFoundException('Driver not found');
    }

    return driver;

  }

  async update(
    id: number,
    updateDriverDto: UpdateDriverDto,
  ) {

    await this.findOne(id);

    return this.prisma.driver.update({
      where: { id },
      data: updateDriverDto,
    });

  }

  async remove(id: number) {

    await this.findOne(id);

    return this.prisma.driver.delete({
      where: { id },
    });

  }

}