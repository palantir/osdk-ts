import{f as p,j as e}from"./iframe-B4QogxC6.js";import{O as i}from"./object-table-BC8L594r.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-C_5k-fFt.js";import"./Table-Bi1HtYYp.js";import"./index-CQyvBzj_.js";import"./Dialog-Hnfyv8Xj.js";import"./cross-Dv490F0o.js";import"./svgIconContainer-DdyooWte.js";import"./useBaseUiId-DownjkF0.js";import"./InternalBackdrop-DL90UTgk.js";import"./composite-Dqc63iLy.js";import"./index-BKn8iF1n.js";import"./index-D0VjMeuF.js";import"./index-ByT4MXlR.js";import"./useEventCallback-bHimiWWk.js";import"./SkeletonBar-B3VZ6hlb.js";import"./LoadingCell-w9kd8MkW.js";import"./ColumnConfigDialog-Dtj9JJKP.js";import"./DraggableList-MX_3E-v0.js";import"./search-BgJqBCXd.js";import"./Input-DiRfBBOs.js";import"./useControlled-T3xesycb.js";import"./Button-CIw-2F8I.js";import"./small-cross-Cjfa7jit.js";import"./ActionButton-DzObz5rl.js";import"./Checkbox-YkxadoHh.js";import"./useValueChanged-FjHY1o4Y.js";import"./CollapsiblePanel-B5tdGMg0.js";import"./MultiColumnSortDialog-Br81g5wB.js";import"./MenuTrigger-Du6xUBZs.js";import"./CompositeItem-BoXFiz_E.js";import"./ToolbarRootContext-De8fRc6j.js";import"./getDisabledMountTransitionStyles-BtJrecyz.js";import"./getPseudoElementBounds-T2UYiBqB.js";import"./chevron-down-BlCKOTL8.js";import"./index-K9tFI_58.js";import"./error-rqdE4hRy.js";import"./BaseCbacBanner-BsmNmvyE.js";import"./makeExternalStore-BBdCQtVj.js";import"./Tooltip-D-SzDxed.js";import"./PopoverPopup-CWEZyT0m.js";import"./debounce-CeSijK1N.js";import"./useOsdkClient-Cl601DTN.js";import"./tick-9Irchz6P.js";import"./DropdownField-D9HTL46H.js";import"./isEqual-CprjN2vP.js";import"./withOsdkMetrics-DDrBn77T.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
