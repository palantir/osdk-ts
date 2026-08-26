# Blueprint gap analysis

## Status

This branch is an intentionally aggressive experiment. `@osdk/react-components`
uses Blueprint 6 components directly and removes `@base-ui/react` plus shallow
OSDK wrappers. It is not a compatibility-preserving migration.

The package bundles `normalize.css`, Blueprint Core, Datetime, and Select CSS in
`@osdk/react-components/styles.css`. The tested dependency set is:

- `@blueprintjs/core` 6.18.0
- `@blueprintjs/datetime` 6.2.4
- `@blueprintjs/icons` 6.13.0
- `@blueprintjs/select` 6.3.4

React 17 is no longer in the peer dependency range; React 18 or 19 is required.

## What Blueprint replaces

| OSDK surface                                                                      | Blueprint implementation                            |
| --------------------------------------------------------------------------------- | --------------------------------------------------- |
| Text field                                                                        | `InputGroup`                                        |
| Text area                                                                         | `TextArea`                                          |
| Number field                                                                      | `NumericInput`                                      |
| File field                                                                        | `FileInput`                                         |
| Radio field                                                                       | `RadioGroup`                                        |
| Boolean field                                                                     | `Switch`                                            |
| Date/time field                                                                   | `DateInput`                                         |
| Date range field                                                                  | `DateRangeInput`                                    |
| Single and multiple selection                                                     | `Select`, `Suggest`, `MultiSelect`, and `QueryList` |
| Labels, helper text, and validation intent                                        | `FormGroup`                                         |
| Sections and tags                                                                 | `Section`, `SectionCard`, and `Tag`                 |
| Buttons, callouts, checkboxes, dialogs, popovers, tooltips, and loading skeletons | Blueprint Core directly                             |

The action-form `DropdownField` remains as a domain adapter because it maps OSDK
values, asynchronous item loading, equality, and portal configuration onto
Blueprint `Select` and `MultiSelect`. It is not a visual primitive.

Removed OSDK primitives include `ActionButton`, `Callout`, `Checkbox`, `Dialog`,
`SearchBar`, `SearchableMenu`, `Select`, `Switch`, `Tooltip`, `SkeletonBar`, all
custom calendar components, and the individual text, number, file, radio, and
switch action-form fields. The `./primitives` package export is also removed.

`@osdk/cbac-components` still imports that package export. It is intentionally
outside this react-components-only experiment, so its typecheck fails until it
is migrated to Blueprint or the old compatibility surface is restored. The
whole monorepo therefore does not typecheck on this branch even though
`@osdk/react-components` does.

## Confirmed compatibility losses

### Date and time values

Blueprint 6 `DateInput` has an ISO-string controlled value boundary, while OSDK
action parameters use `Date`. `FormFieldRenderer` therefore converts `Date` to
`toISOString()` and converts emitted strings back with `new Date(...)`. This can
change timezone and wall-clock semantics compared with the deleted OSDK picker.

Blueprint has analogous formatting, parsing, range, shortcut, and time-picker
props, but this experiment no longer guarantees the old, test-pinned behavior
for invalid drafts, Enter/Escape commits, focus restoration, the Today/Clear
action bar, or preservation of edited wall-clock time across date changes.

`DateRangeInput` replaces the bespoke two-input range editor. Blueprint supports
single-day ranges and time precision, but its focus order, invalid-range drafts,
close-on-selection behavior, and time controls differ from the deleted editor.

Blueprint's default string locale triggers a runtime dynamic import. Vite cannot
resolve that variable import reliably, so the ActionForm, FilterList, and
ObjectTable date adapters pass the `enUS` date-fns locale object by default.
Applications can still provide another locale object, but passing a locale code
reintroduces the bundler-dependent loader.

### Files

Blueprint `FileInput` styles a native file input but does not own a controlled
`File` value. OSDK can provide display text and `hasSelection`, but it cannot
restore the native selection or clear it through a first-class Blueprint API.
The deleted field's separate keyboard-operable Browse and Clear controls are
gone. The OSDK `maxSize` validation rule is also removed; `accept` and `multiple`
now belong in Blueprint's `inputProps`.

### Form behavior

Blueprint `FormGroup` always renders its `helperText` below the control. The
deleted OSDK field could instead place rich helper content behind an interactive
label popover. This experiment removes `helperTextPlacement` and always uses the
first-class `FormGroup` layout; applications that need interactive helper content
must compose Blueprint `Popover` themselves.

The edited and required markers now use `FormGroup.labelInfo`, so their text,
spacing, and casing follow Blueprint rather than the deleted OSDK field chrome.

Blueprint's loading `Button` hides its visible text with `visibility: hidden`,
which removes that text from the accessible name and leaves the spinner's
generic "loading" label. The form submit adapter must set an explicit
`aria-label` to preserve "Submitting…" for assistive technology.

### Selection

Blueprint `MultiSelect` always includes a query input. It has no `filterable`
prop equivalent to `Select`, so non-searchable OSDK multi-selects use a read-only
tag input. Server-side status and infinite-scroll content require a custom
`itemListRenderer`; there are no first-class loading or footer slots.

