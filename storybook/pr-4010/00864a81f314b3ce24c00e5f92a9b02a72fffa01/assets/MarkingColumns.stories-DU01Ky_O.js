import{f as p,j as e}from"./iframe-CtRHQTYJ.js";import{O as i}from"./object-table-Co1YG3YU.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-fhfz86w0.js";import"./Table-DrC-r9x3.js";import"./index-riCZd5Ar.js";import"./Dialog-BgLm7Z_4.js";import"./cross-DEABcOeY.js";import"./svgIconContainer-CnTR-ACc.js";import"./useBaseUiId-qkDK2XTS.js";import"./InternalBackdrop-CWaOdvE-.js";import"./composite-DuXOIKmO.js";import"./index-Fr7QusuU.js";import"./index-pqaS_ebL.js";import"./index-yCAZ2DAg.js";import"./useEventCallback-BIhF7inU.js";import"./SkeletonBar-DvxbY3ok.js";import"./LoadingCell-Dj6cXJnK.js";import"./ColumnConfigDialog-Biif9j1h.js";import"./DraggableList-B4zxhLs0.js";import"./search-BsaMQbW0.js";import"./Input-Civ7Ghzz.js";import"./useControlled-tah5fGcR.js";import"./Button-BqinPFLf.js";import"./small-cross-BpXb6yiG.js";import"./ActionButton-C_VR3Nw4.js";import"./Checkbox-DfxlNGGM.js";import"./useValueChanged-CKgwQ1DR.js";import"./CollapsiblePanel-WOW1j6DY.js";import"./MultiColumnSortDialog-Bi594TZ3.js";import"./MenuTrigger-B5CIkydJ.js";import"./CompositeItem-C6o3RrT-.js";import"./ToolbarRootContext-BObKP8Zm.js";import"./getDisabledMountTransitionStyles-fGFKvTKF.js";import"./getPseudoElementBounds-reWLTMCw.js";import"./chevron-down-DdzT4R3d.js";import"./index-BEVcgcQr.js";import"./error-7X7jIqwN.js";import"./BaseCbacBanner-JTAmQZoQ.js";import"./makeExternalStore-C5B573Wo.js";import"./Tooltip-C_nFk_LA.js";import"./PopoverPopup-DRdBjFn0.js";import"./debounce-BYWJGvRn.js";import"./useOsdkClient-Ws-Fn5Vr.js";import"./tick-D4iao2Tc.js";import"./DropdownField-BRYcu045.js";import"./isEqual-CLXUfsc9.js";import"./withOsdkMetrics-C6vvxMqe.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
