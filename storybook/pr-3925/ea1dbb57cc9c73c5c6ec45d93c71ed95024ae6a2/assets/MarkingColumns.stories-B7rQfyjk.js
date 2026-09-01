import{f as p,j as e}from"./iframe-BVyCc2AC.js";import{O as i}from"./object-table-BvrjOYow.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper--HBo1d6L.js";import"./Table-NzMBYDC_.js";import"./index-BNzHGqwC.js";import"./Dialog-RFfKY_MI.js";import"./cross-Ch6pWJlm.js";import"./svgIconContainer-C1dTG25d.js";import"./useBaseUiId-DiffXzRm.js";import"./InternalBackdrop-Dx58jf-M.js";import"./composite-CBp6hdMU.js";import"./index-BevvX3YQ.js";import"./index-x0mWFteh.js";import"./index-B8CTpNC0.js";import"./useEventCallback-C0ELfPhC.js";import"./SkeletonBar-BR_liQHe.js";import"./LoadingCell-CZlAChsW.js";import"./ColumnConfigDialog-B83i398L.js";import"./DraggableList-B9Ryk58k.js";import"./search-Dykn9IV3.js";import"./Input-BZeDxcIX.js";import"./useControlled-C2MZaBz1.js";import"./Button-BRNew1Yr.js";import"./small-cross-BuJARxxP.js";import"./ActionButton-Dp7wT3Gt.js";import"./Checkbox-CnXUg1xk.js";import"./useValueChanged-DnFEdsSp.js";import"./CollapsiblePanel-BYmC-C9w.js";import"./MultiColumnSortDialog-BaAbpi0b.js";import"./MenuTrigger-Rg53KH2n.js";import"./CompositeItem-C3G54MgE.js";import"./ToolbarRootContext-DsUmoyrJ.js";import"./getDisabledMountTransitionStyles-DGgBy0ZL.js";import"./getPseudoElementBounds-C0BRyLYY.js";import"./chevron-down-ClvvnW1g.js";import"./index-cmuB7ZqK.js";import"./error-QOEmR757.js";import"./BaseCbacBanner-CgZ5qHj0.js";import"./makeExternalStore-B_RrnM78.js";import"./Tooltip-BJ9N3gwB.js";import"./PopoverPopup-VXym3Z2T.js";import"./debounce-HEmB9pej.js";import"./useOsdkClient-BjhGBjE8.js";import"./tick-TdYmBPGO.js";import"./DropdownField-DVFSk7iy.js";import"./isEqual-D2FhFc1A.js";import"./withOsdkMetrics-B82QxFXL.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
