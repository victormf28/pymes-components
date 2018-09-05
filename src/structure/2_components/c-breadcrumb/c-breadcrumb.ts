import { Component, Input } from "@angular/core";

@Component({
  selector: 'c-breadcrumb',
  templateUrl: './c-breadcrumb.pug',
  styleUrls: ['./c-breadcrumb.sass']
})
export class CBreadcrumb {
  @Input() modifierDark: boolean = false;
  @Input() items: any;
}
