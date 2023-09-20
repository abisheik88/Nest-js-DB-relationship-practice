import {
  Body,
  Controller,
  Post,
  Get,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { CreateDetails } from './dto/createDetails.dto';
import { DetailsService } from './details.service';

@Controller('details')
export class DetailsController {
  constructor(private readonly Details: DetailsService) {}

  @Post('/create')
  createDetails(@Body() details: CreateDetails) {
    const newDetails = this.Details.create(details);
    return newDetails;
  }

  @Get('/get')
  getDetails() {
    return this.Details.find();
  }

  @Patch('update/:id')
  updateDetails(@Param('id') id: number, @Body() data) {
    return this.Details.update(id, data);
  }

  @Delete('delete/:id')
  deleteDetails(@Param('id') id: number) {
    this.Details.delete(id);
  }
}
