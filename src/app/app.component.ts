import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ngx-icalendar';

  config1 = {
    multiple: false,
    editable: true,
    changeButton: false,
    disablePickerFROM: -1,
    disabledDays: ['25/11/2022'],
    selectedDays: ['26/11/2022', '27/11/2022'],
    holidays: ['27/11', '28/11'],
    language: 'ar',
    disabledPickerRange: 'none',
    allowClear: true,
    countSelected: true
  };

  config2 = {
    multiple: true,
    editable: true,
    changeButton: false,
    disablePickerFROM: 5,
    selectedDays: ['22/11/2022', '27/11/2022'],
    disabledDays: ['25/11/2022'],
    holidays: ['30/12'],
    language: 'EN',
    disabledPickerRange: 'none',
    allowClear: true,
    countSelected: true
  };

  config3 = {
    multiple: true,
    editable: true,
    changeButton: false,
    disablePickerFROM: 5,
    selectedDays: ['2/11/2022', '3/11/2022'],
    disabledDays: ['25/11/2022'],
    holidays: ['1/11'],
    language: 'fr',
    disabledPickerRange: 'none',
    allowClear: true,
    countSelected: true
  };

  SelectedDays1(event: Array<string>) {
    console.log(event);
  }
  SelectedDays2(event: any) {
    console.log(event);
  }
  SelectedDays3(event: any) {
    console.log(event);
  }
}
