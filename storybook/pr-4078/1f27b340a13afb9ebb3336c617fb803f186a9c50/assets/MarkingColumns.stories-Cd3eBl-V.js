import{f as p,j as e}from"./iframe-DoZpKAuy.js";import{O as i}from"./object-table-DRW4kY3M.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-VWDIqFcw.js";import"./Table-CkJ--xpo.js";import"./index-DI9gHjQw.js";import"./Dialog-BLZbylxk.js";import"./cross-BOIWmSa8.js";import"./svgIconContainer-DaZ9l-Xt.js";import"./useBaseUiId-DGOpwqqR.js";import"./InternalBackdrop-CXaIk_fc.js";import"./composite-BwuXi3Qd.js";import"./index-CJ3t3vUm.js";import"./index-D3VbgQBY.js";import"./index-DsGBi-gt.js";import"./useEventCallback-q8sTQiWB.js";import"./SkeletonBar-COaLIR3K.js";import"./LoadingCell-BN8yrwmK.js";import"./ColumnConfigDialog-CrrtK0Ko.js";import"./DraggableList-CQLRPqV0.js";import"./search-D2oluobe.js";import"./Input-DA4z6leT.js";import"./useControlled-Dtv5pYI4.js";import"./Button-Bx4A8oJL.js";import"./small-cross-B5Wvka-s.js";import"./ActionButton-rr5yoRIG.js";import"./Checkbox-BWUk6GkC.js";import"./useValueChanged-D34j0py5.js";import"./CollapsiblePanel-CjPIi1du.js";import"./MultiColumnSortDialog-DhJrKoCa.js";import"./MenuTrigger-BEGEz8dr.js";import"./CompositeItem-JZBFttqy.js";import"./ToolbarRootContext-CkYvN6qQ.js";import"./getDisabledMountTransitionStyles-DiIXvqNo.js";import"./getPseudoElementBounds-DVZ5aDyN.js";import"./chevron-down-Chs2Nvxl.js";import"./index-Dwncc-H5.js";import"./error-vQUKN10-.js";import"./BaseCbacBanner-COxyuxvY.js";import"./makeExternalStore-A-gxfiQg.js";import"./Tooltip-B3gh8s19.js";import"./PopoverPopup-C_2AHMFH.js";import"./debounce-TKcLqlSn.js";import"./useOsdkClient-BD-YRINd.js";import"./tick-ChJIONOw.js";import"./DropdownField-5YM5_cwC.js";import"./isEqual-DsuHKnmz.js";import"./withOsdkMetrics-wa8YRQpQ.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
