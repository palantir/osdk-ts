import{f as p,j as e}from"./iframe-BIQDpA0w.js";import{O as i}from"./object-table-RXAbVnBZ.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-CAkujj7t.js";import"./Table-Ce68YxbR.js";import"./index-QJcQchwi.js";import"./Dialog-D3VIN7AC.js";import"./cross-BhokxWW9.js";import"./svgIconContainer-Beiwk1zG.js";import"./useBaseUiId-HWzj2ccw.js";import"./InternalBackdrop-DMwmGhme.js";import"./composite-DWMEotDY.js";import"./index-Il0_IPc9.js";import"./index-DPEDKbeA.js";import"./index-BIXocC3w.js";import"./useEventCallback-BzVAB-mp.js";import"./SkeletonBar-B43s3nN1.js";import"./LoadingCell-DPwqXjlB.js";import"./ColumnConfigDialog-DxlsVkfp.js";import"./DraggableList-B4lvsNU6.js";import"./search-BU70SvPR.js";import"./Input-C1BIZDwN.js";import"./useControlled-JCzKMRhN.js";import"./Button-CwWS2Nno.js";import"./small-cross-CBUOmFXX.js";import"./ActionButton-DMzTeECz.js";import"./Checkbox-CTBZlszI.js";import"./useValueChanged-C1ElPd55.js";import"./CollapsiblePanel-DHXJGM_8.js";import"./MultiColumnSortDialog-DiKXAdpQ.js";import"./MenuTrigger-BCcyAoA5.js";import"./CompositeItem-k0wax-H2.js";import"./ToolbarRootContext-Cd2qP7C_.js";import"./getDisabledMountTransitionStyles-DLEuvAo9.js";import"./getPseudoElementBounds-DI-soIk4.js";import"./chevron-down-C5in3kf4.js";import"./index-FeoDYKMl.js";import"./error-D2lGBY9x.js";import"./BaseCbacBanner-TNEe3l7I.js";import"./makeExternalStore-DY4la4Jo.js";import"./Tooltip-DtFYkYWu.js";import"./PopoverPopup-CbUhKq8w.js";import"./debounce-1gOgvEv_.js";import"./useOsdkClient-CTsijBB9.js";import"./tick-CECUkR10.js";import"./DropdownField-7skf6f3x.js";import"./isEqual-BO1Nngw8.js";import"./withOsdkMetrics-BMxdO0Ca.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
  { locator: { type: "property", id: "fullName" } },
  { locator: { type: "property", id: "department" } },
  // MANDATORY marking — rendered as one banner per marking
  { locator: { type: "property", id: "classificationMarking" } },
  // CBAC marking — rendered with CbacBanner
  { locator: { type: "property", id: "clearanceMarking" } },
];

<ObjectTable objectType={Employee} columnDefinitions={columnDefinitions} />`}}},render:a=>e.jsx("div",{style:{height:480},children:e.jsx(i,{...a})})};var t,o,n;r.parameters={...r.parameters,docs:{...(t=r.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    objectType: Employee,
    columnDefinitions: [{
      locator: {
        type: "property",
        id: "fullName"
      }
    }, {
      locator: {
        type: "property",
        id: "department"
      }
    }, {
      locator: {
        type: "property",
        id: "classificationMarking"
      }
    }, {
      locator: {
        type: "property",
        id: "clearanceMarking"
      }
    }]
  },
  parameters: {
    docs: {
      source: {
        code: \`const columnDefinitions = [
  { locator: { type: "property", id: "fullName" } },
  { locator: { type: "property", id: "department" } },
  // MANDATORY marking — rendered as one banner per marking
  { locator: { type: "property", id: "classificationMarking" } },
  // CBAC marking — rendered with CbacBanner
  { locator: { type: "property", id: "clearanceMarking" } },
];

<ObjectTable objectType={Employee} columnDefinitions={columnDefinitions} />\`
      }
    }
  },
  render: args => <div style={{
    height: 480
  }}>
      <ObjectTable {...args} />
    </div>
}`,...(n=(o=r.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};const nr=["MarkingColumns"];export{r as MarkingColumns,nr as __namedExportsOrder,or as default};
