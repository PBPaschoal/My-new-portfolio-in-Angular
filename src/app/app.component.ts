import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponentComponent } from "./components/header-component/header-component.component";
import { FooterComponent } from "./components/footer/footer.component";
import { PrimeiraSectionComponent } from "./components/primeira-section/primeira-section.component";
import { NavbarHomeComponent } from "./components/navbar-home/navbar-home.component";
import { ContatosComponent } from "./components/contatos/contatos.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponentComponent, NavbarHomeComponent, PrimeiraSectionComponent, FooterComponent, ContatosComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Portfolio';
}