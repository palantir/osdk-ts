import{f as p,j as e}from"./iframe-DH1LfSqj.js";import{O as i}from"./object-table-C4--OWMA.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-BtNGdpdU.js";import"./Table-DXNoMCtE.js";import"./index-BwVz3K80.js";import"./Dialog-m6U3BZ2P.js";import"./cross-CVAZ1iFx.js";import"./svgIconContainer-GysfdOnF.js";import"./useBaseUiId-CW3AoQkf.js";import"./InternalBackdrop-DD_xzXOG.js";import"./composite-DB-jEcsY.js";import"./index-Dfpbq9fn.js";import"./index-Dt70WsCn.js";import"./index-BQpuPn_O.js";import"./useEventCallback-B1T6-Dk0.js";import"./SkeletonBar-Blb2KjQc.js";import"./LoadingCell-DJ166qfC.js";import"./ColumnConfigDialog-Dppaw2Lr.js";import"./DraggableList-DfK_4q05.js";import"./search-Cf7xLzNe.js";import"./Input-BbVzkVzZ.js";import"./useControlled-DAJs0K9A.js";import"./Button-CC_D7kUc.js";import"./small-cross-AKv-8hHD.js";import"./ActionButton-DAhEk0oH.js";import"./Checkbox-CJ_ikFlF.js";import"./useValueChanged-D1k7g2Vp.js";import"./CollapsiblePanel-CGVC2bAM.js";import"./MultiColumnSortDialog-DqDhlwJe.js";import"./MenuTrigger-D2rZbEGn.js";import"./CompositeItem-ty0jR14S.js";import"./ToolbarRootContext-DNwYbqk6.js";import"./getDisabledMountTransitionStyles-Dwh5nb5R.js";import"./getPseudoElementBounds-DTVu78U6.js";import"./chevron-down-BcIj0xVN.js";import"./index-BAF1QDd0.js";import"./error-CvpqdC3I.js";import"./BaseCbacBanner-CARa9_yI.js";import"./makeExternalStore-fduFP-zO.js";import"./Tooltip-CZY4h-1t.js";import"./PopoverPopup-C1WEOJ_A.js";import"./debounce-B4GI_Apd.js";import"./useOsdkClient-DN4s-WbE.js";import"./tick-BIbnl7xY.js";import"./DropdownField-C9gy_Wgf.js";import"./isEqual-DdMqeQ25.js";import"./withOsdkMetrics-CkK0GNNa.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
