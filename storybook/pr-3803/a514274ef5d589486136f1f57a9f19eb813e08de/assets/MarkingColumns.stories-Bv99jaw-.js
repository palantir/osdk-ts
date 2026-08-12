import{f as p,j as e}from"./iframe-B3wk8kVZ.js";import{O as i}from"./object-table-BTFdMv_R.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-C31FCm5E.js";import"./Table-DLJidSKw.js";import"./index-3CUWClbk.js";import"./Dialog-DdUlFbiJ.js";import"./cross-BaLLkSHI.js";import"./svgIconContainer-tw0lZiQJ.js";import"./useBaseUiId-CklL5-7z.js";import"./InternalBackdrop-OEAYc3yw.js";import"./composite-Bre4iFt0.js";import"./index-CqtqFd9-.js";import"./index-Bu1K1z8v.js";import"./index-D2HNqsii.js";import"./useEventCallback-DmhqaCs7.js";import"./SkeletonBar-Rs9tS4Ar.js";import"./LoadingCell-CNzF5f40.js";import"./ColumnConfigDialog-47yjjIPq.js";import"./DraggableList-wWiUupuT.js";import"./search-BTUcl0ov.js";import"./Input-D8tm8Vwt.js";import"./useControlled-OgnUzg5x.js";import"./isEqual-CV5bLzkB.js";import"./isObject-CZWpd-KU.js";import"./Button-DQgybiWB.js";import"./ActionButton-BSysTeFD.js";import"./Checkbox-Bsx1i8dD.js";import"./useValueChanged-BZHwRoTK.js";import"./CollapsiblePanel-C92ugajo.js";import"./MultiColumnSortDialog-NOzVqTFF.js";import"./MenuTrigger-DlGLch93.js";import"./CompositeItem-C_xzt7Yx.js";import"./ToolbarRootContext-ffWwb0UY.js";import"./getDisabledMountTransitionStyles-Ds6p21tr.js";import"./getPseudoElementBounds-DvUH2RC4.js";import"./chevron-down-CF60htEO.js";import"./index-Bh7yWO4s.js";import"./error-Ceiy10ri.js";import"./BaseCbacBanner-DjbpPRcX.js";import"./makeExternalStore-CEwzLxnH.js";import"./Tooltip-7ZGtEAnk.js";import"./PopoverPopup-C6pUvjpc.js";import"./toNumber-BOpB8xxZ.js";import"./useOsdkClient-Chdum4-f.js";import"./tick-CeKhhfgZ.js";import"./DropdownField-CWgzGjz8.js";import"./withOsdkMetrics-DQFY8goa.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
