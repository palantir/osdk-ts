import{f as p,j as e}from"./iframe-CjqaNb_6.js";import{O as i}from"./object-table-BLp0NQy8.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-CGa3vgnS.js";import"./Table-C9Ts5vCP.js";import"./index-vq-4ZEFu.js";import"./Dialog-Cyu4HK_T.js";import"./cross-BpdOGJyJ.js";import"./svgIconContainer-DjFXNtcD.js";import"./useBaseUiId-BlK4VlOb.js";import"./InternalBackdrop-t0TxIlY7.js";import"./composite-C2vCaoMT.js";import"./index-CicBoOrA.js";import"./index-_mZt-hWo.js";import"./index-Cuh_ZcBo.js";import"./useEventCallback-DpCsUsma.js";import"./SkeletonBar-BNDqBgQ7.js";import"./LoadingCell-GbbbFo6u.js";import"./ColumnConfigDialog-B8Hmr4Iw.js";import"./DraggableList-KApAS3IC.js";import"./search-DVbD0a3n.js";import"./Input-BvVBd0y-.js";import"./useControlled-DENE4AVf.js";import"./Button-d7ygQEjr.js";import"./small-cross-CwlKy0u0.js";import"./ActionButton-BJGjBTpO.js";import"./Checkbox-B-NTnxav.js";import"./useValueChanged-BhQo8aRa.js";import"./CollapsiblePanel-DowHk0nd.js";import"./MultiColumnSortDialog-B9x5EL7H.js";import"./MenuTrigger-CR-xcnEV.js";import"./CompositeItem-DdNr1E7d.js";import"./ToolbarRootContext-BkN7DcjO.js";import"./getDisabledMountTransitionStyles-DpBysH4p.js";import"./getPseudoElementBounds-CAI6qpMe.js";import"./chevron-down-DCYjYXHO.js";import"./index-Dd6FNa4t.js";import"./error-CICrjBQf.js";import"./BaseCbacBanner-D_2WY7v4.js";import"./makeExternalStore-DymPkA7f.js";import"./Tooltip-DP0dSQE1.js";import"./PopoverPopup-DLqc0nMK.js";import"./debounce-CS5Zky73.js";import"./useOsdkClient-KzXi1Mfu.js";import"./tick-DFEtV6b8.js";import"./DropdownField-B6TBtxf2.js";import"./isEqual-BHczr-VC.js";import"./withOsdkMetrics-DqLs3Yq6.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
