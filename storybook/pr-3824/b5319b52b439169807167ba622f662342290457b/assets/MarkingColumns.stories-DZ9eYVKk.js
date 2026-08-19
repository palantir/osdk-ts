import{f as p,j as e}from"./iframe-SQbFhZ3c.js";import{O as i}from"./object-table-DO022oJ3.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-Bk8HE262.js";import"./Table-Dn2-WyOU.js";import"./index-DFG7WYoY.js";import"./Dialog-BksF8woT.js";import"./cross-DUHf3Xi-.js";import"./svgIconContainer-DpbMU5PI.js";import"./useBaseUiId-48FpeFM-.js";import"./InternalBackdrop-hdjBgUEf.js";import"./composite-A_HFMc3o.js";import"./index-DhCXsyWo.js";import"./index-DMJ3tVV7.js";import"./index-DaNwYb6O.js";import"./useEventCallback-CPy3Rkd8.js";import"./SkeletonBar-DzQSmgEp.js";import"./LoadingCell-Bih4q95e.js";import"./ColumnConfigDialog-BXFmAyqX.js";import"./DraggableList-CCIOiDz1.js";import"./search-Dv1CXcia.js";import"./Input-egVrdWvR.js";import"./useControlled-D7ywdRLy.js";import"./Button-CFQTwDbl.js";import"./small-cross-BdGuSKTr.js";import"./ActionButton-CZMeSJZL.js";import"./Checkbox-FTHcd1Q_.js";import"./useValueChanged-DOIbdOz8.js";import"./CollapsiblePanel-ZM6dC_qz.js";import"./MultiColumnSortDialog-BmhAx4WI.js";import"./MenuTrigger-B12dsoMz.js";import"./CompositeItem-Ddktyv2i.js";import"./ToolbarRootContext-BzTAPp2U.js";import"./getDisabledMountTransitionStyles-tIoM-SpH.js";import"./getPseudoElementBounds-BpCgKkH2.js";import"./chevron-down-BXSL_Za9.js";import"./index-B7SqLSeR.js";import"./error-cnAgyc_T.js";import"./BaseCbacBanner-BpCrbMvl.js";import"./makeExternalStore-BRt0pXTA.js";import"./Tooltip-5R-f9FdW.js";import"./PopoverPopup-4HlQ8QLc.js";import"./debounce-Lo5bZANl.js";import"./useOsdkClient-B7RtKw1R.js";import"./tick-R0brawEL.js";import"./DropdownField-zLTrjKWE.js";import"./isEqual-puOqvCFK.js";import"./withOsdkMetrics-C4ZNcPUI.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
