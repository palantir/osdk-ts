import{f as p,j as e}from"./iframe-D9P9JPnE.js";import{O as i}from"./object-table-IFoklx8i.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-CSJ4fD8P.js";import"./Table-bKWI10Gf.js";import"./index-B0GYFgPw.js";import"./Dialog-80ldRr0D.js";import"./cross-Bk7QQAW7.js";import"./svgIconContainer-DE8FpRUq.js";import"./useBaseUiId-LUhCiIEN.js";import"./InternalBackdrop-BQix0v67.js";import"./composite-CwGSSnNe.js";import"./index-BLSs3q_T.js";import"./index--Qtm9bZ-.js";import"./index-BGyPj0mm.js";import"./useEventCallback-P_K3auvj.js";import"./SkeletonBar-CBLTPv0p.js";import"./LoadingCell-DzyZjAPw.js";import"./ColumnConfigDialog-D0EzBoH0.js";import"./DraggableList-A5hwwOY7.js";import"./search-DVgZ7um_.js";import"./Input-BAe5Vta8.js";import"./useControlled-D8iAD7lp.js";import"./Button-DQyP3ss1.js";import"./small-cross-iaDGlrGg.js";import"./ActionButton-BWc4f3QT.js";import"./Checkbox-SGwbw7ao.js";import"./useValueChanged-DmZj1mM7.js";import"./CollapsiblePanel-B75bc_M-.js";import"./MultiColumnSortDialog-Cui85BYg.js";import"./MenuTrigger-BOUfzK5W.js";import"./CompositeItem-Cn9ylTax.js";import"./ToolbarRootContext-D2FTFjj2.js";import"./getDisabledMountTransitionStyles-BiVo7WJG.js";import"./getPseudoElementBounds-CZz-p69t.js";import"./chevron-down-aDiXlal5.js";import"./index-CeKLzZT1.js";import"./error-CRea6GYa.js";import"./BaseCbacBanner-TUxXHSoK.js";import"./makeExternalStore-Ds2qVRO7.js";import"./Tooltip-D9x1TMqS.js";import"./PopoverPopup-Ez6UvTSW.js";import"./debounce-BZCp6Mj3.js";import"./useOsdkClient-Cl7iWri5.js";import"./tick-CM-K1iFc.js";import"./DropdownField-DAFOn67q.js";import"./isEqual-RrURBxyH.js";import"./withOsdkMetrics-DdvxW2hf.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
