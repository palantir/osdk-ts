import{f as p,j as e}from"./iframe-Bg9VnJHM.js";import{O as i}from"./object-table-amVzFco4.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-m1Y4Llv5.js";import"./Table-BuldsrKU.js";import"./index-CrJT52a7.js";import"./Dialog-DUK3wWA4.js";import"./cross-DEexlnSb.js";import"./svgIconContainer-B5yPj85L.js";import"./useBaseUiId-CYMqm51-.js";import"./InternalBackdrop-CeTJdNJ6.js";import"./composite-CF0kxpXB.js";import"./index-B_gLEwxs.js";import"./index-CG5WNHLL.js";import"./index-P4YHC7Tt.js";import"./useEventCallback-ZjhazvKS.js";import"./SkeletonBar-bBmFROmS.js";import"./LoadingCell-BJt2EPmy.js";import"./ColumnConfigDialog-UV8R_Qk-.js";import"./DraggableList-TKA3_RUd.js";import"./search-B3ctgFIA.js";import"./Input--DCIJnB7.js";import"./useControlled-CD1625aB.js";import"./Button-bC6hWzK9.js";import"./small-cross-OY9xNRBI.js";import"./ActionButton-B6dXjYLE.js";import"./Checkbox-Cg65FgW0.js";import"./useValueChanged-DRlc2qqv.js";import"./CollapsiblePanel-DSo0JsvZ.js";import"./MultiColumnSortDialog-qjN4KhlD.js";import"./MenuTrigger-Duemy2Ih.js";import"./CompositeItem-Doe6baU0.js";import"./ToolbarRootContext-CPQhz84F.js";import"./getDisabledMountTransitionStyles-bhI1sbqZ.js";import"./getPseudoElementBounds-C_Awe47M.js";import"./chevron-down-DMUuxvLr.js";import"./index-LhIP_XZe.js";import"./error-Cbas_szk.js";import"./BaseCbacBanner-BrC_F4yF.js";import"./makeExternalStore-CC5GqevO.js";import"./Tooltip-2G34amcZ.js";import"./PopoverPopup-chqgajPg.js";import"./debounce-GP3wjz1k.js";import"./useOsdkClient-BIv1liKI.js";import"./tick-y1MkAvoV.js";import"./DropdownField-BLKPA1Pt.js";import"./isEqual-DX2mLbEy.js";import"./withOsdkMetrics-UJO3eOQJ.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
