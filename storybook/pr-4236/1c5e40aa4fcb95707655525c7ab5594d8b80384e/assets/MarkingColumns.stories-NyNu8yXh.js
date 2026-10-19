import{f as p,j as e}from"./iframe-CzZ1CUeI.js";import{O as i}from"./object-table-B7jt0dkH.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-CKiwuCze.js";import"./Table-B71BQU90.js";import"./index-CgrT0C-o.js";import"./Dialog-1tbqzT_U.js";import"./cross-D3n1K_EZ.js";import"./svgIconContainer-tM4UWMZ6.js";import"./useBaseUiId-BDfaFxEX.js";import"./InternalBackdrop-BatwaIGG.js";import"./composite-BtIW984D.js";import"./index-BbscB5rP.js";import"./index-D9Klgxm6.js";import"./index-DMR6Xy8f.js";import"./useEventCallback-Dfxeqi-H.js";import"./SkeletonBar-CBl1emhO.js";import"./LoadingCell-4YL5Iew1.js";import"./ColumnConfigDialog-BmIin1xN.js";import"./DraggableList-DA8N3_vy.js";import"./search-CsQMUjFR.js";import"./Input-D_HiSYHG.js";import"./useControlled-DsQHF60n.js";import"./Button-Dq-U227i.js";import"./small-cross-BcmNd0Cm.js";import"./ActionButton-HRlRekEI.js";import"./Checkbox-BOzhDleH.js";import"./useValueChanged-B2lTvP69.js";import"./CollapsiblePanel-BHrgatVN.js";import"./MultiColumnSortDialog-8Cvl-6Zn.js";import"./MenuTrigger-B2HR8Z6j.js";import"./CompositeItem-CIKEUP56.js";import"./ToolbarRootContext-CutVy21d.js";import"./getDisabledMountTransitionStyles-COt5-b0f.js";import"./getPseudoElementBounds-BJ47Mn2_.js";import"./chevron-down-C3ryHGnx.js";import"./index-C1_2t6dA.js";import"./error-BfspTM5I.js";import"./BaseCbacBanner-CDyk4UfJ.js";import"./makeExternalStore-ES2aAlwo.js";import"./Tooltip-BYmhB2Sw.js";import"./PopoverPopup-D7czmZgM.js";import"./debounce-dY7CApU9.js";import"./useOsdkClient-CsHMxRDn.js";import"./tick-Dh_h7TuN.js";import"./DropdownField-NTQXYuP9.js";import"./isEqual-B_wo3wHf.js";import"./withOsdkMetrics-CRmsMiCZ.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
