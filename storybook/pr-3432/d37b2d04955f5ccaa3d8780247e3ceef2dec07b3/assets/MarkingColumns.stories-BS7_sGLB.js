import{f as p,j as e}from"./iframe-DhfS3RZc.js";import{O as i}from"./object-table-B-fxfLut.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-DURZGd9r.js";import"./Table-CK1bsTfV.js";import"./index-CmWcsqzv.js";import"./Dialog-BSsp0rWl.js";import"./cross-BcryMkCa.js";import"./svgIconContainer-kbCk0NE_.js";import"./useBaseUiId-DfXKjGnz.js";import"./InternalBackdrop-DBGl_T4H.js";import"./composite-DAyuLXEI.js";import"./index-B97WNJKr.js";import"./index-DZobiGK0.js";import"./index-s0PrsLZK.js";import"./useEventCallback-DfaqPmrk.js";import"./SkeletonBar-yG-gm33m.js";import"./LoadingCell-ClU8fKgv.js";import"./ColumnConfigDialog-DT12I59U.js";import"./DraggableList-D6xYyVtg.js";import"./search-Bpp188FL.js";import"./Input-3HEaYe6X.js";import"./useControlled-DdFF90Aj.js";import"./Button-r9_lJTgE.js";import"./small-cross-CjiaImbP.js";import"./ActionButton-ClS-793Z.js";import"./Checkbox-WGLQOE5J.js";import"./useValueChanged-TUXL-Whv.js";import"./CollapsiblePanel-DDymuiwU.js";import"./MultiColumnSortDialog-Bc-BaGA4.js";import"./MenuTrigger-W_1TWk6A.js";import"./CompositeItem-Dq06wRHV.js";import"./ToolbarRootContext-BXCR2bw0.js";import"./getDisabledMountTransitionStyles-CjkU88c4.js";import"./getPseudoElementBounds-BowutHEK.js";import"./chevron-down-BFTO0kIL.js";import"./index-D8QgLOCs.js";import"./error-B7gsEzyH.js";import"./BaseCbacBanner-C7h0RdHe.js";import"./makeExternalStore-C0FFZIpP.js";import"./Tooltip-B6gLwk9y.js";import"./PopoverPopup-Ci542wak.js";import"./debounce-CUoR3aUb.js";import"./useOsdkClient-I8SPvkL2.js";import"./tick-DMUoUbt9.js";import"./DropdownField-CvT9323I.js";import"./isEqual-pykNuk-r.js";import"./withOsdkMetrics-huuH2-qQ.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
