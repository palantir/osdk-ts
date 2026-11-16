/*
 * Copyright 2026 Palantir Technologies, Inc. All rights reserved.
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

import { BaseObjectMap } from "@osdk/react-components/experimental/object-map";
import { ActionButton } from "@osdk/react-components/primitives";
import { useCallback, useMemo, useState } from "react";

import {
  DEMO_OFFICES,
  officeFeature,
  STREET_MAP_STYLE,
} from "./officeMapFixtures.js";

import styles from "./OfficeMapPrototype.module.css";

const NO_SELECTION: readonly string[] = [];

export function OfficeMapPrototype(): React.JSX.Element {
  const [query, setQuery] = useState("");
  const [capacityOnly, setCapacityOnly] = useState(false);
  const [showStreetMap, setShowStreetMap] = useState(false);
  const [selectedIds, setSelectedIds] = useState(NO_SELECTION);

  const offices = useMemo(() => {
    const needle = query.trim().toLocaleLowerCase();
    return DEMO_OFFICES.filter(
      (office) =>
        `${office.name} ${office.city}`.toLocaleLowerCase().includes(needle) &&
        (!capacityOnly || office.people / office.seats >= 0.9),
    );
  }, [query, capacityOnly]);
  const features = useMemo(() => offices.map(officeFeature), [offices]);
  const visibleSelection = useMemo(
    () =>
      selectedIds.filter((id) => offices.some((office) => office.id === id)),
    [selectedIds, offices],
  );
  const selected = offices.filter((office) =>
    visibleSelection.includes(office.id),
  );
  const clearSelection = useCallback(() => setSelectedIds(NO_SELECTION), []);

  return (
    <main className={styles.app}>
      <header className={styles.header}>
        <div>
          <p className={styles.eyebrow}>Office planning · sample data</p>
          <h1>Find room to grow</h1>
          <p>
            Explore the office network and review sites approaching capacity.
          </p>
        </div>
        <ActionButton
          onClick={clearSelection}
          disabled={visibleSelection.length === 0}
        >
          Clear selection
        </ActionButton>
      </header>

      <div className={styles.filters}>
        <label className={styles.search}>
          Find an office or city
          <input
            type="search"
            value={query}
            onChange={(event) => {
              setQuery(event.target.value);
              setSelectedIds(NO_SELECTION);
            }}
            placeholder="Try Boston"
          />
        </label>
        <label className={styles.checkbox}>
          <input
            type="checkbox"
            checked={capacityOnly}
            onChange={(event) => {
              setCapacityOnly(event.target.checked);
              setSelectedIds(NO_SELECTION);
            }}
          />
          At least 90% occupied
        </label>
        <span role="status">
          {offices.length} of {DEMO_OFFICES.length} offices shown
        </span>
        <label className={styles.checkbox}>
          <input
            type="checkbox"
            checked={showStreetMap}
            onChange={(event) => setShowStreetMap(event.target.checked)}
          />
          Street basemap (loads OpenStreetMap tiles)
        </label>
      </div>

      <div className={styles.workspace}>
        <section className={styles.mapPanel} aria-label="Office locations">
          <BaseObjectMap
            features={features}
            mapStyle={showStreetMap ? STREET_MAP_STYLE : undefined}
            ariaLabel="Office planning map"
            selectedIds={visibleSelection}
            onSelectionChanged={setSelectedIds}
            className={styles.map}
          />
          <p className={styles.mapCaption}>
            Select a point or an office below. Ctrl/Cmd-click selects several.
            {!showStreetMap &&
              " Map tiles are off. Turn on Street basemap to show streets and place names."}
          </p>
        </section>

        <aside className={styles.details} aria-label="Selected office details">
          <h2>
            {selected.length === 0 ? "Review a location" : "Selected offices"}
          </h2>
          {selected.length === 0 && (
            <p>
              Select an office on the map or in the list to review its capacity.
            </p>
          )}
          {selected.map((office) => (
            <article key={office.id}>
              <h3>{office.name}</h3>
              <p>{office.city}</p>
              <dl>
                <dt>People</dt>
                <dd>{office.people}</dd>
                <dt>Seats</dt>
                <dd>{office.seats}</dd>
                <dt>Available seats</dt>
                <dd>{office.seats - office.people}</dd>
              </dl>
              <p>
                {office.people / office.seats >= 0.9
                  ? "Review capacity at this location."
                  : "This office has room for additional people."}
              </p>
            </article>
          ))}
        </aside>
      </div>

      <section className={styles.officeList} aria-label="Office list">
        <h2>Office network</h2>
        <table>
          <caption>Selection is shared with the map and details.</caption>
          <thead>
            <tr>
              <th scope="col">Office</th>
              <th scope="col">City</th>
              <th scope="col">People / seats</th>
              <th scope="col">Available seats</th>
            </tr>
          </thead>
          <tbody>
            {offices.map((office) => (
              <tr
                key={office.id}
                data-selected={visibleSelection.includes(office.id)}
              >
                <th scope="row">
                  <ActionButton
                    appearance="minimal"
                    aria-pressed={visibleSelection.includes(office.id)}
                    onClick={() => setSelectedIds([office.id])}
                  >
                    {office.name}
                  </ActionButton>
                </th>
                <td>{office.city}</td>
                <td>
                  {office.people} / {office.seats}
                </td>
                <td>{office.seats - office.people}</td>
              </tr>
            ))}
          </tbody>
        </table>
        {offices.length === 0 && <p>No offices match these filters.</p>}
      </section>
      <p className={styles.footer}>
        Prototype for feedback · all offices and capacity figures are synthetic.
      </p>
    </main>
  );
}
