import {
  IsBoolean,
  IsNotEmpty,
  IsNumber,
  IsString,
} from 'class-validator';

export class CreateDriverDto {

  @IsString()
  @IsNotEmpty()
  name!: string;

  @IsString()
  vehicleNumber!: string;

  @IsNumber()
  latitude!: number;

  @IsNumber()
  longitude!: number;

  @IsBoolean()
  isAvailable!: boolean;

}