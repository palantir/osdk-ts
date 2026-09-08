import{f as p,j as e}from"./iframe-CtGIC4wf.js";import{O as i}from"./object-table-BN3z22rO.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-Ch20KRc2.js";import"./Table-Dr92ijU5.js";import"./index-D-8enqIL.js";import"./Dialog-DPt6P-_t.js";import"./cross-7ld4MA3o.js";import"./svgIconContainer-CIwPC-KF.js";import"./useBaseUiId-DmITm_fg.js";import"./InternalBackdrop-C6_oJFVY.js";import"./composite-BpxrOvE9.js";import"./index-DaOQzUZN.js";import"./index-BSpR3dVY.js";import"./index-AbkXWi4D.js";import"./useEventCallback-oTKJ3xMt.js";import"./SkeletonBar--zC5Nde7.js";import"./LoadingCell-CvRX1HDA.js";import"./ColumnConfigDialog-BfcXzIVd.js";import"./DraggableList-Cxcx9nuu.js";import"./search-w1jm1zVn.js";import"./Input-CpszBXLO.js";import"./useControlled-Dn14MKUN.js";import"./Button-Bzw6-RIC.js";import"./small-cross-BW3uw9Pp.js";import"./ActionButton-9nlxbcnf.js";import"./Checkbox-V0KCS8m5.js";import"./useValueChanged-hcUETskz.js";import"./CollapsiblePanel-Bsia-ST0.js";import"./MultiColumnSortDialog-Cvm-2t9m.js";import"./MenuTrigger-tQhUbfmN.js";import"./CompositeItem-Blb9OYTf.js";import"./ToolbarRootContext-u5ji7rvZ.js";import"./getDisabledMountTransitionStyles-GHCQL6h5.js";import"./getPseudoElementBounds-BIuGb1kA.js";import"./chevron-down-kLepJLrY.js";import"./index-CJuiV3p2.js";import"./error-C6MzmjpC.js";import"./BaseCbacBanner-B2lub7wV.js";import"./makeExternalStore-WvYcSVhg.js";import"./Tooltip-BlDgcFqM.js";import"./PopoverPopup-Br8L-Z3H.js";import"./debounce-l8hrNpo8.js";import"./useOsdkClient-MCjUhV1U.js";import"./tick-BOhfL1zL.js";import"./DropdownField-Cfkapk5B.js";import"./isEqual-n6diGMGR.js";import"./withOsdkMetrics-ozl4Wy9n.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
