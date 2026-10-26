import{f as p,j as e}from"./iframe-BnIVPADF.js";import{O as i}from"./object-table-AVAMJlkk.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-D6GdL41X.js";import"./Table-Bja8lNV8.js";import"./index-DBHi4RbH.js";import"./Dialog-HSC9fHdB.js";import"./cross-DLlUDs4D.js";import"./svgIconContainer-gtMhd5mD.js";import"./useBaseUiId-BMj8ARX-.js";import"./InternalBackdrop-RqILjWGS.js";import"./composite-Ji9umu3K.js";import"./index-BKtQYF4d.js";import"./index-DwvcPf66.js";import"./index-CS2LLkKv.js";import"./useEventCallback-BxLA2qmi.js";import"./SkeletonBar-Bbzq-NrQ.js";import"./LoadingCell-CgWQDbs0.js";import"./ColumnConfigDialog-CPgTr-hR.js";import"./DraggableList-B-8CW1gW.js";import"./search-BssqF2mG.js";import"./Input-CKDCD_hI.js";import"./useControlled-DeFsLTJI.js";import"./Button-iaybQtEF.js";import"./small-cross-mjS1pjh5.js";import"./ActionButton-DG5xkgFq.js";import"./Checkbox-COG1rG6i.js";import"./useValueChanged-CoLs32Ul.js";import"./CollapsiblePanel-BX1PDtkn.js";import"./MultiColumnSortDialog-DzwjWAJ6.js";import"./MenuTrigger-BqlnCop4.js";import"./CompositeItem-B5UfOKT8.js";import"./ToolbarRootContext-Cc6jVzYJ.js";import"./getDisabledMountTransitionStyles-D3_ex1_k.js";import"./getPseudoElementBounds-D1dOJCQV.js";import"./chevron-down-B7znWhjE.js";import"./index-zynnMEX1.js";import"./error-BWHJsjpo.js";import"./BaseCbacBanner-CmDl6ZYR.js";import"./makeExternalStore-DEMjFRTS.js";import"./Tooltip-xJJqA6f0.js";import"./PopoverPopup-B1uyMBzM.js";import"./debounce-CTj_rgR5.js";import"./useOsdkClient-BTyq9ZHL.js";import"./tick-Cj8MZaAJ.js";import"./DropdownField-B4fxuMh9.js";import"./isEqual-oCSUY3kF.js";import"./withOsdkMetrics-B_v2aQKf.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
