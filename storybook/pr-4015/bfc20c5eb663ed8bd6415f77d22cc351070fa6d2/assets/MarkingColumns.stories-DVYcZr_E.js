import{f as p,j as e}from"./iframe-DFW0mMZ1.js";import{O as i}from"./object-table-R7dnPyqi.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-Qawhc3UJ.js";import"./Table-DGsPlPM-.js";import"./index-o6yCYR6Q.js";import"./Dialog-C851Z3bl.js";import"./cross-BkPI5BMI.js";import"./svgIconContainer-VOBSJ15n.js";import"./useBaseUiId-CXLWSjxr.js";import"./InternalBackdrop-CuZzUJfU.js";import"./composite-C9QpehYt.js";import"./index-Ntq27F76.js";import"./index-CJTfQw-N.js";import"./index-COaiIhBP.js";import"./useEventCallback-CNw5BQ-r.js";import"./SkeletonBar-DShy_z54.js";import"./LoadingCell-gwaRAxxy.js";import"./ColumnConfigDialog-BSY2ydJx.js";import"./DraggableList-DklvKyYU.js";import"./search-B2NWGFRm.js";import"./Input-Bw8rrVtq.js";import"./useControlled-CgydVt6m.js";import"./Button-6FT0QBh6.js";import"./small-cross-B_2v8d0f.js";import"./ActionButton-v9LYexkg.js";import"./Checkbox-vEixf8ZR.js";import"./useValueChanged-Dudyqn1D.js";import"./CollapsiblePanel-qGqB2tFy.js";import"./MultiColumnSortDialog-DwG_JyW0.js";import"./MenuTrigger-BxsGm8l-.js";import"./CompositeItem-CKYwdTed.js";import"./ToolbarRootContext-BwtTYckl.js";import"./getDisabledMountTransitionStyles-C9arfdOC.js";import"./getPseudoElementBounds-Ds-CW1SQ.js";import"./chevron-down-s8opNKgU.js";import"./index-B7I1fXI4.js";import"./error-B3Dge2Yv.js";import"./BaseCbacBanner-Bo49Hg5y.js";import"./makeExternalStore-DQcTHSYH.js";import"./Tooltip-BX7Zc18a.js";import"./PopoverPopup-CzvtrhU_.js";import"./debounce-OIwexpuG.js";import"./useOsdkClient-DekGKRLB.js";import"./tick-DsrTm1u4.js";import"./DropdownField-UijvkKFV.js";import"./isEqual-DYRLDjBa.js";import"./withOsdkMetrics-CjCOoV_f.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
