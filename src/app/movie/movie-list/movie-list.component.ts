import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/services/service.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css'],
})
export class MovieListComponent implements OnInit {
  movieList: any;
  p: any;
  selectGenres: any;
  mainList: any;
  gener: any;
  house: any;
  object: any;
  isDone: any;
  search: any;

  constructor(private service: ServiceService) {}

  ngOnInit(): void {
    this.getMovieList();
  }

  getMovieList() {
    this.isDone = true;
    this.service.getMovie().subscribe((result: any) => {
      this.movieList = result;

      console.log(this.movieList);

      this.movieList
        .sort((a: any, b: any) => a.title - b.title)
        .sort((a: any, b: any) => a.popularity - b.popularity)
        .sort((a: any, b: any) => a.release_date - b.release_date)
        .sort((a: any, b: any) => a.vote_average - b.vote_average)
        .sort((a: any, b: any) => a.vote_count - b.vote_count);

      console.log(this.movieList);
    });
  }

  getfilteredData() {
    this.isDone = false;
    console.log(this.selectGenres);
    this.mainList = this.movieList.filter(
      (data: { genre_ids: any }) => data.genre_ids[0] == this.selectGenres
    );

    console.log(this.mainList);
  }
}
