import { Component, OnInit } from '@angular/core';
import { WidgetsService} from '../widgets.service'

@Component({
  selector: 'app-widget-list',
  templateUrl: './widget-list.component.html',
  styleUrls: ['./widget-list.component.scss']
})
export class WidgetListComponent implements OnInit {
  widgets

  constructor(
    private WidgetsService: WidgetsService
  ) { }

  ngOnInit() {
    this.widgets = this.WidgetsService.getWidgets();
  }



}
