import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CatService {
  private apiUrl = 'https://catbreedersim.8vsebhnlikoo8.us-east-1.cs.amazonlightsail.com/api/RubbleRousersDemo'; // Replace with your API URL

  constructor(private http: HttpClient) {}

  // Get dropdown options
  getDropdownOptions(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/dropdown-options`);
  }

  // Post cat choices and get kittens
  breedCats(catChoices: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/breed-cats`, catChoices);
  }

  getCat(catChoice: any): Observable<any> {
    var cats =  this.http.post<any>(`${this.apiUrl}/cat-image`, catChoice, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    });
    console.log(cats)
    return cats
  }

}
