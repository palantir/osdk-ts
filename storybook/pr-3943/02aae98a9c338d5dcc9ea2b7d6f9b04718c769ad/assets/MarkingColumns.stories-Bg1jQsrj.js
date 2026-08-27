import{f as p,j as e}from"./iframe-DdqVegxu.js";import{O as i}from"./object-table-ByrsOXeP.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-D6PJo6GD.js";import"./Table-CgTbvs4M.js";import"./index-pXTincUQ.js";import"./Dialog-CyxbIt19.js";import"./cross-B_5ujI29.js";import"./svgIconContainer-WPgp7GKE.js";import"./useBaseUiId-nCd4gP0F.js";import"./InternalBackdrop-B-inBp_t.js";import"./composite-AP0Q5qKl.js";import"./index-BpvYjPJl.js";import"./index-C7-w2U00.js";import"./index-C36gOkf2.js";import"./useEventCallback-CrzheMxe.js";import"./SkeletonBar-Di7FNKag.js";import"./LoadingCell-L-0-8OAL.js";import"./ColumnConfigDialog-B9d4YciP.js";import"./DraggableList-Da4Zbqzs.js";import"./search-BpB8-h7O.js";import"./Input-D24cu4rP.js";import"./useControlled-CUMQFHQ2.js";import"./Button-DGqa4Bnz.js";import"./small-cross-D4sMWlZd.js";import"./ActionButton-SJRFLles.js";import"./Checkbox-5VwSnA_u.js";import"./useValueChanged-DW_NIpw4.js";import"./CollapsiblePanel-CQXX8d_1.js";import"./MultiColumnSortDialog-0Ur2pLlV.js";import"./MenuTrigger-DTMnqI0G.js";import"./CompositeItem-C9XS2Nyq.js";import"./ToolbarRootContext-EhBdlP5C.js";import"./getDisabledMountTransitionStyles-BTw2Gvj1.js";import"./getPseudoElementBounds-CVNxXAaM.js";import"./chevron-down-BaLH6Ox7.js";import"./index-BDDtSzfk.js";import"./error-N9h2ra1P.js";import"./BaseCbacBanner-DafmbqRO.js";import"./makeExternalStore-CP1AfhtS.js";import"./Tooltip-Bjqp_CkB.js";import"./PopoverPopup-Duy39WhW.js";import"./debounce-Q9FbtPmz.js";import"./useOsdkClient-D6cuZrW5.js";import"./tick-Bf7wDZUJ.js";import"./DropdownField-DW9h28gH.js";import"./isEqual-DgkvNOsS.js";import"./withOsdkMetrics-CPLPuXNu.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
