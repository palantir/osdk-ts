import{f as p,j as e}from"./iframe-Cw3LH66c.js";import{O as i}from"./object-table-CY3WUeVX.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-0zDabIei.js";import"./Table-CVbXTPSA.js";import"./index-BEERWgVy.js";import"./Dialog-Df6dPfbY.js";import"./cross-BxwRmAhN.js";import"./svgIconContainer-By_Zx8bX.js";import"./useBaseUiId-BSwJaM6C.js";import"./InternalBackdrop-dbVS_Lfc.js";import"./composite-DkWEa617.js";import"./index-Dvk9IgkK.js";import"./index-Di_GE7Jl.js";import"./index-DDiROJlP.js";import"./useEventCallback-5AhjtGqt.js";import"./SkeletonBar-Dzu018il.js";import"./LoadingCell-bar-atLv.js";import"./ColumnConfigDialog-Z9ANM7bd.js";import"./DraggableList-CUNXv4BN.js";import"./search-CZ_uh4ZV.js";import"./Input-CtFwY591.js";import"./useControlled-0OhiGPgb.js";import"./Button-dLCYbHpS.js";import"./small-cross-DMGeALz-.js";import"./ActionButton-BN9H3toR.js";import"./Checkbox-vgDy4sPH.js";import"./useValueChanged-C15eXzrn.js";import"./CollapsiblePanel-BqpzO6p2.js";import"./MultiColumnSortDialog-Uxw5HPsx.js";import"./MenuTrigger-BzYPZco1.js";import"./CompositeItem-C2idg_k-.js";import"./ToolbarRootContext-f4q0b_R5.js";import"./getDisabledMountTransitionStyles-Cqz6gGv9.js";import"./getPseudoElementBounds-B8OXb7F2.js";import"./chevron-down-DRmznTzQ.js";import"./index-DQ4AskLW.js";import"./error-CmY3qZ0u.js";import"./BaseCbacBanner-CZYPxMWo.js";import"./makeExternalStore-Di2REqsM.js";import"./Tooltip-_tVxlKMX.js";import"./PopoverPopup-hu8WdUFW.js";import"./debounce-DT5EOIQR.js";import"./useOsdkClient-C5QpN0d9.js";import"./tick-CnMPIEfW.js";import"./DropdownField-wBvRipXj.js";import"./isEqual-CiVCDmSd.js";import"./withOsdkMetrics-D2csPQg7.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
