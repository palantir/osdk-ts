import{f as p,j as e}from"./iframe-C-b6oTOJ.js";import{O as i}from"./object-table-C7DYq2pz.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-BeH59gqJ.js";import"./Table-DXsAkxSJ.js";import"./index-DE1s0YYF.js";import"./Dialog-qxM0X4dG.js";import"./cross-CHQB6uFl.js";import"./svgIconContainer-OHRV30Tv.js";import"./useBaseUiId-CkMODpS3.js";import"./InternalBackdrop-D6TYY50X.js";import"./composite-4UqYDIuK.js";import"./index-0ZNUZbhg.js";import"./index-BVjVMQ97.js";import"./index-B6prnO72.js";import"./useEventCallback-f02sUdqz.js";import"./SkeletonBar-CdIYyEwK.js";import"./LoadingCell-9RZsGqIp.js";import"./ColumnConfigDialog-DcBf2JfV.js";import"./DraggableList-yP-jSfX4.js";import"./search-JVftW7k-.js";import"./Input-BSxN1vwO.js";import"./useControlled-g-pxj8O4.js";import"./Button-CV_yYG-R.js";import"./small-cross-D4a9Ho69.js";import"./ActionButton-lKHVmnzU.js";import"./Checkbox-Ci2Nd6sh.js";import"./useValueChanged-y611DxC1.js";import"./CollapsiblePanel-DFf461j6.js";import"./MultiColumnSortDialog-Bvmvw-Lo.js";import"./MenuTrigger-eYoztX0q.js";import"./CompositeItem-BEGPA2jt.js";import"./ToolbarRootContext-D9YuleTy.js";import"./getDisabledMountTransitionStyles-ByMCPo6h.js";import"./getPseudoElementBounds-YS_9JBeN.js";import"./chevron-down-D7cmGpd4.js";import"./index-D6jWMBsi.js";import"./error-ByhaKTr1.js";import"./BaseCbacBanner-IyPGWhps.js";import"./makeExternalStore-B_SxmnOK.js";import"./Tooltip-DHzhDEF7.js";import"./PopoverPopup-BNW8X69h.js";import"./debounce-CeZCgghX.js";import"./useOsdkClient-CHwnoSo5.js";import"./tick-C3AZ4-vL.js";import"./DropdownField-D6Tax7Nm.js";import"./isEqual-DUa_QRFr.js";import"./withOsdkMetrics-BrJ-pBLm.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
