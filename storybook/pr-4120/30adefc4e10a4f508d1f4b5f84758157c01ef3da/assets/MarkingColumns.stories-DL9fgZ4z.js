import{f as p,j as e}from"./iframe-Dua4ajQH.js";import{O as i}from"./object-table-BSBQ7353.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-TWiFBZiW.js";import"./Table-DyO6ZkMd.js";import"./index-B5QPpnt_.js";import"./Dialog-CoMuSCwK.js";import"./cross-Dk_ZgApr.js";import"./svgIconContainer-BndmJKKI.js";import"./useBaseUiId-BiStwtEQ.js";import"./InternalBackdrop-LR3Q-MAi.js";import"./composite-C1niPINm.js";import"./index-DfHqmq9q.js";import"./index-X9-XOgeq.js";import"./index-Bj03qASY.js";import"./useEventCallback-DZJs1tu0.js";import"./SkeletonBar-BtuMnAJN.js";import"./LoadingCell-CIVBKFE1.js";import"./ColumnConfigDialog-D5XiHMJ_.js";import"./DraggableList-CU9ZT-2r.js";import"./search-BpzzW9g6.js";import"./Input-CWXiSgRy.js";import"./useControlled-jEZs-eRF.js";import"./Button--2vsDgC3.js";import"./small-cross-CErn4ZoN.js";import"./ActionButton-6icQAY27.js";import"./Checkbox-wBcS_UPd.js";import"./useValueChanged-Dl2xjnKi.js";import"./CollapsiblePanel-Pt5pzLj1.js";import"./MultiColumnSortDialog-E8hvHAyR.js";import"./MenuTrigger-DMCiVOOQ.js";import"./CompositeItem-BwhFHjMK.js";import"./ToolbarRootContext-jICZlJZR.js";import"./getDisabledMountTransitionStyles-D--ljA0s.js";import"./getPseudoElementBounds-ruL93tCB.js";import"./chevron-down-CBHx2nKD.js";import"./index-kT6ASJhA.js";import"./error-B8MXwNx9.js";import"./BaseCbacBanner-BV5_M2D5.js";import"./makeExternalStore-C1Ti9SLi.js";import"./Tooltip-B0A5ZHrA.js";import"./PopoverPopup-DqsKdDvA.js";import"./debounce-CGnJH3Kx.js";import"./useOsdkClient-kLLc3fFG.js";import"./tick-C8Mo77j_.js";import"./DropdownField-BHc6qe6w.js";import"./isEqual-CzhJjz_a.js";import"./withOsdkMetrics-BPBDIPLq.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
