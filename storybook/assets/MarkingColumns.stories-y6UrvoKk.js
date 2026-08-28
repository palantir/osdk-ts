import{f as p,j as e}from"./iframe-q6NKVMOW.js";import{O as i}from"./object-table-DzbbIM5Z.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-Dp1pzeXC.js";import"./Table-BbYjbBYd.js";import"./index-B5MNjG-7.js";import"./Dialog-3E9ScHwj.js";import"./cross-kBxFNNzf.js";import"./svgIconContainer-Cl-19u26.js";import"./useBaseUiId-DS12ecTt.js";import"./InternalBackdrop-_jEsJaJc.js";import"./composite-DWdzf7xq.js";import"./index-CXmB_YXt.js";import"./index-B8pCVHdG.js";import"./index-CPso5KRe.js";import"./useEventCallback-BjoOPJhQ.js";import"./SkeletonBar-BLnRSmtQ.js";import"./LoadingCell-BfelY0um.js";import"./ColumnConfigDialog-DCPZqHqP.js";import"./DraggableList-OQJn8TwR.js";import"./search-BG6VKYDl.js";import"./Input-CW_LwEgU.js";import"./useControlled-rHUBc6dP.js";import"./Button-B0F_wJsq.js";import"./small-cross-BFe6bKcr.js";import"./ActionButton-DELaTHWY.js";import"./Checkbox-Bo5IimwW.js";import"./useValueChanged-B_EMYZEM.js";import"./CollapsiblePanel-DpM02--P.js";import"./MultiColumnSortDialog-Bp3s0Soi.js";import"./MenuTrigger-Dlad_--F.js";import"./CompositeItem-Cm8x2Oga.js";import"./ToolbarRootContext-CrOFR8_B.js";import"./getDisabledMountTransitionStyles-Dy4RoREr.js";import"./getPseudoElementBounds-C7xHfoER.js";import"./chevron-down-DeyzUbGB.js";import"./index-N79EOdPZ.js";import"./error-C3FqO6Mu.js";import"./BaseCbacBanner-CGXBjJmn.js";import"./makeExternalStore-C_DYB-ey.js";import"./Tooltip-DdAmQHtJ.js";import"./PopoverPopup-CEvo7W78.js";import"./debounce-LdB-CNSo.js";import"./useOsdkClient-brfNmyCb.js";import"./tick-CVAXBWRm.js";import"./DropdownField-BtqcTwLB.js";import"./isEqual-DAYpnafB.js";import"./withOsdkMetrics-B0o7MA2A.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
