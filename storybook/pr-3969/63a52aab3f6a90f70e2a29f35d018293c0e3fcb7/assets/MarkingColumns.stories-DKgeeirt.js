import{f as p,j as e}from"./iframe-C6LBpvuI.js";import{O as i}from"./object-table-CcXLtHpK.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-D5MgSTAG.js";import"./Table-BeBUCyGA.js";import"./index-NiT3c2LR.js";import"./Dialog-kUY69VQz.js";import"./cross-_DiJsQ5N.js";import"./svgIconContainer-Bqb8q1fz.js";import"./useBaseUiId-D9K-3OOp.js";import"./InternalBackdrop-HhBDZuEq.js";import"./composite-CIL5RRbh.js";import"./index-CPv3k7C8.js";import"./index-DwcGPrXk.js";import"./index-CqMyNaRs.js";import"./useEventCallback-Wk0zbhyA.js";import"./SkeletonBar-BOpMWE3t.js";import"./LoadingCell-HYA-UBCw.js";import"./ColumnConfigDialog-Be7bd5l3.js";import"./DraggableList-XKOi4747.js";import"./search-CkHqN668.js";import"./Input-CYIsQ-Xl.js";import"./useControlled-35bEpDbg.js";import"./Button-DcSoFPNd.js";import"./small-cross-Ca0z12yL.js";import"./ActionButton-DvSfUpHb.js";import"./Checkbox-C9O8Ucdp.js";import"./useValueChanged-D_yZ0Mm1.js";import"./CollapsiblePanel-BArtnZVf.js";import"./MultiColumnSortDialog-DM5iE9d8.js";import"./MenuTrigger-C0vCR4Gx.js";import"./CompositeItem-Cmb1U36q.js";import"./ToolbarRootContext-DJRyp8mD.js";import"./getDisabledMountTransitionStyles-De_VSn36.js";import"./getPseudoElementBounds-CW1Mk6S7.js";import"./chevron-down-Bw9bT84C.js";import"./index-vMfLr8EK.js";import"./error-CGV30LyY.js";import"./BaseCbacBanner-DV1fw0IM.js";import"./makeExternalStore-qoO0AqK1.js";import"./Tooltip-Bz3b9lQY.js";import"./PopoverPopup-DeYL1cwn.js";import"./debounce-Bq6Y-sFM.js";import"./useOsdkClient-AeGVvXbC.js";import"./tick-BwKNHXqA.js";import"./DropdownField-BxCBScnI.js";import"./isEqual-7tmA05Zq.js";import"./withOsdkMetrics-Dgn4gd8E.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
