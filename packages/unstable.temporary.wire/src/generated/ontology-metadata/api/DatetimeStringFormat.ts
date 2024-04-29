/*
 * Copyright 2023 Palantir Technologies, Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * NOTE THAT THIS FORMAT IS DISABLED AND CANNOT BE USED.
 *
 * A valid format string composed of the following subset of patterns, taken from the java DateTimeFormatter docs:
 *
 * ```
 * Symbol  Meaning                     Presentation      Examples
 * ------  -------                     ------------      -------
 * y       year-of-era                 year              2004; 04
 * M       month-of-year               number/text       7; 07; Jul; July; J
 * d       day-of-month                number            10
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
