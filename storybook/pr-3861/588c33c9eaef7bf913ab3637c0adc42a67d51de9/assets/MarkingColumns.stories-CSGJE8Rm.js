import{f as p,j as e}from"./iframe-CBwUUQtW.js";import{O as i}from"./object-table-0xaWUqlZ.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-CFw_NFcA.js";import"./Table-YGzxKRr5.js";import"./index-cQY6v_um.js";import"./Dialog-B9ReEXqN.js";import"./cross-4fv-Jmha.js";import"./svgIconContainer-Cf3n3CxU.js";import"./useBaseUiId-C9meW85R.js";import"./InternalBackdrop-B-FIOdBL.js";import"./composite-Dosig-Z_.js";import"./index-CpJqyn27.js";import"./index-BfNyjIxY.js";import"./index-Ksij_gkC.js";import"./useEventCallback-BfuBJmbG.js";import"./SkeletonBar-9Y4IZJxt.js";import"./LoadingCell-CZBNP2l0.js";import"./ColumnConfigDialog-ClqQ-I_W.js";import"./DraggableList-PFJqvioG.js";import"./search-D4D4eQBI.js";import"./Input-DGlls_dE.js";import"./useControlled-BpJFCpdY.js";import"./Button-Q3-mVk17.js";import"./small-cross-C_J5UAfw.js";import"./ActionButton-DEThs8fs.js";import"./Checkbox-D2Numq26.js";import"./useValueChanged-CeBJINfY.js";import"./CollapsiblePanel-DWrNNlRd.js";import"./MultiColumnSortDialog-DNPh0R2X.js";import"./MenuTrigger-COi8sKvB.js";import"./CompositeItem-BY3ILgBs.js";import"./ToolbarRootContext-B7OOeP9B.js";import"./getDisabledMountTransitionStyles-l20B6Iy6.js";import"./getPseudoElementBounds-Cl6OXwcO.js";import"./chevron-down-CnjRqozX.js";import"./index-cR5viBYS.js";import"./error-BOVvrWvG.js";import"./BaseCbacBanner-D1P6qnD8.js";import"./makeExternalStore-Cmk4ZnMJ.js";import"./Tooltip-DJVEFLTT.js";import"./PopoverPopup-DR1yzW4I.js";import"./debounce-DZNhRaBF.js";import"./useOsdkClient-BNMZFRkx.js";import"./tick-Cug9VCpy.js";import"./DropdownField-CndbXRIy.js";import"./isEqual-E6ni_c_2.js";import"./withOsdkMetrics-BnrNdVzl.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
