---
"@osdk/react-components": minor
---

Migrate the date components (DatePicker, DateRangePicker, calendars) from react-day-picker v8 to v9 and bump date-fns v2 to v4; remove the unused date-fns-tz dependency. react-day-picker v9 no longer requires date-fns as a peer dependency, so consumers on @base-ui/react's date-fns v4 optional peer no longer hit a version conflict. Public props are unchanged.
