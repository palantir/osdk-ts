import{f as p,j as e}from"./iframe-CcTzUt4q.js";import{O as i}from"./object-table-B5mEs8na.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-DTHvyKL2.js";import"./Table-DgQH63iU.js";import"./index-B0L2Pz3U.js";import"./Dialog-BmK-QCMj.js";import"./cross-CX9TEYNs.js";import"./svgIconContainer-DT2XOI7O.js";import"./useBaseUiId-vUFCbP4O.js";import"./InternalBackdrop-LwozvRjF.js";import"./composite-D9XK8W5R.js";import"./index-Dn8qQBZ_.js";import"./index-Bo_ehpsT.js";import"./index-BIFOh3O8.js";import"./useEventCallback-BngVQc52.js";import"./SkeletonBar-P8lEjqKk.js";import"./LoadingCell-DyEWtc2c.js";import"./ColumnConfigDialog-DSI5UCP3.js";import"./DraggableList-kbk4Kq4T.js";import"./search-BaEk66pJ.js";import"./Input-BbwwJ3kI.js";import"./useControlled-CXU26uEu.js";import"./Button-Bhonpuif.js";import"./small-cross-Bi6fImtG.js";import"./ActionButton-38fDduAv.js";import"./Checkbox-DcPzVpFb.js";import"./useValueChanged-DiIlb2iV.js";import"./CollapsiblePanel-DtiDyN9v.js";import"./MultiColumnSortDialog-DpkiqiMy.js";import"./MenuTrigger-vvc96eLU.js";import"./CompositeItem-MWEwicQS.js";import"./ToolbarRootContext-C074rZoJ.js";import"./getDisabledMountTransitionStyles-DXxCwzEL.js";import"./getPseudoElementBounds-oYato3fO.js";import"./chevron-down-C2VHnW9O.js";import"./index-CtpHKrCG.js";import"./error-Dj7Fc47o.js";import"./BaseCbacBanner-CDFaIa-9.js";import"./makeExternalStore-BHMTu4YC.js";import"./Tooltip-DuBTlYLb.js";import"./PopoverPopup-CofoEXd7.js";import"./debounce-yBMZLkBq.js";import"./useOsdkClient-zEDt1fx6.js";import"./tick-DyThwVFn.js";import"./DropdownField-JbUzQxvd.js";import"./isEqual-BITCjXxY.js";import"./withOsdkMetrics-5Ex0_go8.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
