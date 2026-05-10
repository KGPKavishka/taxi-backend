import {
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';

export class UpdateRideDto {

  @IsOptional()
  @IsString()
  passengerName?: string;

  @IsOptional()
  @IsNumber()
  pickupLatitude?: number;

  @IsOptional()
  @IsNumber()
  pickupLongitude?: number;

  @IsOptional()
  @IsString()
  destination?: string;

  @IsOptional()
  @IsString()
  status?: string;

  @IsOptional()
  @IsNumber()
  driverId?: number;

}