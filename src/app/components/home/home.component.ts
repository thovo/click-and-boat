import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { BoatsState } from 'src/app/store/states/boats.state';
import { tap } from 'rxjs/operators';
import { CatamaranBoat, VoilierBoat } from 'src/app/store/boats.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  boats$: Observable<BoatsState>;
  boats: Array<CatamaranBoat | VoilierBoat> = [];
  searchText: string = '';
  filteredBoats: Array<CatamaranBoat | VoilierBoat> = [];

  constructor(private store: Store<{ boats: BoatsState }>) {
    this.boats$ = this.store.select('boats').pipe(
      tap((state) => {
        this.boats = state.boats;
        this.updateTableResult();
      })
    );
  }

  ngOnInit(): void {}

  updateTableResult(): void {
    this.filteredBoats = [];
    if (this.searchText === '') {
      this.filteredBoats = [...this.boats];
    } else {
      this.boats.forEach((boat) => {
        let found = false;
        const searchText = this.searchText.toLowerCase();
        Object.entries(boat).forEach(([key, value]) => {
          if (
            value.toString().toLowerCase().includes(searchText) ||
            (['equipage', 'annexe', 'foil'].indexOf(key) > 0 &&
              ((value && 'oui'.includes(searchText)) ||
                (!value && 'non'.includes(searchText))))
          ) {
            found = true;
          }
        });
        if (found) {
          this.filteredBoats.push(boat);
        }
      });
    }
  }
}
