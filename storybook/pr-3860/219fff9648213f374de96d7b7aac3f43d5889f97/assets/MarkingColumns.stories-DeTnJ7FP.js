import{f as p,j as e}from"./iframe-CujHdoKl.js";import{O as i}from"./object-table-D_vi4YBI.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-DUcMUNOo.js";import"./Table-cStpRNvL.js";import"./index-aOGJb9q1.js";import"./Dialog-DcwrNfd-.js";import"./cross-BwDPZyT4.js";import"./svgIconContainer-D9IeJ3ww.js";import"./useBaseUiId-BHrXH9vn.js";import"./InternalBackdrop-DOOVvXRR.js";import"./composite-DHm2bjTW.js";import"./index-_eiMg_S8.js";import"./index-CDyeI7sk.js";import"./index-DCCCbT9H.js";import"./useEventCallback-f_wdHpNZ.js";import"./SkeletonBar-wclGXQ0s.js";import"./LoadingCell-DyYoqDgp.js";import"./ColumnConfigDialog-DZEB9m9U.js";import"./DraggableList-DHut7vra.js";import"./search-DMHXQU1s.js";import"./Input-CJ3jjDAP.js";import"./useControlled-BiZE5Ppy.js";import"./Button-C0UeLBcI.js";import"./small-cross-101h6MuH.js";import"./ActionButton-CABAWaY9.js";import"./Checkbox-DwUaOwDV.js";import"./useValueChanged-BctVuVQ0.js";import"./CollapsiblePanel-C8oABOT0.js";import"./MultiColumnSortDialog-qjR5VKQ8.js";import"./MenuTrigger-D4mBzRd2.js";import"./CompositeItem-D0zI7JSM.js";import"./ToolbarRootContext-wL6J-yBR.js";import"./getDisabledMountTransitionStyles-BoY6xuxX.js";import"./getPseudoElementBounds-CbCqB6i8.js";import"./chevron-down-BJYoVZT-.js";import"./index-Be1gSIYV.js";import"./error-DMVxncVX.js";import"./BaseCbacBanner-C2qSBH6V.js";import"./makeExternalStore-D0Tfgzjd.js";import"./Tooltip-Co9J038a.js";import"./PopoverPopup-B6Ev2xiA.js";import"./debounce-B7zx1OJa.js";import"./useOsdkClient-CXsx3bnP.js";import"./tick-CePMXaUu.js";import"./DropdownField-SGcuL_jM.js";import"./isEqual-CyLYkzQc.js";import"./withOsdkMetrics-DEAu1aG0.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
