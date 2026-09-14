import{f as p,j as e}from"./iframe-CQYW_eB-.js";import{O as i}from"./object-table-BDeFDNjl.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-D9TT_d3h.js";import"./Table-OjBZFtWq.js";import"./index-T0VZSE-0.js";import"./Dialog-B1Us0h3J.js";import"./cross-4hmynEDT.js";import"./svgIconContainer-BqHGQtsP.js";import"./useBaseUiId-CLAYvn4B.js";import"./InternalBackdrop-C-z8SZHZ.js";import"./composite-BSIyIiZo.js";import"./index-e5OIlOnL.js";import"./index-B0AlVUaG.js";import"./index-DhxqciGT.js";import"./useEventCallback-C3RBUCaT.js";import"./SkeletonBar-C0p74Cj2.js";import"./LoadingCell-CjFrSWuR.js";import"./ColumnConfigDialog-DvGyHFcN.js";import"./DraggableList-DJMs0ux8.js";import"./search-Dr6j30rS.js";import"./Input-BafxkRHB.js";import"./useControlled-Z2EDTbBt.js";import"./Button-CYh2Cp69.js";import"./small-cross-JF11sM_d.js";import"./ActionButton-C0r1BUIm.js";import"./Checkbox-C_bPdJMy.js";import"./useValueChanged-CM5Va8yd.js";import"./CollapsiblePanel-B0DUDYqS.js";import"./MultiColumnSortDialog-Ba3Y_NE5.js";import"./MenuTrigger-o1K9Wiz8.js";import"./CompositeItem-B2O_tBvb.js";import"./ToolbarRootContext-DdcVqPbo.js";import"./getDisabledMountTransitionStyles-BIEIO7LI.js";import"./getPseudoElementBounds-B7H73yVG.js";import"./chevron-down-3SfwSm8L.js";import"./index-Cw-CpLvV.js";import"./error-Cu14UhDr.js";import"./BaseCbacBanner-5fZxMSPz.js";import"./makeExternalStore-3GXsIke7.js";import"./Tooltip-C-8DSvp1.js";import"./PopoverPopup-DiKMNXk7.js";import"./debounce-iahYFdXe.js";import"./useOsdkClient-CtP0GIsC.js";import"./tick-DZRxM9qV.js";import"./DropdownField-DVT_1-ko.js";import"./isEqual-CtXL3I7G.js";import"./withOsdkMetrics-jD7Q4XnW.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
