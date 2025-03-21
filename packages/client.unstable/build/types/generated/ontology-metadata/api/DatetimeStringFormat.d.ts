/**
* A valid format string composed of the following subset of patterns, taken from the java DateTimeFormatter docs:
*
* ```
* Symbol  Meaning                     Presentation      Examples
* ------  -------                     ------------      -------
* y       year-of-era                 year              2004; 04
* M       month-of-year               number/text       7; 07; Jul; July; J
* d       day-of-month                number            10
* E       day-of-week                 text              Tue; Tuesday; T
* e       localized day-of-week       number/text       2; 02; Tue; Tuesday;
*
* a       am-pm-of-day                text              PM
* h       clock-hour-of-am-pm (1-12)  number            12
* H       hour-of-day (0-23)          number            0
* m       minute-of-hour              number            30
* s       second-of-minute            number            55
* S       fraction-of-second          fraction          97
*
* z       time-zone name              zone-name         Pacific Standard Time; PST
* Z       zone-offset                 offset-Z          +0000; -0800; -08:00
* ```
*
* And the following separators: "/", ":", "-", "." and " " (single space).
*/
export type DatetimeStringFormat = string;
