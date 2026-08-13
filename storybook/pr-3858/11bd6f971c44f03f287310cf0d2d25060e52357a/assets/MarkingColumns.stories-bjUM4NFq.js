import{f as p,j as e}from"./iframe-C6xDkpL_.js";import{O as i}from"./object-table-BmIyANTb.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-BAViXO5q.js";import"./Table-BkA7ohuL.js";import"./index-C6MVQouO.js";import"./Dialog-Tlc2Lie8.js";import"./cross-DoloqHI6.js";import"./svgIconContainer-CdyNM_fM.js";import"./useBaseUiId-D6ssAiPF.js";import"./InternalBackdrop-CIQgYLLB.js";import"./composite-DFd1O6P2.js";import"./index-8nNjBhn6.js";import"./index-B9fL4M4R.js";import"./index-CLG4UISh.js";import"./useEventCallback-Di4B6FMR.js";import"./SkeletonBar-DRh7opHQ.js";import"./LoadingCell-C_2TOftE.js";import"./ColumnConfigDialog-Dy2SoZnr.js";import"./DraggableList-BSJIsgWC.js";import"./search-B146ryND.js";import"./Input-CwXgJ7o8.js";import"./useControlled-De-rJN5p.js";import"./isEqual-Can796Ty.js";import"./isObject-9R6-bCUW.js";import"./Button-CJGEFDOi.js";import"./ActionButton-B7kGoqvf.js";import"./Checkbox-BnUCpH5h.js";import"./useValueChanged-Bx12pUkB.js";import"./CollapsiblePanel-BfEKq3XZ.js";import"./MultiColumnSortDialog-CYWL3EVq.js";import"./MenuTrigger-tMnAO8Vt.js";import"./CompositeItem-C56Q588H.js";import"./ToolbarRootContext-CgrQlAcm.js";import"./getDisabledMountTransitionStyles-JYy7p7IX.js";import"./getPseudoElementBounds-DsBupB7o.js";import"./chevron-down-_i2-cqyT.js";import"./index-CJ9az84z.js";import"./error-BKQEETqk.js";import"./BaseCbacBanner-CG_0-BGI.js";import"./makeExternalStore-Bs5Z2Kjz.js";import"./Tooltip-D_XtxgOG.js";import"./PopoverPopup-DbLmRYYP.js";import"./toNumber-BN3QNian.js";import"./useOsdkClient-DksWv1NW.js";import"./tick-BGAw3EUG.js";import"./DropdownField-CMikhZK7.js";import"./withOsdkMetrics-CeWAAesK.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
