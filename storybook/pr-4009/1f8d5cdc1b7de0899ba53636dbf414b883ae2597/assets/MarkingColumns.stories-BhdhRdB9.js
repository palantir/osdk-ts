import{f as p,j as e}from"./iframe-YaS06hyW.js";import{O as i}from"./object-table-NgK91Za2.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-CHXu7ylM.js";import"./Table-D0b8j1nn.js";import"./index-B-cO8d-Q.js";import"./Dialog-Dcm8USw5.js";import"./cross-AobcYagI.js";import"./svgIconContainer-DLa4OU0n.js";import"./useBaseUiId-CjvUa8cY.js";import"./InternalBackdrop-BO6eEqaF.js";import"./composite-BkFZzr2I.js";import"./index-DbqTfLlX.js";import"./index-DXr_DK2g.js";import"./index-De5BIU9t.js";import"./useEventCallback-Ddj36AAG.js";import"./SkeletonBar-DHk9E0H4.js";import"./LoadingCell-BoH9snOA.js";import"./ColumnConfigDialog-BZWPvfbS.js";import"./DraggableList-C8mYRZZv.js";import"./search-DaYARQRb.js";import"./Input-Dql0qM-e.js";import"./useControlled-Bm5M3oKq.js";import"./Button-BEru0DpJ.js";import"./small-cross-sr4-rTD5.js";import"./ActionButton-BLeOA9QJ.js";import"./Checkbox-D4nrSXTe.js";import"./useValueChanged-2sKWWR-R.js";import"./CollapsiblePanel-DoSREVMI.js";import"./MultiColumnSortDialog-BJjtuXpU.js";import"./MenuTrigger-DR1I2fHJ.js";import"./CompositeItem-ClG1U4EV.js";import"./ToolbarRootContext-D-k46Imi.js";import"./getDisabledMountTransitionStyles-DDMdB6wz.js";import"./getPseudoElementBounds-CWoE1MIM.js";import"./chevron-down-CxKB5IcW.js";import"./index-D6PE6Ffo.js";import"./error-irND_epE.js";import"./BaseCbacBanner-CBshacCO.js";import"./makeExternalStore-Cqyecvoe.js";import"./Tooltip-Dp5Fjj_b.js";import"./PopoverPopup-BOYvum7T.js";import"./debounce-B7ZPV7rx.js";import"./useOsdkClient-BQhZ6hRm.js";import"./tick-BJJckPUf.js";import"./DropdownField-Do5PO4eK.js";import"./isEqual-CRxLbnY5.js";import"./withOsdkMetrics-8M4HiVCC.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
