import { NgModule } from "@angular/core";
import { HomeComponent } from "./services/home.component";
import { CommonModule } from "@angular/common";
import { CardComponent } from "./components/card/card.component";
import { CoreModule } from "../../core/core.module";

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, CardComponent, CoreModule],
  exports: [HomeComponent],
})
export class HomeModule {}