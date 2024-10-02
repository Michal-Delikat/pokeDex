import {Component, inject, OnInit} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {PokemonPageComponent} from "./components/pokemon-page/pokemon-page.component";
import {Observable} from "rxjs";
import {ApiService} from "./services/api-service/api.service";
import {Pokemon} from "./models/pokemon.model";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PokemonPageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  private apiService = inject(ApiService)

  public pokemon$: Observable<Pokemon> = this.apiService.getPokemonData();

  public ngOnInit() {
    this.pokemon$.subscribe((pokemon: Pokemon) => console.log(pokemon));
  }


}
