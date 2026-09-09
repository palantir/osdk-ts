import{f as p,j as e}from"./iframe-CMVepAJE.js";import{O as i}from"./object-table-DrYoEV5F.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-B-pat0t1.js";import"./Table-D1LPpzIv.js";import"./index-DjkhfCfT.js";import"./Dialog-UkIf-Cia.js";import"./cross-Bt6SdNHm.js";import"./svgIconContainer-Bbnic8gm.js";import"./useBaseUiId-DzJi2twx.js";import"./InternalBackdrop-D5ExGecl.js";import"./composite-BNbUAYfg.js";import"./index-DFWQdO8O.js";import"./index-D8Snt0rf.js";import"./index-tAYlbVzq.js";import"./useEventCallback-BNdTIoO0.js";import"./SkeletonBar-DMdShgvr.js";import"./LoadingCell-B_jbOxSN.js";import"./ColumnConfigDialog-D1fIMUYr.js";import"./DraggableList-C5Ja6789.js";import"./search-ByupdJIi.js";import"./Input-BrboKIWX.js";import"./useControlled-BNdmAelW.js";import"./Button-Rom60jiD.js";import"./small-cross-Daxd_o57.js";import"./ActionButton-7uiQn5bN.js";import"./Checkbox-C1ZQPvyX.js";import"./useValueChanged-2qNB1H9S.js";import"./CollapsiblePanel-DRHJsQ_R.js";import"./MultiColumnSortDialog-BViHg8Kr.js";import"./MenuTrigger-HlrGbgAx.js";import"./CompositeItem-DR4WY-BM.js";import"./ToolbarRootContext-qvOmnhBt.js";import"./getDisabledMountTransitionStyles-DeWLLfFW.js";import"./getPseudoElementBounds-CLKaAdce.js";import"./chevron-down-DvYjBW4w.js";import"./index-18i-4mqz.js";import"./error-BP38p0Wz.js";import"./BaseCbacBanner-xwrxkHCM.js";import"./makeExternalStore-CylZcwCT.js";import"./Tooltip-CpbJ4M8Z.js";import"./PopoverPopup-Db5oD-HC.js";import"./debounce-DwOMz3I5.js";import"./useOsdkClient-9-M1ms6x.js";import"./tick-OGu8ycnQ.js";import"./DropdownField-B3BsKGIg.js";import"./isEqual-CqojoX74.js";import"./withOsdkMetrics-fhlMSJmK.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
