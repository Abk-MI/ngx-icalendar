
# Angular Calendar

The ngx-icalendar makes it easy to manage your calendar with angular, less configuration with more options:

* Create your customized calendar
* Support multiple and single date
* Support three language ENGLISH, FRENCH AND ARABIC
* Set your deadlines and dates just in one click!
* Support all browsers


<img align="center" alt="Angular calendar" src="https://i.imgur.com/0nHDMp5.gif" width="100%">

## Compatibility
Your project needs to use Angular CLI 14.1.0 or later.

## User guide

**Configuration :**


| Parameter             | Description                                                                                   | Type             | Default Value     |  Example values               |  Format        |
| :--------             | :----------                                                                                   | :----            | :--------         |  :--------                    |  :------       |
| `multiple`            | Use the calendar as a multiple date picker or unique date.                                              | `boolean`        | true              |                               |                |
| `editable`            | Allows the selection of the dates of the month.                                                       | `boolean`        | true              |                               |                |
| `allowClear`          | Set or remove clear button                                                                    | `boolean`        | true              |                               |                |
| `countSelected`       | Pick the date and view how many days have been selected.                                                 | `boolean`        | true              |                               |                |
| `changeButton`        | Enable or disable the Change Month & Year button.                                       | `boolean`        | true              |                               |                |
| `disablePickerFROM`   | Set the number of days that will be disabled from today                                       | `number`         | 0                 |                               |                |
| `language`            | Specify the language for the month and days of the week.                                                 | `string`         | "FR"              | "AR" or "EN"                  |                |
| `disabledPickerRange` | Allows you to disable picker in the future, past days or ignore the disable by setting to `none`   | `string`         | "none"            | "future" or "past"            |"Day/Month/Year"|
| `disabledDays`        | Allows you to custom disabled days                                  | `Array<string>`  | []                | ["1/12/2022","31/12/2022"]    |"Day/Month/Year"|
| `selectedDays`        | Set default selected days                                                                     | `Array<string>`  | []                | ["20/12/2022","22/12/2022"]   |"Day/Month/Year"|
| `holidays`            | Holidays is the list of disabled days applied for all years                                       | `Array<string>`  | []                | ["25/12","26/12","9/11"]      |"Day/Month"     |


## Usage/Examples

**app.component.html**

* Use by adding <ngx-icalendar/> selector.
* The target event name is pickerSelected for getting days selected array.
* Pass your custom parameter to config input.
```html
<div class="container">
    <ngx-icalendar
        [config]="myConfig"
        (pickerSelected)="selectedDays($event)"
    ></ngx-icalendar>
</div>
```
**app.component.ts**
```javascript
...
export class AppComponent {
    ...
    myConfig = {
        multiple: false,
        editable: true,
        changeButton: false,
        disablePickerFROM: -1,
        disabledDays: ['25/11/2022'],
        selectedDays: ['26/11/2022', '27/11/2022'],
        holidays: ['27/11', '28/11'],
        language: 'AR',
        disabledPickerRange: 'none',
        allowClear: true,
        countSelected: true
    };

    selectedDays(event: Array<string>) {
        console.log(event);
    }

    ...
}
```

**app.module.ts**
```javascript
...
import { NgxIcalendarModule } from 'ngx-icalendar';

@NgModule({
  declarations: [
    ...
  ],
  imports: [
    ...,
    NgxIcalendarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```


## Custom styling

If you want to custom ngx-icalendar styling related to your design add and update the following lines:

**app.component.css**
```css

::ng-deep ngx-icalendar .calendar-wrapper {
    background-color: #f3f0f172 !important;
    border-radius: 20px !important;
    border-color: #f3f0f1;
}

::ng-deep ngx-icalendar .calendar .selected {
    background-color: #f3f0f1 !important;
    box-shadow: inset -2px -2px 4px rgba(255, 255, 255, 0.5), 
                inset 4px 4px 8px rgba(0, 0, 0, 0.1);
    color: #333 !important;
}

::ng-deep ngx-icalendar .header-calendar {
    color: rgba(30, 34, 34, 0.5) !important;
    font-weight: 900 !important;
}

::ng-deep ngx-icalendar #btnPrev,
::ng-deep ngx-icalendar #btnPrevYear,
::ng-deep ngx-icalendar #btnNext,
::ng-deep ngx-icalendar #btnNextYear {
    color: rgba(30, 34, 34, 0.5) !important;
}

::ng-deep ngx-icalendar #btnClear,
::ng-deep ngx-icalendar #btnClear {
    color: rgb(255, 255, 255) !important;
    background-color: rgb(239, 65, 65) !important;
    border-color: rgb(239, 65, 65) !important;
}

@media (hover: hover) and (pointer: fine) {
    ::ng-deep ngx-icalendar #btnClear:hover {
        color: rgb(255, 255, 255) !important;
    }

    ::ng-deep ngx-icalendar #btnPrev:not(.disabled):hover,
    ::ng-deep ngx-icalendar #btnNext:not(.disabled):hover,
    ::ng-deep ngx-icalendar #btnNextYear:not(.disabled):hover,
    ::ng-deep ngx-icalendar #btnPrevYear:not(.disabled):hover {
        color: #333 !important;
    }

    ::ng-deep ngx-icalendar button .disabled:hover {
        color: #333 !important;
    }

    ::ng-deep ngx-icalendar .calendar .item:hover {
        background-color: #f3f0f1 !important;
        box-shadow: inset -2px -2px 4px rgba(255, 255, 255, 0.5), 
                    inset 4px 4px 8px rgba(0, 0, 0, 0.1);
        color: #333 !important;
    }
}
```

<img align="center" alt="Angular calendar custom styling" src="https://i.imgur.com/oixuxl2.gif" width="100%">
