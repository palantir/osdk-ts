import{f as p,j as e}from"./iframe-D12e5Yf9.js";import{O as i}from"./object-table-C83DgUss.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-34QCnBMF.js";import"./Table-BwaFBq6A.js";import"./index-O4zTr8Ld.js";import"./Dialog-RlonKzaN.js";import"./cross-Cs_yM80q.js";import"./svgIconContainer-B0rntCL0.js";import"./useBaseUiId-s740CplR.js";import"./InternalBackdrop-BAYiAeOX.js";import"./composite-BD8updFS.js";import"./index-Hw5856rK.js";import"./index-GyhMgPa-.js";import"./index-CS6GRPG3.js";import"./useEventCallback-CSCtau5v.js";import"./SkeletonBar-Cka0V5Rd.js";import"./LoadingCell-DJKcxbzu.js";import"./ColumnConfigDialog-C3gIwO9D.js";import"./DraggableList-B5PA338U.js";import"./search-D5rTLbi7.js";import"./Input-dW8Zs2Bg.js";import"./useControlled-ID5WarEe.js";import"./Button-D5sAducB.js";import"./small-cross-DeNy61PY.js";import"./ActionButton-D-3sp6yo.js";import"./Checkbox-CUmX8lCr.js";import"./useValueChanged-BKRmcgi7.js";import"./CollapsiblePanel-ON1FZ9if.js";import"./MultiColumnSortDialog-BDa7i4rv.js";import"./MenuTrigger-D_-LX7s-.js";import"./CompositeItem-BNcuqAtd.js";import"./ToolbarRootContext-DNlY1kW_.js";import"./getDisabledMountTransitionStyles-Dqz1fAgY.js";import"./getPseudoElementBounds-D9Evvgka.js";import"./chevron-down-BHFsOBbt.js";import"./index-idqsRB9k.js";import"./error-DMTSuwww.js";import"./BaseCbacBanner-Du0rme9V.js";import"./makeExternalStore-HCjLV6k-.js";import"./Tooltip-DP25Isvd.js";import"./PopoverPopup-cuW7qwZh.js";import"./debounce-hXqbGHnZ.js";import"./useOsdkClient-PwSTMRmq.js";import"./tick-Bj9LbqSh.js";import"./DropdownField-o_Oc83C9.js";import"./isEqual-CL5yfhVm.js";import"./withOsdkMetrics-B58QGQVF.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
