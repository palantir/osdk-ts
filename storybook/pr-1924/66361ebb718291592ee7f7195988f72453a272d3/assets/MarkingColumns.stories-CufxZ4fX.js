import{f as p,j as e}from"./iframe-ue9bX3Iv.js";import{O as i}from"./object-table-KCp5vh9P.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-C3Wvffv1.js";import"./Table-D0BTKDV8.js";import"./index-IcNnhROh.js";import"./Dialog-NaWY0jNp.js";import"./cross-U1hVGtzD.js";import"./svgIconContainer-BZgEOtnq.js";import"./useBaseUiId-cGzETZoK.js";import"./InternalBackdrop-Ceyi0BuR.js";import"./composite-BhWJUn6b.js";import"./index-DPlEBhdl.js";import"./index-5SMiFPmq.js";import"./index-Cy72BvTv.js";import"./useEventCallback-BH9nt9-5.js";import"./SkeletonBar-CC6lvuY_.js";import"./LoadingCell-CTnp4K_r.js";import"./ColumnConfigDialog-D_g6csXz.js";import"./DraggableList-DegT0gSb.js";import"./search-Bid3yFjL.js";import"./Input-CRAGtCFZ.js";import"./useControlled-yUsh7HNb.js";import"./Button-C0tazeAS.js";import"./small-cross-MncGjMz9.js";import"./ActionButton-D10j_WSJ.js";import"./Checkbox-CdvIj1p1.js";import"./useValueChanged-CKuEXHBa.js";import"./CollapsiblePanel-BJsJTyii.js";import"./MultiColumnSortDialog-Bond2QVr.js";import"./MenuTrigger-Bv5RRTT5.js";import"./CompositeItem-IO3qOv2K.js";import"./ToolbarRootContext-C5ppRaBq.js";import"./getDisabledMountTransitionStyles-CPFTS2y4.js";import"./getPseudoElementBounds-Vjgoy1VG.js";import"./chevron-down-97bKRBG5.js";import"./index-BXYXQLwX.js";import"./error-Bv66Pch2.js";import"./BaseCbacBanner-DZrAsfYB.js";import"./makeExternalStore-DCh8aI2s.js";import"./Tooltip-CMtE3LQx.js";import"./PopoverPopup-Bxk_FVO9.js";import"./debounce-BCtPQVA_.js";import"./useOsdkClient-nZ1mPAY3.js";import"./tick-DxPhMwVy.js";import"./DropdownField-B5Tdlyhu.js";import"./isEqual-f521m5zt.js";import"./withOsdkMetrics-DwrnzR-_.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
