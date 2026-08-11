import{f as p,j as e}from"./iframe-BUj1CfXg.js";import{O as i}from"./object-table-DyKvR0rE.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-DZ45QRbv.js";import"./Table-CWSTK4rq.js";import"./index-NBVyoVsZ.js";import"./Dialog-B_j-bdOZ.js";import"./cross-DlyIjemV.js";import"./svgIconContainer-MYfqGk3H.js";import"./useBaseUiId-DaOhoyrU.js";import"./InternalBackdrop-DzPAcrCS.js";import"./composite-BkdiVfPs.js";import"./index-C1gw1Q5a.js";import"./index-B4P9wCIh.js";import"./index-CQceiGqI.js";import"./useEventCallback-BbRR7V1i.js";import"./SkeletonBar-DtLmqaeu.js";import"./LoadingCell--ZKV-a4a.js";import"./ColumnConfigDialog-Bq93dVdv.js";import"./DraggableList-BR-zSyBl.js";import"./search-CeD93pBN.js";import"./Input-BTDiXSNB.js";import"./useControlled-BjYCZfKY.js";import"./isEqual-CU5FZwCW.js";import"./isObject-C_gfn-Rb.js";import"./Button-B5y7ZCvT.js";import"./ActionButton-BmWBQE9y.js";import"./Checkbox-BHMj1n9f.js";import"./useValueChanged-RokLUTbm.js";import"./CollapsiblePanel-fD7arT3b.js";import"./MultiColumnSortDialog-B51pu96z.js";import"./MenuTrigger-HGKcp2Gy.js";import"./CompositeItem-C-wl7l8I.js";import"./ToolbarRootContext-BFvRmjuo.js";import"./getDisabledMountTransitionStyles-DUFQ-qCZ.js";import"./getPseudoElementBounds-BnMLzqS4.js";import"./chevron-down-DgAFPu4M.js";import"./index-BXPBNZV3.js";import"./error-peAS9X8o.js";import"./BaseCbacBanner-r6BnHO-C.js";import"./makeExternalStore-CN2SCzrt.js";import"./Tooltip-Byi-ofNp.js";import"./PopoverPopup-C7JRc8oc.js";import"./toNumber-CpnBpuJd.js";import"./useOsdkClient-k-jR9e5k.js";import"./tick-8bw-0Y7b.js";import"./DropdownField-BWBqfaQX.js";import"./withOsdkMetrics-CXkSfRrz.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
