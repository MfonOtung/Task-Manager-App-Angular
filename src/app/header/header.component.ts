import { Component } from "@angular/core";

@Component({
    selector: 'app-header',
    //standalone: true,
    standalone: false, //or totally removed
    templateUrl: './header.component.html',
    styleUrl: './header.component.css'
})
export class HeaderComponent {}