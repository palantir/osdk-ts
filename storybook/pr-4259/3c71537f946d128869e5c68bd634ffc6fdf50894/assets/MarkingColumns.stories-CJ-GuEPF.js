import{f as p,j as e}from"./iframe-C_udlJU4.js";import{O as i}from"./object-table-D8btKdtG.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-D7A5VPqB.js";import"./Table-BxZ4FlUB.js";import"./index-D5Td05wZ.js";import"./Dialog-B-7Y63ma.js";import"./cross-aLVt525v.js";import"./svgIconContainer-YTE10dOj.js";import"./useBaseUiId-D9eSz4SE.js";import"./InternalBackdrop-wUvFwLWj.js";import"./composite-0__3ht0j.js";import"./index-kFWYrntg.js";import"./index-BIYZQ0cF.js";import"./index-Bt6VxweC.js";import"./useEventCallback-DZ1nXXaM.js";import"./SkeletonBar-DVvww04b.js";import"./LoadingCell-BArURkSy.js";import"./ColumnConfigDialog-BGmnqW1G.js";import"./DraggableList-D9SeTSjx.js";import"./search-BeZJ_QRn.js";import"./Input-DnhGyrNk.js";import"./useControlled-BScpaCoT.js";import"./Button-DMGSDF9f.js";import"./small-cross-bAfYX1bR.js";import"./ActionButton-CCV1Er0F.js";import"./Checkbox-Drxv5VPv.js";import"./useValueChanged-D5Daoi2-.js";import"./CollapsiblePanel-ZDu1kmyl.js";import"./MultiColumnSortDialog-D7FKiF7W.js";import"./MenuTrigger-ThxxugOw.js";import"./CompositeItem-D9nRDYX0.js";import"./ToolbarRootContext-Cypj8NdZ.js";import"./getDisabledMountTransitionStyles-D8uTEEjX.js";import"./getPseudoElementBounds-ADoHBIxL.js";import"./chevron-down-BaUNK2Yk.js";import"./index-CzIBiuyR.js";import"./error-DvqmoNGN.js";import"./BaseCbacBanner-BsFmMMHy.js";import"./makeExternalStore-DSU-MzRu.js";import"./Tooltip-B_PTRmKi.js";import"./PopoverPopup-InrtXQrT.js";import"./debounce-SX_bnHC2.js";import"./useOsdkClient-DEmnm4QT.js";import"./tick-LuoIBRv5.js";import"./DropdownField-zTIV4KYc.js";import"./isEqual-Bsc5Qs3H.js";import"./withOsdkMetrics-Bs3JzGD4.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
