import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { addBoat } from 'src/app/store/actions/boats.actions';
import { CatamaranBoat, VoilierBoat } from 'src/app/store/boats.model';

@Component({
	selector: 'app-add-boat',
	templateUrl: './add-boat.component.html',
	styleUrls: ['./add-boat.component.scss'],
})
export class AddBoatComponent {
	addForm: FormGroup;
	currentStep: number = 0;
	constructor(private store: Store, private router: Router) {
		this.addForm = new FormGroup({
			type: new FormControl('', Validators.required),
			longeur: new FormControl(''),
			largeur: new FormControl(''),
			tirant_eau: new FormControl(''),
			equipage: new FormControl(false),
			annexe: new FormControl(false),
			foil: new FormControl(false),
		});
	}

	addNewBoat(): void {
		const type: string = this.addForm.get('type')?.value;
		let boat: any;
		if (type === 'Voilier') {
			boat = new VoilierBoat(
				this.addForm.get('longeur')?.value,
				this.addForm.get('largeur')?.value,
				this.addForm.get('tirant_eau')?.value,
				this.addForm.get('equipage')?.value,
				this.addForm.get('annexe')?.value,
				this.addForm.get('foil')?.value
			);
		}
		if (type === 'Catamaran') {
			boat = new CatamaranBoat(
				this.addForm.get('longeur')?.value,
				this.addForm.get('largeur')?.value,
				this.addForm.get('tirant_eau')?.value,
				this.addForm.get('equipage')?.value,
				this.addForm.get('annexe')?.value
			);
		}
		this.store.dispatch(addBoat({ boat }));
		this.router.navigateByUrl('');
	}

	previousStep(): void {
		this.currentStep -= 1;
	}

	nextStep(): void {
		this.currentStep += 1;
	}
}
