import{f as p,j as e}from"./iframe-B_zDWzul.js";import{O as i}from"./object-table-cOqu9El5.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-DG9VDp_n.js";import"./Table-CkJAHw1l.js";import"./index-Boe0r-ul.js";import"./Dialog-BxEqGnE7.js";import"./cross-DKHH0lxU.js";import"./svgIconContainer-D8Trdk-G.js";import"./useBaseUiId-BPYuvIYG.js";import"./InternalBackdrop-BBDXZiom.js";import"./composite-CRWF04qz.js";import"./index-Br-DhCTN.js";import"./index-aWrltaDE.js";import"./index-Bfg-2Dta.js";import"./useEventCallback-DnLRigCq.js";import"./SkeletonBar-C_WlHfIE.js";import"./LoadingCell-DihNEnoT.js";import"./ColumnConfigDialog-CmSGaq61.js";import"./DraggableList-DUxKa0PJ.js";import"./search-CXl9LYG4.js";import"./Input-K8Dbc9EI.js";import"./useControlled-CZdhzCyg.js";import"./Button-CwOCHkU2.js";import"./small-cross-fjxceIfR.js";import"./ActionButton-DfJlFfaW.js";import"./Checkbox-W0W1RVqq.js";import"./useValueChanged-ge1xS2AC.js";import"./CollapsiblePanel-D0sNlSFL.js";import"./MultiColumnSortDialog-CNA_9xtQ.js";import"./MenuTrigger-CNaCmRRS.js";import"./CompositeItem-DKZBVYKb.js";import"./ToolbarRootContext-CvnVRZq1.js";import"./getDisabledMountTransitionStyles-B56Kq4AN.js";import"./getPseudoElementBounds-BRtR8Y3Z.js";import"./chevron-down-uvQYx996.js";import"./index-qHFFPM8K.js";import"./error-D8w3bqy-.js";import"./BaseCbacBanner-IP3vHVdh.js";import"./makeExternalStore-CxUdCktA.js";import"./Tooltip-CgN9cFWO.js";import"./PopoverPopup-DJdvahb_.js";import"./debounce-BxwTN6fx.js";import"./useOsdkClient-iyjN2aHF.js";import"./tick-Cd-BvMVz.js";import"./DropdownField-CR3J2Rsn.js";import"./isEqual-DoZhvmKv.js";import"./withOsdkMetrics-3_FMme5R.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
