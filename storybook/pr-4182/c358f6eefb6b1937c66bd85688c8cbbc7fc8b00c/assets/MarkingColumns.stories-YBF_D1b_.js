import{f as p,j as e}from"./iframe-7g13v2jN.js";import{O as i}from"./object-table-C_lh3bVp.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-CclsuuMH.js";import"./Table-CNrYfnyS.js";import"./index-BgJ1FFdq.js";import"./Dialog-B8lGpi4M.js";import"./cross-OMCp2mi_.js";import"./svgIconContainer-DukTjdz5.js";import"./useBaseUiId-C7XxkQYq.js";import"./InternalBackdrop-DWiXKM0G.js";import"./composite-B2zIsJ0R.js";import"./index-f0-b4s2g.js";import"./index-DlhSwHJN.js";import"./index-SelFJin-.js";import"./useEventCallback-5D6oIoIr.js";import"./SkeletonBar-DtbFqHqp.js";import"./LoadingCell-ziqIUc6u.js";import"./ColumnConfigDialog-CbLCeqM4.js";import"./DraggableList-P95jNEJk.js";import"./search-sAV5xLcY.js";import"./Input-CaqMv5Lb.js";import"./useControlled-B23KZW1l.js";import"./Button-Apw5WzKr.js";import"./small-cross-DO2vuBir.js";import"./ActionButton-BIcuEm-R.js";import"./Checkbox-Bf-1hh15.js";import"./useValueChanged-D9FXoZkK.js";import"./CollapsiblePanel-DdzzFDVY.js";import"./MultiColumnSortDialog-B3gYDQCx.js";import"./MenuTrigger-Aj7zB13g.js";import"./CompositeItem-B-yStqfF.js";import"./ToolbarRootContext-CE2CALLi.js";import"./getDisabledMountTransitionStyles-CW70_K2g.js";import"./getPseudoElementBounds-CunRcIqO.js";import"./chevron-down-CFQZfM99.js";import"./index-BfjN1GaO.js";import"./error-D4UXhq88.js";import"./BaseCbacBanner-DuFi7CbY.js";import"./makeExternalStore-Bri8hEZ2.js";import"./Tooltip-Dnj9fxoM.js";import"./PopoverPopup-BXniSYAa.js";import"./debounce-BEFTFyoa.js";import"./useOsdkClient-UG4YR_Hh.js";import"./tick-CRrNOkiB.js";import"./DropdownField-D0tQzFI8.js";import"./isEqual-CQ1Vajmu.js";import"./withOsdkMetrics-CxyFHZKX.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
