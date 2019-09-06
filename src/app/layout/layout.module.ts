import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HeaderComponent } from './components/header/header.component';
import { MenuNavComponent } from './menu-nav/menu-nav.component';


import { MatToolbarModule, MatIconModule, MatCheckboxModule} from '@angular/material';


import {MatTabsModule} from '@angular/material/tabs';
import {MatMenuModule} from '@angular/material/menu';
import {MatSelectModule} from '@angular/material/select';
// import { MenuNavComponent } from './menu-nav/menu-nav.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {NgbPaginationModule, NgbAlertModule} from '@ng-bootstrap/ng-bootstrap';

import { DatePickerAllModule, DateTimePickerAllModule } from '@syncfusion/ej2-angular-calendars';
import { DatePickerModule } from '@syncfusion/ej2-angular-calendars';
import { ScheduleAllModule,  } from '@syncfusion/ej2-angular-schedule';

import { AutoCompleteModule } from '@syncfusion/ej2-angular-dropdowns';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MultiSelectAllModule } from '@syncfusion/ej2-angular-dropdowns';
import {MatExpansionModule} from '@angular/material/expansion';
@NgModule({
    imports: [
        CommonModule,
        LayoutRoutingModule,
        TranslateModule,
        NgbDropdownModule,
        MatToolbarModule,

        MatTabsModule,
         MatMenuModule,
        MatIconModule,
        MatSelectModule,
        NgbModule,
        NgbPaginationModule,
        NgbAlertModule,
        MatCheckboxModule,


        DateTimePickerAllModule,
        DatePickerAllModule,
        DatePickerModule,
        ScheduleAllModule,
        CommonModule,

        AutoCompleteModule,
         MatAutocompleteModule,
         MatExpansionModule,
         MultiSelectAllModule

    ],
    declarations: [LayoutComponent, SidebarComponent, HeaderComponent, MenuNavComponent]
})
export class LayoutModule {}
