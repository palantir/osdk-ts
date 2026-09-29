import{f as p,j as e}from"./iframe-zPv4Qzqd.js";import{O as i}from"./object-table-CUYlXaxF.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-PJxV9mQF.js";import"./Table-fZnXH_AO.js";import"./index-CBKHTxLZ.js";import"./Dialog-DZNnheOL.js";import"./cross--dxagHok.js";import"./svgIconContainer-vb3o1rNS.js";import"./useBaseUiId-DVjOyWmw.js";import"./InternalBackdrop-CBe1boE7.js";import"./composite-B2SBl57g.js";import"./index-LSfGN98D.js";import"./index-Dqw7fhLs.js";import"./index-CNxBS-8s.js";import"./useEventCallback-DQ_0G6aA.js";import"./SkeletonBar-YCmzJufB.js";import"./LoadingCell-DuJbkSYV.js";import"./ColumnConfigDialog-CNA6JZ0v.js";import"./DraggableList-vwtiIr8s.js";import"./search-CQlxqsQe.js";import"./Input-BZ1hKq3S.js";import"./useControlled-0ViRdTwH.js";import"./Button-Bpg2U0NI.js";import"./small-cross-VYccQ32Y.js";import"./ActionButton-BfWfVjYe.js";import"./Checkbox-D_Zir1cl.js";import"./useValueChanged-n6G7gR_P.js";import"./CollapsiblePanel-BFa8buwC.js";import"./MultiColumnSortDialog-nRSq_gea.js";import"./MenuTrigger-DuJVMmZY.js";import"./CompositeItem-CdWRe_DK.js";import"./ToolbarRootContext-CKYx1umj.js";import"./getDisabledMountTransitionStyles-Ck2s3g2H.js";import"./getPseudoElementBounds-NPMWYZIY.js";import"./chevron-down-Bq07BQjw.js";import"./index-BFqEQ3NN.js";import"./error-DWSHpljN.js";import"./BaseCbacBanner-CQ6NxDOp.js";import"./makeExternalStore-Bpbj6CnC.js";import"./Tooltip-DVU7TgEy.js";import"./PopoverPopup-D_yXP70P.js";import"./debounce-BrLoezJi.js";import"./useOsdkClient-BGVTEbj_.js";import"./tick-DG8Ui0fG.js";import"./DropdownField-CqnJScbI.js";import"./isEqual-DSgRsP2x.js";import"./withOsdkMetrics-DD1axzdT.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
