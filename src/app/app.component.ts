import { Component } from '@angular/core';
import { AutenticacionService } from './services/autenticacion.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'Seguimiento Laboral';

    public constructor(private autenticacionService: AutenticacionService) {

        this.autenticacionService.logIn();

    }

    ngOnDestroy(): any {
        this.autenticacionService.logOut();
    }
}
