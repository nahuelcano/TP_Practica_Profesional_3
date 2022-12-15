import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
// Materials Imports
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatMenuModule } from '@angular/material/menu';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MatTable, MatTableModule } from '@angular/material/table';
import {MatDialogModule} from '@angular/material/dialog';
const modules = [
	MatToolbarModule,
	MatTabsModule,
	MatButtonModule,
	MatSlideToggleModule,
	MatIconModule,
	MatTooltipModule,
	MatSidenavModule,
	MatListModule,
	MatDividerModule,
	MatCardModule,
	MatChipsModule,
	MatFormFieldModule,
	MatInputModule,
	MatSnackBarModule,
	MatProgressSpinnerModule,
	MatMenuModule,
	FormsModule,
	MatTableModule,
	MatDialogModule,
	
	
]
@NgModule({
	declarations: [],
	imports: [
		ReactiveFormsModule,
		CommonModule,
		
		...modules
	],
	exports: [...modules],
})
export class MaterialModule {}
