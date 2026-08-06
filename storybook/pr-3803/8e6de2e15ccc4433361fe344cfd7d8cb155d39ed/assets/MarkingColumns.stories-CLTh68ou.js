import{f as p,j as e}from"./iframe-DvFHgo-w.js";import{O as i}from"./object-table-Bpvq3r6J.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-DZBzpRSG.js";import"./Table-XamTJzer.js";import"./index-ChNfdrgg.js";import"./Dialog-IHlWMBtY.js";import"./cross-DFuwFxaR.js";import"./svgIconContainer-DkmBAWI4.js";import"./useBaseUiId-Cihl7qhL.js";import"./InternalBackdrop-CxHwCrRD.js";import"./composite-btXM50Z8.js";import"./index-DmnXV9iA.js";import"./index-CHdUuSLF.js";import"./index-BBJBZUVP.js";import"./useEventCallback-CjzJPV8w.js";import"./SkeletonBar-K9w0OW_M.js";import"./LoadingCell-BuEuuL24.js";import"./ColumnConfigDialog-JNJ9PysK.js";import"./DraggableList-DPMyKnoA.js";import"./search-DGnENIqF.js";import"./Input-Dj67-Kk5.js";import"./useControlled-B1Ceoypd.js";import"./isEqual-CDhU7mjX.js";import"./isObject-BAFCTc-o.js";import"./Button-KyTimgm1.js";import"./ActionButton-Cgv_I3G1.js";import"./Checkbox-TcgZHOqM.js";import"./useValueChanged-DtlQijU6.js";import"./CollapsiblePanel-BI4Hwsiz.js";import"./MultiColumnSortDialog-DqGFzRPB.js";import"./MenuTrigger-ClHfegt_.js";import"./CompositeItem-CRFhwAMt.js";import"./ToolbarRootContext-BYIu0onP.js";import"./getDisabledMountTransitionStyles-BoeOMGGq.js";import"./getPseudoElementBounds-ZFE8fkVM.js";import"./chevron-down-CQiqre5K.js";import"./index-BtbK7qTH.js";import"./error-CuZ6e4Lo.js";import"./BaseCbacBanner-DkuvZFbJ.js";import"./makeExternalStore-N_K02grM.js";import"./Tooltip-B_ZOzs7F.js";import"./PopoverPopup-DLLk2q3N.js";import"./toNumber-ByPSC-tB.js";import"./useOsdkClient-BlFqS2fR.js";import"./tick-DVnP0HcX.js";import"./DropdownField-ptwTRj3O.js";import"./withOsdkMetrics-B88V5tRU.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
