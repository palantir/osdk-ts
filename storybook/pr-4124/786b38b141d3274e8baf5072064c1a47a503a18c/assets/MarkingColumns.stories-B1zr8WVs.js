import{f as p,j as e}from"./iframe-UxLT7lYy.js";import{O as i}from"./object-table-Cc_qfxoK.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-CV6iJ-wL.js";import"./Table-BeinkaVZ.js";import"./index-CaLIOjRM.js";import"./Dialog-VrDMfQLV.js";import"./cross-gbTOR5Si.js";import"./svgIconContainer-HqUabHbJ.js";import"./useBaseUiId-DR0pgCNJ.js";import"./InternalBackdrop-uyTw1RdA.js";import"./composite-BYQddcpi.js";import"./index-5Zs5CZ2c.js";import"./index-C8h5tRSe.js";import"./index-_o97Q59k.js";import"./useEventCallback-DjbC_S6q.js";import"./SkeletonBar-B6QGYhFN.js";import"./LoadingCell-BHo-JVA1.js";import"./ColumnConfigDialog-C4pi-a3A.js";import"./DraggableList-B7mfCITH.js";import"./search-K5dECyKJ.js";import"./Input-DHvCRjgv.js";import"./useControlled-CDHE3Jck.js";import"./Button-DZCJ8vSD.js";import"./small-cross-Bw-OCkf4.js";import"./ActionButton-C661vjkS.js";import"./Checkbox-AE0u9S9J.js";import"./useValueChanged-CzG0v9jK.js";import"./CollapsiblePanel-BbBRdFzC.js";import"./MultiColumnSortDialog-fg3k3Klu.js";import"./MenuTrigger-ynnIwSop.js";import"./CompositeItem-Kvq0UPS2.js";import"./ToolbarRootContext-19oVc1QJ.js";import"./getDisabledMountTransitionStyles-CHMZ4_kz.js";import"./getPseudoElementBounds-x7euGpS2.js";import"./chevron-down-CNsNwb1i.js";import"./index-azpejN4Q.js";import"./error-CvnQXRAs.js";import"./BaseCbacBanner-CTHYjrUf.js";import"./makeExternalStore-D1qwl-gG.js";import"./Tooltip-7LzxkM7s.js";import"./PopoverPopup-D67Wkzxz.js";import"./debounce-BO8okfFM.js";import"./useOsdkClient-Da_K8BYI.js";import"./tick-BPmR5WxH.js";import"./DropdownField-D7GJRPWS.js";import"./isEqual-BhpxjI6o.js";import"./withOsdkMetrics-CgTr75Ie.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
