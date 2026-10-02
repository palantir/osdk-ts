import{f as p,j as e}from"./iframe-J9lCjP1k.js";import{O as i}from"./object-table-B1D_kq2U.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-BXO0w5mF.js";import"./Table-BoAj-adh.js";import"./index-xbscF9ue.js";import"./Dialog-pqV7JqzY.js";import"./cross-D1CxmRAM.js";import"./svgIconContainer-CLwoVSXr.js";import"./useBaseUiId-BbYI3Fho.js";import"./InternalBackdrop-DxiO-ikG.js";import"./composite-DI_eiBD4.js";import"./index-BcwSN1Tg.js";import"./index-DQUI6WyQ.js";import"./index-DJ2o0-9_.js";import"./useEventCallback-CJtT_lpI.js";import"./SkeletonBar-Cr_Ejt-L.js";import"./LoadingCell-C9uf2PSw.js";import"./ColumnConfigDialog-C6PFIrJ6.js";import"./DraggableList-DJr8XZbG.js";import"./search-Bzg3xwEF.js";import"./Input-Ba7RqXqy.js";import"./useControlled-DItBXz5T.js";import"./Button-VEce61GE.js";import"./small-cross-DiEF7RM6.js";import"./ActionButton-rPtQIhsU.js";import"./Checkbox-WOx6sV-J.js";import"./useValueChanged-hS01fJLb.js";import"./CollapsiblePanel-CDBi8wiI.js";import"./MultiColumnSortDialog-qDXFaklj.js";import"./MenuTrigger-CuWsZUCH.js";import"./CompositeItem-C-k99tdq.js";import"./ToolbarRootContext-DRYgzWjU.js";import"./getDisabledMountTransitionStyles-BgGFzdkL.js";import"./getPseudoElementBounds-CMNlX2Q2.js";import"./chevron-down-C5IBZF4F.js";import"./index-5j_M01Uz.js";import"./error-XzIXc-ko.js";import"./BaseCbacBanner-D_4wtvg0.js";import"./makeExternalStore-j1jcO9d9.js";import"./Tooltip-BLJkCuf9.js";import"./PopoverPopup-BG_PpWHa.js";import"./debounce-DDbncj5R.js";import"./useOsdkClient-DkjXMcnc.js";import"./tick-BYtBOYaj.js";import"./DropdownField-HoWLtdUo.js";import"./isEqual-CcO5n7ZV.js";import"./withOsdkMetrics-C6QFCRSF.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
