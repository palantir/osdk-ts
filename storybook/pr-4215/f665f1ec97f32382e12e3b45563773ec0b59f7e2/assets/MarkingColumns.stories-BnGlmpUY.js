import{f as p,j as e}from"./iframe-CzOy-JTY.js";import{O as i}from"./object-table-C0b1ubO2.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-CIQ1DaMN.js";import"./Table-C8bB-X5_.js";import"./index-Dumhhqmc.js";import"./Dialog-BMqGARaE.js";import"./cross-CWygvYLq.js";import"./svgIconContainer-DpIclYOT.js";import"./useBaseUiId-DnUPrOGO.js";import"./InternalBackdrop-gMia_oWL.js";import"./composite-BVn9jKX7.js";import"./index-CyYfj6ys.js";import"./index-C62E3V-C.js";import"./index-_QH05vrF.js";import"./useEventCallback-C_FMXfn2.js";import"./SkeletonBar-D4NOqT2L.js";import"./LoadingCell-BQfn9-eD.js";import"./ColumnConfigDialog-BcGxv01R.js";import"./DraggableList-DvpxxXIl.js";import"./search-BJ6lcKDX.js";import"./Input-MeFMWRbL.js";import"./useControlled-B2qS0FH4.js";import"./Button-emQM4kcG.js";import"./small-cross-BveryxDD.js";import"./ActionButton-Cda1a-qR.js";import"./Checkbox-B6T5uoCq.js";import"./useValueChanged-BXU_izG3.js";import"./CollapsiblePanel-BO5DGu80.js";import"./MultiColumnSortDialog-Bk31HQNT.js";import"./MenuTrigger-CzBE759j.js";import"./CompositeItem-BAmKL-U0.js";import"./ToolbarRootContext-BCdc83Ck.js";import"./getDisabledMountTransitionStyles-AvhfLujU.js";import"./getPseudoElementBounds-D6X318e6.js";import"./chevron-down-USLYqae_.js";import"./index-BLqBty1z.js";import"./error-Dy_Lr_qP.js";import"./BaseCbacBanner-epv2hjqx.js";import"./makeExternalStore-BilT8BO2.js";import"./Tooltip-BdClGodm.js";import"./PopoverPopup-qNr6ABeL.js";import"./debounce-B12Ng-j0.js";import"./useOsdkClient-D1vV9ihk.js";import"./tick-6hUQYeO9.js";import"./DropdownField-B6ALO_qp.js";import"./isEqual-ChbPr4N3.js";import"./withOsdkMetrics-0tSP_r9F.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
