import{f as p,j as e}from"./iframe-xaYq_0YR.js";import{O as i}from"./object-table-AsjdrsJY.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-CtEamZCu.js";import"./Table-BtBCLADu.js";import"./index-BAZUgVLK.js";import"./Dialog-DjzaMP01.js";import"./cross-BYWrVYOR.js";import"./svgIconContainer-B7c-1n-U.js";import"./useBaseUiId-CuYx4u3b.js";import"./InternalBackdrop-DGDqVAbo.js";import"./composite-CLd-Xsnk.js";import"./index-CyyrZFiN.js";import"./index-DF2Gn0NH.js";import"./index-DP9PCb3S.js";import"./useEventCallback-PLoii0z9.js";import"./SkeletonBar-DOvs9Ogk.js";import"./LoadingCell-Dr03zqDl.js";import"./ColumnConfigDialog-8A_bgKtY.js";import"./DraggableList-BhkpGpNV.js";import"./search-CSNqrmY1.js";import"./Input-DH1br5He.js";import"./useControlled-Dxi7lg4n.js";import"./Button-DeJ4BDKP.js";import"./small-cross-CMj_rk0B.js";import"./ActionButton-Pylu-ep_.js";import"./Checkbox-_PBPSJCl.js";import"./useValueChanged-CXh9zAke.js";import"./CollapsiblePanel-DT_VkLtR.js";import"./MultiColumnSortDialog-BU0GAb_6.js";import"./MenuTrigger-DWCTdmWV.js";import"./CompositeItem-BRCxLN7a.js";import"./ToolbarRootContext-BsrWQvwk.js";import"./getDisabledMountTransitionStyles-CYDL5wfQ.js";import"./getPseudoElementBounds-CNTTaqKi.js";import"./chevron-down-C-g4LLea.js";import"./index-CnactCyz.js";import"./error-C61gPazY.js";import"./BaseCbacBanner-BMf-_ldK.js";import"./makeExternalStore-BQ-WZB7-.js";import"./Tooltip-CRRIRYeo.js";import"./PopoverPopup-KIkgahna.js";import"./debounce-MHGPLv4v.js";import"./useOsdkClient-SxgRcysC.js";import"./tick--__R7rUv.js";import"./DropdownField-Cy43Eyay.js";import"./isEqual-qRCnD2AV.js";import"./withOsdkMetrics-Cry6aqA_.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
