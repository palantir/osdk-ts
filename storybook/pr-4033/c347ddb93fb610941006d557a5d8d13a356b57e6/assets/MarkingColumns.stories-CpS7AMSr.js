import{f as p,j as e}from"./iframe-W94gYwuG.js";import{O as i}from"./object-table-u26aBLJA.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-BZdF85c1.js";import"./Table-B7pjjzBe.js";import"./index-Cuk5CzZs.js";import"./Dialog-DPKn2sJh.js";import"./cross-B_Jh2OAU.js";import"./svgIconContainer-DML7KnhH.js";import"./useBaseUiId-DLO1E5rV.js";import"./InternalBackdrop-DEnvfhpS.js";import"./composite-DlnNiwsN.js";import"./index-Dr7s6soJ.js";import"./index-DDztdIhx.js";import"./index-CAHmDUH2.js";import"./useEventCallback-BTozI7bp.js";import"./SkeletonBar-Dgza8SlF.js";import"./LoadingCell-DP8X6ipS.js";import"./ColumnConfigDialog-DYtIfYSh.js";import"./DraggableList-QYESWnxS.js";import"./search-c21shtzO.js";import"./Input-CjZq1vGj.js";import"./useControlled-BNYkrsEO.js";import"./Button-DaHI_b0v.js";import"./small-cross-DTRNmX-j.js";import"./ActionButton-CkSfOtXe.js";import"./Checkbox-BLnB_188.js";import"./useValueChanged-DQx8oeSu.js";import"./CollapsiblePanel-CU0W5mdF.js";import"./MultiColumnSortDialog-B3ZAnm8a.js";import"./MenuTrigger-BXrNTKyb.js";import"./CompositeItem-DfviX0qN.js";import"./ToolbarRootContext-BJjWSvlz.js";import"./getDisabledMountTransitionStyles-CJr3sVjs.js";import"./getPseudoElementBounds-Di9nobCt.js";import"./chevron-down-C2jygjf1.js";import"./index-D8f0-tDA.js";import"./error-BiPx4nD4.js";import"./BaseCbacBanner-Dx5jNdQx.js";import"./makeExternalStore-CHaLvDqs.js";import"./Tooltip-CifKjXPD.js";import"./PopoverPopup-Dwm_HE2U.js";import"./debounce-DXg9Ea7B.js";import"./useOsdkClient-CUKa_SZN.js";import"./tick-DhBqls0o.js";import"./DropdownField-4fOxRAUh.js";import"./isEqual-FLvCKp87.js";import"./withOsdkMetrics-BUuBi764.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
