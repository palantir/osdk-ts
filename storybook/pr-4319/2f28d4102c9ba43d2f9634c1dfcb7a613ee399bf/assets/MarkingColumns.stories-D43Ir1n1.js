import{f as p,j as e}from"./iframe-BrffKLyp.js";import{O as i}from"./object-table-Dpu5k5SK.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-BB6iUnWm.js";import"./Table-B_02uKRN.js";import"./index-DdTg6oKw.js";import"./Dialog-Ksl7yw-Q.js";import"./cross-Dp6LnhT2.js";import"./svgIconContainer-dbsVi0_7.js";import"./useBaseUiId-OXag9z4A.js";import"./InternalBackdrop-CnkFNeAc.js";import"./composite-B19juyCu.js";import"./index-BY-yZOS1.js";import"./index-BNYKUSid.js";import"./index-CKbA51qL.js";import"./useEventCallback-KlENmr3-.js";import"./SkeletonBar-BNhUv384.js";import"./LoadingCell-uuhgPaRC.js";import"./ColumnConfigDialog-DjoTRpTp.js";import"./DraggableList-DKtcAVy4.js";import"./search-DpKU3GOV.js";import"./Input-D50y4-4d.js";import"./useControlled-ByoWnUuY.js";import"./Button-BBZWD59x.js";import"./small-cross-CpyGHN9N.js";import"./ActionButton-C4PM5hyU.js";import"./Checkbox-DfzWclH1.js";import"./useValueChanged-CAUNudgK.js";import"./CollapsiblePanel-B88FbLvt.js";import"./MultiColumnSortDialog-OtGBhL2Z.js";import"./MenuTrigger-C1wZppHS.js";import"./CompositeItem-BfleHTK8.js";import"./ToolbarRootContext-B5DfTbi7.js";import"./getDisabledMountTransitionStyles-C9YJOWb9.js";import"./getPseudoElementBounds-vl7uyq45.js";import"./chevron-down-BEFoIyYv.js";import"./index-YnTFldk0.js";import"./error-y0lQ0i5v.js";import"./BaseCbacBanner-C1aMcfEF.js";import"./makeExternalStore-DG5GHaRJ.js";import"./Tooltip-Cnrxi8BQ.js";import"./PopoverPopup-qvwA2CT4.js";import"./debounce-CTTKbsgG.js";import"./useOsdkClient-VXDqhkKt.js";import"./tick-D7AFc6ML.js";import"./DropdownField-DYCm_r7c.js";import"./isEqual-DtGDNuhx.js";import"./withOsdkMetrics-rbdPxHeN.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
