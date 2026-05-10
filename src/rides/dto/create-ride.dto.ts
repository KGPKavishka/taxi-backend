import {
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';

export class CreateRideDto {

  @IsString()
  passengerName!: string;

  @IsNumber()
  pickupLatitude!: number;

  @IsNumber()
  pickupLongitude!: number;

  @IsString()
  destination!: string;

  @IsOptional()
  @IsString()
  status?: string;

  @IsOptional()
  @IsNumber()
  driverId?: number;

}