import{f as p,j as e}from"./iframe-CT8qFPUV.js";import{O as i}from"./object-table-DPPlKtuR.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-BHyrK0we.js";import"./Table-BEPPJ5mU.js";import"./index-IIFqr_Jh.js";import"./Dialog-CM51v1Ey.js";import"./cross-CMW1v6Nr.js";import"./svgIconContainer-9rSG-q0q.js";import"./useBaseUiId-CAvMPjp1.js";import"./InternalBackdrop-Cmwys2rA.js";import"./composite-Cvq6s1zD.js";import"./index-CnAG97BE.js";import"./index-G14nPyHu.js";import"./index-D23kGKaC.js";import"./useEventCallback-D2Qc1mZc.js";import"./SkeletonBar-nJZQ_-v7.js";import"./LoadingCell-Cd_n8-ek.js";import"./ColumnConfigDialog-Di2gJjR_.js";import"./DraggableList-VGLolp8U.js";import"./search-B7W0NEyo.js";import"./Input-Hz6uGvXQ.js";import"./useControlled-BSUn0zkZ.js";import"./isEqual-CezrfRsb.js";import"./isObject-DFiQBwbw.js";import"./Button-CIZ3jWX3.js";import"./ActionButton-CzUPf6AH.js";import"./Checkbox-C1bIRGLG.js";import"./useValueChanged-ct7ZORh8.js";import"./CollapsiblePanel-wvp206Kx.js";import"./MultiColumnSortDialog-CGmXG29a.js";import"./MenuTrigger-U21ZTp6v.js";import"./CompositeItem-CS9_X5Cg.js";import"./ToolbarRootContext-DTfoBz1Z.js";import"./getDisabledMountTransitionStyles-Y5ZZEkI9.js";import"./getPseudoElementBounds-Dk4xseC2.js";import"./chevron-down-D594BBPu.js";import"./index-C85Q-p1W.js";import"./error-CaKFwUNR.js";import"./BaseCbacBanner-DOYjKT-C.js";import"./makeExternalStore-HyEzRDXC.js";import"./Tooltip-DGExIBxF.js";import"./PopoverPopup-Cmkus2jj.js";import"./toNumber-o6uE0Yrs.js";import"./useOsdkClient-CnL1e7f2.js";import"./tick-zQ8lDjPu.js";import"./DropdownField-B2_auR_f.js";import"./withOsdkMetrics-C55IRa3U.js";const or={title:"Components/ObjectTable/Features",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
