import{f as p,j as e}from"./iframe-DSbYefrL.js";import{O as i}from"./object-table-DOLS4r3F.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-Clv0QEBX.js";import"./Table-CpIrQiHH.js";import"./index-DfJdOFwn.js";import"./Dialog-CLbTzkqY.js";import"./cross-CfYS8owk.js";import"./svgIconContainer-Bkjdx6MT.js";import"./useBaseUiId-DkV43R3v.js";import"./InternalBackdrop-CGmifX4P.js";import"./composite-BhxdHiE2.js";import"./index-lJwGhQIz.js";import"./index-BRbX29hR.js";import"./index-D726ldU9.js";import"./useEventCallback-CmXtFHcQ.js";import"./SkeletonBar-C-O5AGPC.js";import"./LoadingCell-D6WW0MuL.js";import"./ColumnConfigDialog-X2Z4R0YZ.js";import"./DraggableList-Bi2lMrFV.js";import"./search-qlM389i2.js";import"./Input-DHiPLKtg.js";import"./useControlled-BarHOyLv.js";import"./isEqual-DgzbG1vg.js";import"./isObject-BIPzkIP0.js";import"./Button-C4t72u0x.js";import"./ActionButton-B3NdvxLm.js";import"./Checkbox-lygbNFpU.js";import"./useValueChanged-CbGyaYIf.js";import"./CollapsiblePanel-t-cQ1kOx.js";import"./MultiColumnSortDialog-B22v39MA.js";import"./MenuTrigger-BW5eLLQj.js";import"./CompositeItem-BtVMJozf.js";import"./ToolbarRootContext-B6LO1XZ_.js";import"./getDisabledMountTransitionStyles-BD6--rec.js";import"./getPseudoElementBounds-CQ0_pKjY.js";import"./chevron-down-Bh4mvEIQ.js";import"./index-R_rBoHID.js";import"./error-BdBj8w6f.js";import"./BaseCbacBanner-8eEQNYiR.js";import"./makeExternalStore-48lrjWXo.js";import"./Tooltip-BTFhzX0F.js";import"./PopoverPopup-Bam1YrA7.js";import"./debounce-GZwwSBFh.js";import"./useOsdkClient-aHXhUh5K.js";import"./tick-CNdHphiX.js";import"./DropdownField-Bsoi1h6R.js";import"./withOsdkMetrics-D8wuERpN.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
