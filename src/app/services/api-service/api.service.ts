import {inject, Injectable} from '@angular/core';
import {map, Observable, of} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Pokemon} from "../../models/pokemon.model";



@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private httpService: HttpClient = inject(HttpClient);

  public getPokemonData(): Observable<Pokemon> {
    return this.httpService.get<any>('https://pokeapi.co/api/v2/pokemon/bulbasaur').pipe(map((response) => ({
      name: response.name,
      height: response.height,
      weight: response.weight,
      id: response.id,
    })));
  }
}
