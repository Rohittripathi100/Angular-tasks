import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  // getMovieUrl = environment.base_url + "wtsjignesh/b374963912a84a11a9bfd408536472fe";

  constructor(private _httpClient : HttpClient) { }

  getMovie(){
    
    return this._httpClient.get(`./assets/movie.json`).pipe(map(res => {
      return res;
    
  }
  
  )
  )
  
}

}
