import{f as p,j as e}from"./iframe-BGXQayXc.js";import{O as i}from"./object-table-MIGxjgCf.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-NRrpjeI0.js";import"./Table-DwbecF3W.js";import"./index-BbGsyqOi.js";import"./Dialog-CQtQnZ5i.js";import"./cross-DC2Z1Ioq.js";import"./svgIconContainer-GwtppRLN.js";import"./useBaseUiId-CiIILwi-.js";import"./InternalBackdrop-DVb-kA91.js";import"./composite-CxwljJm3.js";import"./index-DVnvFKQ9.js";import"./index-Q_IDGxPs.js";import"./index-C2No9_3o.js";import"./useEventCallback-Doyq9xlP.js";import"./SkeletonBar-D4xRB_P4.js";import"./LoadingCell-1IfXOjrD.js";import"./ColumnConfigDialog-CfUI_nrj.js";import"./DraggableList-CwYE2BCE.js";import"./search-CG2X3jdC.js";import"./Input-CJ9L1nB_.js";import"./useControlled-Cx0doQf6.js";import"./isEqual-_QppRuU1.js";import"./isObject-CpNOWNAL.js";import"./Button-0zluTTNn.js";import"./ActionButton-PBftEzPB.js";import"./Checkbox-BjZ835Ix.js";import"./useValueChanged-C-BLIIiy.js";import"./CollapsiblePanel-drMODSok.js";import"./MultiColumnSortDialog-BNVz4UQF.js";import"./MenuTrigger-EnMUIWlN.js";import"./CompositeItem-8ppYONab.js";import"./ToolbarRootContext-CVRCxt6k.js";import"./getDisabledMountTransitionStyles-Bs7aafzi.js";import"./getPseudoElementBounds-CUu6YACx.js";import"./chevron-down-BkFumYFe.js";import"./index-62-q8zEu.js";import"./error-D2AB_uHu.js";import"./BaseCbacBanner-DcTfUuEG.js";import"./makeExternalStore-bGGx7Jm8.js";import"./Tooltip-BqBaS9NB.js";import"./PopoverPopup-CiQN9YtB.js";import"./toNumber-CQsrp6Vk.js";import"./useOsdkClient-DbTuMB4g.js";import"./tick-BNqLTRdd.js";import"./DropdownField-CLIuwmMt.js";import"./withOsdkMetrics-DBduly0k.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
