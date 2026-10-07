import{f as p,j as e}from"./iframe-DFY8VJiA.js";import{O as i}from"./object-table-DekiBxP9.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-DYQPoB0a.js";import"./Table-DTiKugCT.js";import"./index-Cyh0BAGo.js";import"./Dialog-C6OT_PSR.js";import"./cross-DhwePusw.js";import"./svgIconContainer-BC0JvcAN.js";import"./useBaseUiId-munBw4hb.js";import"./InternalBackdrop-CDbJypH3.js";import"./composite-DERqHqf8.js";import"./index-CFOVWCD1.js";import"./index-DkOv0cie.js";import"./index-1rFIUwlz.js";import"./useEventCallback-rvfsLwbm.js";import"./SkeletonBar-S-OgC9v2.js";import"./LoadingCell-CuGBYebr.js";import"./ColumnConfigDialog-CAp0azVM.js";import"./DraggableList-ZJaTW-ku.js";import"./search-DmLazW2P.js";import"./Input-ZKaLnGto.js";import"./useControlled-DlDk3rjW.js";import"./Button-Dd-6Wm_t.js";import"./small-cross-9So2KQCe.js";import"./ActionButton-CIEBqQXT.js";import"./Checkbox-CyjU-GZo.js";import"./useValueChanged-BzxLxRS9.js";import"./CollapsiblePanel-DTjhJsLZ.js";import"./MultiColumnSortDialog-0VWQENmH.js";import"./MenuTrigger-Cp__wkNW.js";import"./CompositeItem-DHHY_NUU.js";import"./ToolbarRootContext-C-PsSYTx.js";import"./getDisabledMountTransitionStyles-DDDCI_7I.js";import"./getPseudoElementBounds-jNlhs2VS.js";import"./chevron-down-C0e9hGKt.js";import"./index-CO5nCbUA.js";import"./error-RuEwtCs3.js";import"./BaseCbacBanner-Dfw7Ww54.js";import"./makeExternalStore-Beeee7G7.js";import"./Tooltip-CDkwFccO.js";import"./PopoverPopup-CR5gUu4I.js";import"./debounce-UmgWFeKf.js";import"./useOsdkClient-BM_GsjtL.js";import"./tick-CbAy2oWE.js";import"./DropdownField-C-2cnHee.js";import"./isEqual-DjzJwDRd.js";import"./withOsdkMetrics-US1iMNLV.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
