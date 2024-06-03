import {
  Body,
  Controller,
  Delete,
  Get,
  HttpException,
  HttpStatus,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';
import { CreateSongDTO } from './dto/create-song-dto';
import { SongsService } from './songs.service';

//decoratr  and prefix
@Controller('songs')
export class SongsController {
  constructor(private songService: SongsService) {}
  @Post()
  create(@Body() createSongDTO: CreateSongDTO) {
    return this.songService.create(createSongDTO);
  }
  @Get() findAll() {
    try {
      return this.songService.findAll();
    } catch (error) {
      throw new HttpException(
        `server error`,
        HttpStatus.INTERNAL_SERVER_ERROR,
        { cause: error },
      );
    }
  }

  @Get(':id')
  findOne(
    @Param(
      'id',
      new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE }),
      //with new parseIntPipe custome message can be sent or can ony be used ParseIntPipe with default error message
    )
    id: number,
  ) {
    return `this is single song id:${id}`;
  }
  @Put(':id')
  update() {
    return `"update this song"`;
  }
  @Delete(':id')
  delete() {
    return `"delete this song"`;
  }
}
