import{f as p,j as e}from"./iframe-CqpELHwS.js";import{O as i}from"./object-table-DbKwyHc5.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-DfJ58b8G.js";import"./Table-Dht-ckZc.js";import"./index-BER4WQBS.js";import"./Dialog-C6jAoGEU.js";import"./cross-u_0PEuYq.js";import"./svgIconContainer-BTP1tkQ_.js";import"./useBaseUiId-CqI62Qpb.js";import"./InternalBackdrop-K6p4ENHo.js";import"./composite-DOZwc2bc.js";import"./index-Cis59Sxl.js";import"./index-CcEEUUj6.js";import"./index-CKO26sQe.js";import"./useEventCallback-b_Kd5kWf.js";import"./SkeletonBar-Cm1tloZj.js";import"./LoadingCell-5DLOBqqN.js";import"./ColumnConfigDialog-B0fzjNWg.js";import"./DraggableList-CibwmZ2o.js";import"./search-D9m05WlM.js";import"./Input-B8oxxBH0.js";import"./useControlled-D7QaFiC3.js";import"./Button-DVcrv2BS.js";import"./small-cross-C-5iiC69.js";import"./ActionButton-CLTSCNsY.js";import"./Checkbox-C950EoGE.js";import"./useValueChanged-BLX9s3qf.js";import"./CollapsiblePanel-DPutPnXc.js";import"./MultiColumnSortDialog-DZpwOj1q.js";import"./MenuTrigger-DXKsiQKV.js";import"./CompositeItem-Du2CIA1V.js";import"./ToolbarRootContext-uFYVc9Dk.js";import"./getDisabledMountTransitionStyles-BuRkNMoJ.js";import"./getPseudoElementBounds-B1CPQfJe.js";import"./chevron-down-CiPBsoDI.js";import"./index-0kwSuhRB.js";import"./error-jtHR9fDA.js";import"./BaseCbacBanner-z2_XzsM3.js";import"./makeExternalStore-CUMLWxOP.js";import"./Tooltip-A2o7ZLx2.js";import"./PopoverPopup-CJVmVuZk.js";import"./debounce-qnDwyFzV.js";import"./useOsdkClient-CHiIV34U.js";import"./tick-DztBPc7i.js";import"./DropdownField-D5sFpe7Y.js";import"./isEqual-DVLS-UMQ.js";import"./withOsdkMetrics-lKot8ktS.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
