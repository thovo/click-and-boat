import { Component, Input } from '@angular/core';
import { CatamaranBoat, VoilierBoat } from 'src/app/store/boats.model';

@Component({
	selector: 'app-table',
	templateUrl: './table.component.html',
	styleUrls: ['./table.component.scss'],
})
export class TableComponent {
	@Input() boats: Array<CatamaranBoat | VoilierBoat> = [];
}
