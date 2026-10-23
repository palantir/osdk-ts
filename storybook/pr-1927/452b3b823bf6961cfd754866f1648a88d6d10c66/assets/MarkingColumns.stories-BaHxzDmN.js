import{f as p,j as e}from"./iframe-BpdL9i9r.js";import{O as i}from"./object-table-D8EV8T58.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-BGgpRwmn.js";import"./Table-KFE7UNSo.js";import"./index-BOBmNIkf.js";import"./Dialog-BYS7qVOM.js";import"./cross-B_FitAUD.js";import"./svgIconContainer-BYUaz7v8.js";import"./useBaseUiId-DRf0avcO.js";import"./InternalBackdrop-BMXRBBRn.js";import"./composite-BFfsCZEe.js";import"./index-Dh6vk7Lg.js";import"./index-CAZS1ZmE.js";import"./index-B2GBLWAK.js";import"./useEventCallback-Cv7ZNXWB.js";import"./SkeletonBar-acxIujrp.js";import"./LoadingCell-ixXOOpOP.js";import"./ColumnConfigDialog-B3GVMtic.js";import"./DraggableList-MiRYJus0.js";import"./search-C5Bpx8xV.js";import"./Input-yfdnK4QX.js";import"./useControlled-QZyhjlC2.js";import"./Button-BysZxDt3.js";import"./small-cross-CbVs9Rqg.js";import"./ActionButton-GDiRTL_d.js";import"./Checkbox-CRk0naPI.js";import"./useValueChanged-_ggW3wfM.js";import"./CollapsiblePanel-Bhllaees.js";import"./MultiColumnSortDialog-C_FOAodo.js";import"./MenuTrigger-xiavFyRB.js";import"./CompositeItem-DWqZMJZf.js";import"./ToolbarRootContext-B3r4TQUK.js";import"./getDisabledMountTransitionStyles-BPLTuK4K.js";import"./getPseudoElementBounds-WaWUWStD.js";import"./chevron-down-CmBeGku0.js";import"./index-CQPYqNM-.js";import"./error-BZRmZs4O.js";import"./BaseCbacBanner-D4pdI21N.js";import"./makeExternalStore-BVQoDSnU.js";import"./Tooltip-D5UgCEsg.js";import"./PopoverPopup-DvvB667y.js";import"./debounce-DTQhMy-X.js";import"./useOsdkClient-rNJRaM8P.js";import"./tick-DtX6b8Qy.js";import"./DropdownField-jH7MfoFT.js";import"./isEqual-DXMiZQC8.js";import"./withOsdkMetrics-DoqsagcU.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
