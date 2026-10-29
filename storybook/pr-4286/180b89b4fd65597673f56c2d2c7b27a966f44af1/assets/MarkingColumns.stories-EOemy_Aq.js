import{f as p,j as e}from"./iframe-IwlSs7RL.js";import{O as i}from"./object-table-AK6fHNOe.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-BSkCOlkQ.js";import"./Table-D6HHCJDL.js";import"./index-DubGe8n8.js";import"./Dialog-BBO-25m3.js";import"./cross-QYKhi7EM.js";import"./svgIconContainer-CxRFzvkj.js";import"./useBaseUiId-C6iBuDel.js";import"./InternalBackdrop-BWGQR3TW.js";import"./composite-BhDLSWJq.js";import"./index-Dtiq40Ku.js";import"./index-rVQQDG8n.js";import"./index-BEos1GHD.js";import"./useEventCallback-BemiPLPr.js";import"./SkeletonBar-BPC0qN3Q.js";import"./LoadingCell-Dc-t-6nm.js";import"./ColumnConfigDialog-lKzGqNSt.js";import"./DraggableList-CBvV7F9-.js";import"./search-B6kXKBbQ.js";import"./Input-DEK2jxOA.js";import"./useControlled-DHwVcrm_.js";import"./Button-v4BAXuzD.js";import"./small-cross-B6mridJu.js";import"./ActionButton-Y64s_uGz.js";import"./Checkbox-wH661C2t.js";import"./useValueChanged-CjTe9a5Y.js";import"./CollapsiblePanel-BNhx1-ML.js";import"./MultiColumnSortDialog-B6zldfza.js";import"./MenuTrigger-BDrTtgQd.js";import"./CompositeItem-Co7hhhjf.js";import"./ToolbarRootContext-C2NTNe0y.js";import"./getDisabledMountTransitionStyles-DW2b3ONx.js";import"./getPseudoElementBounds-x9ioFWs9.js";import"./chevron-down-DkOqeyC-.js";import"./index-Bu0grvIG.js";import"./error-IBUuPrgD.js";import"./BaseCbacBanner-Dfi6KiNH.js";import"./makeExternalStore-x7dSpV5j.js";import"./Tooltip-BgU0ufaQ.js";import"./PopoverPopup-CWcF5Zm_.js";import"./debounce-CwKNV3oF.js";import"./useOsdkClient-uiW7fCDT.js";import"./tick-Wvwlz1Gi.js";import"./DropdownField-Bilyp8Md.js";import"./isEqual-C45zizx2.js";import"./withOsdkMetrics-DC0QMqM3.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
