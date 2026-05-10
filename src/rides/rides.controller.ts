import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
} from '@nestjs/common';

import {
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';

import { RidesService } from './rides.service';

import { CreateRideDto } from './dto/create-ride.dto';
import { UpdateRideDto } from './dto/update-ride.dto';

@ApiTags('Rides')

@Controller('rides')
export class RidesController {

  constructor(
    private readonly ridesService: RidesService,
  ) {}

  @ApiOperation({
    summary: 'Create a new ride',
  })
  @Post()
  create(
    @Body() createRideDto: CreateRideDto,
  ) {

    return this.ridesService.create(createRideDto);

  }

  @ApiOperation({
    summary: 'Get all rides',
  })
  @Get()
  findAll() {

    return this.ridesService.findAll();

  }

  @ApiOperation({
    summary: 'Get ride by ID',
  })
  @Get(':id')
  findOne(
    @Param('id', ParseIntPipe) id: number,
  ) {

    return this.ridesService.findOne(id);

  }

  @ApiOperation({
    summary: 'Update ride',
  })
  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateRideDto: UpdateRideDto,
  ) {

    return this.ridesService.update(
      id,
      updateRideDto,
    );

  }

  @ApiOperation({
    summary: 'Delete ride',
  })
  @Delete(':id')
  remove(
    @Param('id', ParseIntPipe) id: number,
  ) {

    return this.ridesService.remove(id);

  }

}