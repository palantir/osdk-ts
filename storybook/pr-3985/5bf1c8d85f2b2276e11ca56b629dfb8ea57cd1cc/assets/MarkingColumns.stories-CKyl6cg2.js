import{f as p,j as e}from"./iframe-CaMctZhM.js";import{O as i}from"./object-table-Bvnt7Wyt.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-DNMYa0Vf.js";import"./Table-D8AkL9yz.js";import"./index-CtdxRtEM.js";import"./Dialog-BfM0QFxQ.js";import"./cross-BG3r1-a6.js";import"./svgIconContainer--PB46C3w.js";import"./useBaseUiId-DXXB_44i.js";import"./InternalBackdrop-Cl0aIOdV.js";import"./composite-hogSzUb-.js";import"./index-D9rKK3Jx.js";import"./index-ClymoC-g.js";import"./index-DZzpVNZd.js";import"./useEventCallback-Cp11P4CG.js";import"./SkeletonBar-BRGBX3xw.js";import"./LoadingCell-BuIVSGd7.js";import"./ColumnConfigDialog-B897TDFU.js";import"./DraggableList-BNCCZbEI.js";import"./search-jWF7X9or.js";import"./Input-BXSwuDSh.js";import"./useControlled-BPVVUVXR.js";import"./Button-BDNmY4BX.js";import"./small-cross-CCg3K2o4.js";import"./ActionButton-CubBHf-4.js";import"./Checkbox-Cmw9d5wR.js";import"./useValueChanged-gcwEr2UE.js";import"./CollapsiblePanel-C15Mx4Y2.js";import"./MultiColumnSortDialog-BqU8deem.js";import"./MenuTrigger-D5ES9GTN.js";import"./CompositeItem-DUaU3yqi.js";import"./ToolbarRootContext-NuzyP_Z2.js";import"./getDisabledMountTransitionStyles-Zsn1wRQz.js";import"./getPseudoElementBounds-BcOMbE_O.js";import"./chevron-down-BTzBC5n8.js";import"./index-BNjCIBi_.js";import"./error-Cuicm8UG.js";import"./BaseCbacBanner-g8NoEMM9.js";import"./makeExternalStore-BCTvNoj1.js";import"./Tooltip-DU6FxlSQ.js";import"./PopoverPopup-CqHYCBTd.js";import"./debounce-DSgq7d59.js";import"./useOsdkClient-aWMARsJj.js";import"./tick-CJ39txi1.js";import"./DropdownField-DKs0z5rG.js";import"./isEqual-C8fXJSQK.js";import"./withOsdkMetrics-DSeCvaBk.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
