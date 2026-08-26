import{f as p,j as e}from"./iframe-BLZOZW6T.js";import{O as i}from"./object-table-DqxkZbgO.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-BHT5lAru.js";import"./Table-dx6pwWIS.js";import"./index-Ahi5oMOt.js";import"./Dialog-GVs4rX3z.js";import"./cross-tEyjMRHD.js";import"./svgIconContainer-5vRPxuG5.js";import"./useBaseUiId-DZK7RG_f.js";import"./InternalBackdrop-iNO5Vei7.js";import"./composite-CRbvEibM.js";import"./index-DTxc1Osh.js";import"./index-ew_UyycK.js";import"./index-hsRhqC-3.js";import"./useEventCallback-DEsWc7Yx.js";import"./SkeletonBar-DMlEsaA0.js";import"./LoadingCell-C_e88Nbd.js";import"./ColumnConfigDialog-Ca0TTFpY.js";import"./DraggableList-DHxzUxXi.js";import"./search-FYqqa5v1.js";import"./Input-BOnD-W6r.js";import"./useControlled-COYf85Oy.js";import"./Button-DIO4S2kj.js";import"./small-cross-B3UhGftV.js";import"./ActionButton-C5lrJG63.js";import"./Checkbox-DNqoME2L.js";import"./useValueChanged-E7YHGw8y.js";import"./CollapsiblePanel-CTIviYDr.js";import"./MultiColumnSortDialog-B_1MQGgn.js";import"./MenuTrigger-KIj5uwST.js";import"./CompositeItem-C1uYFHLI.js";import"./ToolbarRootContext-J2Xa_TG-.js";import"./getDisabledMountTransitionStyles-CHVkErr4.js";import"./getPseudoElementBounds-BrWb8Yo6.js";import"./chevron-down-Cs3lx4vz.js";import"./index-DwKU9nYV.js";import"./error-BZramTgy.js";import"./BaseCbacBanner-cnlNeaYN.js";import"./makeExternalStore-M7RjktEr.js";import"./Tooltip-DphF3Fsm.js";import"./PopoverPopup-dw0h2vwP.js";import"./debounce-BZPHVZxa.js";import"./useOsdkClient-D8U812ID.js";import"./tick-C0OJoswb.js";import"./DropdownField-L_MoXsHP.js";import"./isEqual-DwVE72P3.js";import"./withOsdkMetrics-CD2XJjA_.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
