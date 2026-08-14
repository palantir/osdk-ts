import{f as p,j as e}from"./iframe-Bfqgfvg5.js";import{O as i}from"./object-table-CGvvP8fy.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-sbX0EP0E.js";import"./Table-CtWpiWd1.js";import"./index-BmFrK4uE.js";import"./Dialog-De4cyz94.js";import"./cross-B4_R7rVU.js";import"./svgIconContainer-DOVGkrjj.js";import"./useBaseUiId-BdhQOYo_.js";import"./InternalBackdrop-DCvZ8X87.js";import"./composite-DmYhjO8v.js";import"./index-Bl76L6mj.js";import"./index-CS_96wYM.js";import"./index-BlQFXGsd.js";import"./useEventCallback-B1nJIlEC.js";import"./SkeletonBar-C7y8g3ho.js";import"./LoadingCell-CwwWYKx6.js";import"./ColumnConfigDialog-DENP41HD.js";import"./DraggableList-BsJt6HPL.js";import"./search-Dn2xqqj5.js";import"./Input-C_7kfxom.js";import"./useControlled-D38Ax3L2.js";import"./Button-B2JqEm4Y.js";import"./small-cross-kYeT01JS.js";import"./ActionButton-2FoC5y02.js";import"./Checkbox-BO941x-z.js";import"./useValueChanged-Dx9C0HvB.js";import"./CollapsiblePanel-DeyFJV_M.js";import"./MultiColumnSortDialog-CMuwtBdD.js";import"./MenuTrigger-D2DoQiSy.js";import"./CompositeItem-CWhqikpO.js";import"./ToolbarRootContext-DCYSyhUf.js";import"./getDisabledMountTransitionStyles-BQDB16Rl.js";import"./getPseudoElementBounds-CS1VCemy.js";import"./chevron-down-Dtvuz0Wc.js";import"./index-BpPUDBTM.js";import"./error-Bs83EBeR.js";import"./BaseCbacBanner-jJamV-KH.js";import"./makeExternalStore-BJlkM_Kr.js";import"./Tooltip-DlgkUY-o.js";import"./PopoverPopup-C3yc73Ei.js";import"./debounce-CL7jkThf.js";import"./useOsdkClient-BASUQ_Dv.js";import"./tick-grm64bSY.js";import"./DropdownField-DE4NMuDY.js";import"./isEqual-CoQZln15.js";import"./withOsdkMetrics-DMZgHj0E.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
