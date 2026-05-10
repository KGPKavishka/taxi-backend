import {
  Injectable,
  NotFoundException,
} from '@nestjs/common';

import { PrismaService } from 'src/prisma/prisma.service';

import { CreateRideDto } from './dto/create-ride.dto';
import { UpdateRideDto } from './dto/update-ride.dto';

@Injectable()
export class RidesService {

  constructor(private prisma: PrismaService) {}

  create(createRideDto: CreateRideDto) {

    return this.prisma.ride.create({
      data: createRideDto,
    });

  }

  findAll() {

    return this.prisma.ride.findMany();

  }

  async findOne(id: number) {

    const ride = await this.prisma.ride.findUnique({
      where: { id },
    });

    if (!ride) {
      throw new NotFoundException('Ride not found');
    }

    return ride;

  }

  async update(
    id: number,
    updateRideDto: UpdateRideDto,
  ) {

    await this.findOne(id);

    return this.prisma.ride.update({
      where: { id },
      data: updateRideDto,
    });

  }

  async remove(id: number) {

    await this.findOne(id);

    return this.prisma.ride.delete({
      where: { id },
    });

  }

}