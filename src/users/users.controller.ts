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

import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@ApiTags('Users')
@Controller('users')

export class UsersController {

  constructor(private readonly usersService: UsersService) {}

  @ApiOperation({
    summary: 'Create a new user',
  })
  @Post()
  create(@Body() createUserDto: CreateUserDto) {

    return this.usersService.create(createUserDto);

  }

  @ApiOperation({
    summary: 'Get all users',
  })
  @Get()
  findAll() {

    return this.usersService.findAll();

  }

  @ApiOperation({
    summary: 'Get user by ID',
  })
  @Get(':id')
  findOne(
    @Param('id', ParseIntPipe) id: number,
  ) {

    return this.usersService.findOne(id);

  }

  @ApiOperation({
    summary: 'Update user',
  })
  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateUserDto: UpdateUserDto,
  ) {

    return this.usersService.update(id, updateUserDto);

  }

  @ApiOperation({
    summary: 'Delete user',
  })
  @Delete(':id')
  remove(
    @Param('id', ParseIntPipe) id: number,
  ) {

    return this.usersService.remove(id);

  }

}