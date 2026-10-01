import{f as p,j as e}from"./iframe-CPvF6ZzM.js";import{O as i}from"./object-table-CWIzO1zP.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-BI1t_NCm.js";import"./Table-bSpLxoee.js";import"./index-DfPxhOot.js";import"./Dialog-CcEQU90q.js";import"./cross-CmlX3m4X.js";import"./svgIconContainer-DKpS56Vd.js";import"./useBaseUiId-XltkNyEi.js";import"./InternalBackdrop-BcLn-51b.js";import"./composite-BWoYEjdT.js";import"./index-lsySavSd.js";import"./index-MWDzLIPR.js";import"./index-DcKmVIZM.js";import"./useEventCallback-BWX8o1CN.js";import"./SkeletonBar-BMdJeUof.js";import"./LoadingCell-CJmD9ke6.js";import"./ColumnConfigDialog-D3LttmNB.js";import"./DraggableList-m0jqdBM8.js";import"./search-BLNtYnra.js";import"./Input-Bc7_Uhxn.js";import"./useControlled-C9Dlz_cg.js";import"./Button-BOq8HNJy.js";import"./small-cross-B4RneZ3b.js";import"./ActionButton-DhYCkBu4.js";import"./Checkbox-C7eHtJoH.js";import"./useValueChanged-CWss0hf4.js";import"./CollapsiblePanel-BK_rHvoK.js";import"./MultiColumnSortDialog-C1G0U_eA.js";import"./MenuTrigger-DNDIxPcR.js";import"./CompositeItem-Hn04YYBd.js";import"./ToolbarRootContext-CXaq262I.js";import"./getDisabledMountTransitionStyles-BjJuktUq.js";import"./getPseudoElementBounds-6eTBtUcp.js";import"./chevron-down-eYoSNu4v.js";import"./index-DlqK99lM.js";import"./error-B87OsGL8.js";import"./BaseCbacBanner-VtmLPxLN.js";import"./makeExternalStore-S4D4bUbQ.js";import"./Tooltip-DCy2r5z4.js";import"./PopoverPopup-BxWvq6sk.js";import"./debounce-6I_M5ZGg.js";import"./useOsdkClient-DPiAHwl7.js";import"./tick-FC2fYi94.js";import"./DropdownField-B4l5M5yD.js";import"./isEqual-BsdyxzNC.js";import"./withOsdkMetrics-BRD3Y2PF.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
