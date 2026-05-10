import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Query,
} from '@nestjs/common';

import {
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';

import { DriversService } from './drivers.service';

import { CreateDriverDto } from './dto/create-driver.dto';
import { UpdateDriverDto } from './dto/update-driver.dto';

@ApiTags('Drivers')

@Controller('drivers')
export class DriversController {

  constructor(
    private readonly driversService: DriversService,
  ) {}

  @ApiOperation({
    summary: 'Create a new driver',
  })
  @Post()
  create(
    @Body() createDriverDto: CreateDriverDto,
  ) {

    return this.driversService.create(createDriverDto);

  }

  @ApiOperation({
    summary: 'Get all drivers',
  })
  @Get()
  findAll() {

    return this.driversService.findAll();

  }

  @ApiOperation({
    summary: 'Find nearby drivers within 30km',
  })
  @Get('nearby')
  nearbyDrivers(
    @Query('latitude') latitude: string,
    @Query('longitude') longitude: string,
  ) {

    return this.driversService.nearbyDrivers(
      Number(latitude),
      Number(longitude),
    );

  }

  @ApiOperation({
    summary: 'Get driver by ID',
  })
  @Get(':id')
  findOne(
    @Param('id', ParseIntPipe) id: number,
  ) {

    return this.driversService.findOne(id);

  }

  @ApiOperation({
    summary: 'Update driver',
  })
  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateDriverDto: UpdateDriverDto,
  ) {

    return this.driversService.update(
      id,
      updateDriverDto,
    );

  }

  @ApiOperation({
    summary: 'Delete driver',
  })
  @Delete(':id')
  remove(
    @Param('id', ParseIntPipe) id: number,
  ) {

    return this.driversService.remove(id);

  }

}