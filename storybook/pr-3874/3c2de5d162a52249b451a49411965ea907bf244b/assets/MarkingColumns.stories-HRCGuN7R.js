import{f as p,j as e}from"./iframe-DPKjJbUl.js";import{O as i}from"./object-table-CiA2mgLE.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-jysXR-to.js";import"./Table-CkCIOkQc.js";import"./index-2SPkUawk.js";import"./Dialog-Bxoi34Wm.js";import"./cross-Bur9aTxF.js";import"./svgIconContainer-DcOBBk2S.js";import"./useBaseUiId-CpCoqI7r.js";import"./InternalBackdrop-CNupZRS_.js";import"./composite-4w9rumvd.js";import"./index-BJOf7s-T.js";import"./index-BHZ9rsvc.js";import"./index-BLTHUTFO.js";import"./useEventCallback-CfXNQR5R.js";import"./SkeletonBar-_y5I33tw.js";import"./LoadingCell-DcLgQ4Ug.js";import"./ColumnConfigDialog-BnUf7DkN.js";import"./DraggableList-UzQEUU7r.js";import"./search-CfvDmUdq.js";import"./Input-Cp0wF4SO.js";import"./useControlled-36BIvyhs.js";import"./Button-DhDj0z4t.js";import"./small-cross-jfjdmJHA.js";import"./ActionButton-CR2Evx-a.js";import"./Checkbox-C4uEDJZr.js";import"./useValueChanged-BPifwweb.js";import"./CollapsiblePanel-C7tnC6NS.js";import"./MultiColumnSortDialog-DGfaXG6u.js";import"./MenuTrigger-C-T3X_LR.js";import"./CompositeItem-C1vm5CBx.js";import"./ToolbarRootContext-BNVI8n48.js";import"./getDisabledMountTransitionStyles-BpxmMrDd.js";import"./getPseudoElementBounds-CH0myo6i.js";import"./chevron-down-CkO13R5T.js";import"./index-CazPboEE.js";import"./error-Cbkkosws.js";import"./BaseCbacBanner-D8PUVhgH.js";import"./makeExternalStore-BrJQqJjN.js";import"./Tooltip-Ct0waVPJ.js";import"./PopoverPopup-CqPpOpqV.js";import"./debounce-DSQ3zwts.js";import"./useOsdkClient-X3frRnwW.js";import"./tick-BKzW071D.js";import"./DropdownField-BWhPjm6f.js";import"./isEqual-BcnxjguD.js";import"./withOsdkMetrics-V_4YWEt4.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
