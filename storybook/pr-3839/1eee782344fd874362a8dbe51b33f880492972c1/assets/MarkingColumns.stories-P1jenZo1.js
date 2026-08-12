import{f as p,j as e}from"./iframe-CaOZVcM8.js";import{O as i}from"./object-table-8ZGrdFEw.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-D0asL9_c.js";import"./Table-BROqB3UG.js";import"./index-Cq1u-AUb.js";import"./Dialog-Et_k2l9v.js";import"./cross-Del0U5pN.js";import"./svgIconContainer-LtpSeem8.js";import"./useBaseUiId-C3rnqgEW.js";import"./InternalBackdrop-D45PVC85.js";import"./composite-UvHTpcfI.js";import"./index-CcwMdyCi.js";import"./index-B6bqOoQj.js";import"./index-Dw2jEAhz.js";import"./useEventCallback-B6Zwe-wE.js";import"./SkeletonBar-Bu3sbZh3.js";import"./LoadingCell-BwEHRORR.js";import"./ColumnConfigDialog-B1PAVXTv.js";import"./DraggableList-Cd4sq2Wi.js";import"./search-Dh7gn4ku.js";import"./Input-C37Wm2cQ.js";import"./useControlled-D0eeOXz6.js";import"./isEqual-QzLyq6rt.js";import"./isObject-Bxuk0Ej2.js";import"./Button-DfAjosPZ.js";import"./ActionButton-BZ8dpD4a.js";import"./Checkbox-CE2DnI7r.js";import"./useValueChanged-DqofQ2rH.js";import"./CollapsiblePanel-D7-TBzeE.js";import"./MultiColumnSortDialog-DvBCFSAX.js";import"./MenuTrigger-CcWrsBQb.js";import"./CompositeItem-wSB1_NEO.js";import"./ToolbarRootContext-DPhLluaF.js";import"./getDisabledMountTransitionStyles-BkVn_us3.js";import"./getPseudoElementBounds-CGbb6tSs.js";import"./chevron-down-Dg4eiZWX.js";import"./index-C8V7bNNg.js";import"./error-bQoKO1DQ.js";import"./BaseCbacBanner-YcCJKmaz.js";import"./makeExternalStore-B3ffe9bA.js";import"./Tooltip-BOZwpeu7.js";import"./PopoverPopup-D6MLvU0e.js";import"./toNumber-hPX3fc-Q.js";import"./useOsdkClient-gsXgeqXO.js";import"./tick-BiliVS_P.js";import"./DropdownField-ssb7GK8d.js";import"./withOsdkMetrics-D3Xg8FtT.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
