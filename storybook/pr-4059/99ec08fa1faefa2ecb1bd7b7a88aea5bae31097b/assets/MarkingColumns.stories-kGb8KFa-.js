import{f as p,j as e}from"./iframe-CCVL4Idp.js";import{O as i}from"./object-table-LApLy7sh.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-Bfdvow4t.js";import"./Table-y5i6iDQ6.js";import"./index-CqRYjhYr.js";import"./Dialog-CsuSO74f.js";import"./cross-Bpaou5px.js";import"./svgIconContainer-DLYZviFk.js";import"./useBaseUiId-CNDNQCax.js";import"./InternalBackdrop-BOLrYZlT.js";import"./composite-8_zPWC08.js";import"./index-f-mV_Lh2.js";import"./index-CuMFdNkD.js";import"./index-D1XSNP8S.js";import"./useEventCallback-DNycK2kG.js";import"./SkeletonBar-BQkCbvbz.js";import"./LoadingCell-DKZD2fy5.js";import"./ColumnConfigDialog-BCU4b9nD.js";import"./DraggableList-BWmJYQFV.js";import"./search-C00pZ1Ly.js";import"./Input-Cn7fB1Ph.js";import"./useControlled-wuiuTdj_.js";import"./Button-DYSDt2wl.js";import"./small-cross-D_IDVYYi.js";import"./ActionButton-BoQK0oCg.js";import"./Checkbox-CTiOjQ-V.js";import"./useValueChanged-B0V7HCrV.js";import"./CollapsiblePanel-BdSR7VOY.js";import"./MultiColumnSortDialog-Bz146-0u.js";import"./MenuTrigger-BwcpBOF1.js";import"./CompositeItem-BVwr5vb2.js";import"./ToolbarRootContext-B9eib1V0.js";import"./getDisabledMountTransitionStyles-DsWKjHfV.js";import"./getPseudoElementBounds-B1H8xoBN.js";import"./chevron-down-Ve2FZYZx.js";import"./index-BsgThsOD.js";import"./error-DNOpGdYX.js";import"./BaseCbacBanner-y0OozxMj.js";import"./makeExternalStore-Bx0vFg8y.js";import"./Tooltip-155_4Sip.js";import"./PopoverPopup-ChuxaA1C.js";import"./debounce-DHu_JVgk.js";import"./useOsdkClient-C1izoF8E.js";import"./tick-BXHEK5fI.js";import"./DropdownField-B-zXvzEE.js";import"./isEqual-Do9DtU8-.js";import"./withOsdkMetrics-BTy9Ees1.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
