import{f as p,j as e}from"./iframe-CWKtkIUB.js";import{O as i}from"./object-table-5R7mlYop.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-ipGJxtLm.js";import"./Table-C5DJbWx6.js";import"./index-DmJxPlh_.js";import"./Dialog-D-A3RiqJ.js";import"./cross-DEu5gm-s.js";import"./svgIconContainer-CNCTNhPA.js";import"./useBaseUiId-B8eULTI6.js";import"./InternalBackdrop-DGmr5HTr.js";import"./composite-CLrQ0Pw0.js";import"./index-Pd0hKwBH.js";import"./index-CDK29Ulj.js";import"./index-B7xDDX9i.js";import"./useEventCallback-CiKQuPHs.js";import"./SkeletonBar-loAgoXS5.js";import"./LoadingCell-Ctm-dPkr.js";import"./ColumnConfigDialog-ti5A_XUc.js";import"./DraggableList-D8bzxM_t.js";import"./search-D674kfs0.js";import"./Input-CX60mJQX.js";import"./useControlled-BMMn65Nk.js";import"./Button-BfO_B2Gb.js";import"./small-cross-BACObYvZ.js";import"./ActionButton-BoSuUP-h.js";import"./Checkbox-tCScO48D.js";import"./useValueChanged-C5pU5icH.js";import"./CollapsiblePanel-wQjTDLAh.js";import"./MultiColumnSortDialog-thIR0zTv.js";import"./MenuTrigger-DA9injW0.js";import"./CompositeItem-C2bCi6DR.js";import"./ToolbarRootContext-DoNt8TAQ.js";import"./getDisabledMountTransitionStyles-B3rYUkCj.js";import"./getPseudoElementBounds-W7L9XS3F.js";import"./chevron-down-lIwS08X8.js";import"./index-BG-YC_yo.js";import"./error-y4GKwRxO.js";import"./BaseCbacBanner-DAKVcN5l.js";import"./makeExternalStore-Cwu6Hqp2.js";import"./Tooltip-BPBtSQy6.js";import"./PopoverPopup-D7gPsbnN.js";import"./debounce-D1aK-pGn.js";import"./useOsdkClient-u9q269DO.js";import"./tick-c3wuZ6gm.js";import"./DropdownField-KGWqFfVd.js";import"./isEqual-C9GDj2JT.js";import"./withOsdkMetrics-LG6-R3uz.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