The direct `Select` action-form field does not provide the old single-selection
clear affordance. Filter-list single selection uses `Suggest`, whose input and
selection-clearing behavior differs from the deleted Base UI combobox.

The filter-list `inline` multi-select now uses Blueprint `QueryList` and
`InputGroup`; its list markup, keyboard interaction, and spacing are Blueprint's
rather than the previous combobox layout.

### Portals and overlays

Blueprint's portal container is typed as `HTMLElement`. The existing OSDK
`PortalContainer` also accepts `ShadowRoot`, so `resolvePortalContainerElement`
must currently drop ShadowRoot containers and fall back to Blueprint's default
portal. Scoped themes inside a shadow root therefore do not cover those popups.
Blueprint also requires the element during render; a `RefObject` whose `current`
value is assigned during commit falls back to the default portal until some other
state change causes a rerender. `BaseForm` dropdowns therefore portal to the
document body on their initial render rather than back into the form element.

Blueprint popovers and dialogs own outside-click dismissal, backdrops, focus,
and Escape handling. The deleted full-viewport OSDK dismiss layers and Base UI
modal semantics are not reproduced. Nested popovers may therefore dismiss or
restore focus differently.

### Visuals and theming

Control height, padding, typography, focus rings, popover elevation, calendar
geometry, and dark-mode colors now come from Blueprint. Visual regressions are
expected and are part of this experiment.

Core controls have started adopting `--bp-*` tokens, but Datetime and parts of
Core/Select still compile Sass variables and palette values into component CSS.
Those values cannot be changed at runtime without selector overrides or a
custom Blueprint Sass build. This is the main blocker to making Blueprint the
only visual layer for a runtime-themeable OSDK component library.

Blueprint `TextArea` has no minimal or unframed variant. Compound controls such
as the chat composer must override its inset border so the outer composition can
own a single focus surface.

### Packaging

`styles.css` now includes the complete Normalize, Core, Datetime, and Select
styles rather than only the rules used by a consumer. Before minification, the
current artifact is about 843 KiB, including OSDK component CSS. Applications that
already load Blueprint can also ship the same global `.bp6-*` rules twice or
resolve a different Blueprint version than this package. This experiment does
not provide component-level style entry points or deduplicate host styles.

## Proposed Blueprint work

1. **Complete runtime tokens across Core, Datetime, and Select.** Expose every
   control's foreground, surface, border, focus, spacing, radius, typography,
   shadow, calendar range, and disabled state through documented `--bp-*`
   variables. Portaled surfaces must set both foreground and background tokens.
2. **Add a controlled file-selection presentation API.** `FileInput` should
   support a current filename/selection renderer plus an optional clear action
   (`clearButtonText`, accessible label, and `onClear`) without pretending the
   browser's native `FileList` can be assigned.
3. **Support deferred and `ShadowRoot` portal containers.** Widen Portal,
   Popover, Tooltip, Dialog, and Select-family container types to accept a
   `ShadowRoot`, ref, or lazy resolver, and test theme inheritance, outside-click
   detection, and focus restoration for each container form.
4. **Make `MultiSelect` filtering optional.** Add `filterable` and allow the tag
   input to remain fully keyboard-operable when search is disabled.
5. **Add async list states.** Give `Select`, `Suggest`, and `MultiSelect`
   first-class `loading`, `noResults`, `status`, and list-footer/sentinel slots
   so consumers do not have to replace `itemListRenderer`.
6. **Offer an explicit Date value adapter.** Either accept `Date` as a controlled
   value or publish a small, typed adapter that defines timezone and precision
   semantics for `Date`/ISO conversion. The existing migration utilities help
   one-way migrations but do not remove the domain boundary.
7. **Exercise nested overlay contracts.** Add supported examples and tests for
   Select/DateInput inside Dialog and Popover, covering outside clicks, Escape,
   Tab boundaries, body scroll, and focus restoration.
8. **Offer smaller and layer-safe CSS entry points.** Let libraries include the
   Core, Datetime, and Select rules they use without duplicating a host
   application's Blueprint CSS, and document the supported cascade-layer order.
9. **Make locale loading bundler-safe.** Export locale-object helpers or replace
   the variable dynamic import so `DateInput` and `DateRangeInput` do not emit a
   runtime error under Vite when given a locale code.
10. **Add an unframed text input variant.** Let `InputGroup` and `TextArea`
    participate in compound controls without requiring consumers to override
    the built-in background, radius, and inset border.
11. **Preserve loading button names.** Keep the button's action-specific
    accessible name when its visible text is hidden for the loading spinner.

## Visual verification

Representative Storybook states were compared manually against the branch's
`main` base for ActionForm, FilterList, ObjectTable, CbacPicker, AipAgentChat,
and the PDF viewer search bar. Avoidable regressions found during that pass were
fixed: form controls now fill their field, listogram rows retain their compact
horizontal layout, compact CBAC markings use Blueprint's small size, and the
chat composer keeps one visual border. The before/after screenshots are local QA
artifacts and are not checked in. Blueprint-specific typography, required-state
labels, control geometry, and focus styling remain intentional differences.
