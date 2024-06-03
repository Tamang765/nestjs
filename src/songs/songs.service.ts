import { Injectable } from '@nestjs/common';

@Injectable()
export class SongsService {
  //local db
  //local array

  private readonly songs = [];

  create(song) {
    this.songs.push(song);
    return this.songs;
  }
  findAll() {
    throw new Error('Something went wrong');
    return this.songs;
  }
}
