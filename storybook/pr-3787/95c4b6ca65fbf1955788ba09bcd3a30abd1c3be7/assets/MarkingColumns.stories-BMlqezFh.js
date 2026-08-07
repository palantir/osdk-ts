import{f as p,j as e}from"./iframe-CsyA0Bys.js";import{O as i}from"./object-table-DKXoIvwf.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-KfZ568TX.js";import"./Table-CkkZtWXC.js";import"./index-BxyPqXWo.js";import"./Dialog-C4huEMMf.js";import"./cross-w7PsKmF1.js";import"./svgIconContainer-DaiSunt0.js";import"./useBaseUiId-DvYZt6lA.js";import"./InternalBackdrop-BGyyYpcl.js";import"./composite-BqX-duXl.js";import"./index-BgAZAXfa.js";import"./index--UUGPORc.js";import"./index-B6tCWI8M.js";import"./useEventCallback-C6V46umO.js";import"./SkeletonBar-DUoV5IXh.js";import"./LoadingCell-BSzubWHe.js";import"./ColumnConfigDialog-D1ScqPPe.js";import"./DraggableList-BzSrNu1D.js";import"./search-45t1HcTK.js";import"./Input-CRzWdgdg.js";import"./useControlled-Bo2Cmprh.js";import"./isEqual-Cj7osBnf.js";import"./isObject-CKDvM3HJ.js";import"./Button-6-1YrzTD.js";import"./ActionButton-EYuh1PNc.js";import"./Checkbox-ygCyTm5_.js";import"./useValueChanged-BRLlAh0p.js";import"./CollapsiblePanel-DWFI6paa.js";import"./MultiColumnSortDialog-BSlmLUh3.js";import"./MenuTrigger-DrHL6axm.js";import"./CompositeItem-CL1_i0UZ.js";import"./ToolbarRootContext-zz45WkNS.js";import"./getDisabledMountTransitionStyles-CO4DEx-A.js";import"./getPseudoElementBounds-C5GdHQ1I.js";import"./chevron-down-Dfm6xDjd.js";import"./index-BnVBTYNX.js";import"./error-B7vEDe1J.js";import"./BaseCbacBanner-CCr22KxZ.js";import"./makeExternalStore-CjIFX2gB.js";import"./Tooltip-DakP11QU.js";import"./PopoverPopup-g6LpsQ1J.js";import"./toNumber-CQrFFewn.js";import"./useOsdkClient-Bfd4ZluK.js";import"./tick-CY-3TnK1.js";import"./DropdownField-D3h01OJB.js";import"./withOsdkMetrics-CoF3qvtY.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
