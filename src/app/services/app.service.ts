import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable ({
  providedIn: "root"
})


export class AppService {


  // apiUrl: string = 'https://myanimelist.p.rapidapi.com/anime/recommendations/1';
  // private headers = new HttpHeaders()
  //   .set('X-RapidAPI-Key', 'f5905f5e51msh398d7117ef20a51p10eac5jsn462febe63576')
  //   .set('X-RapidAPI-Host', 'myanimelist.p.rapidapi.com');


  apiUrl: string = 'https://anime-db.p.rapidapi.com/anime';


  constructor(
    private http: HttpClient
  ){}

  getData(): Observable<any> {


    // return this.http.get(`https://res.cloudinary.com/ddhbmaze5/raw/upload/data_tvprlt.json`);

    // Define headers
    const headers = new HttpHeaders({
      'X-RapidAPI-Key': 'f5905f5e51msh398d7117ef20a51p10eac5jsn462febe63576',
      'X-RapidAPI-Host': 'anime-db.p.rapidapi.com'
    });

    const params = new HttpParams()
      .set('page', '1')
      .set('size', '10')
      .set('sortBy', 'ranking')
      .set('sortOrder', 'asc');

    
    return this.http.get<any>(this.apiUrl, { headers, params });
  }

}