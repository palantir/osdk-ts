import{f as p,j as e}from"./iframe-zGIsJMpT.js";import{O as i}from"./object-table-B1Dbw53n.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-CC38SpOi.js";import"./Table-DMmh1PI5.js";import"./index-8YhFnXQQ.js";import"./Dialog-BtP0mUqh.js";import"./cross-DktHdIAg.js";import"./svgIconContainer-CP5MNfZh.js";import"./useBaseUiId-ci9SHEVb.js";import"./InternalBackdrop-CEY2WdL1.js";import"./composite-DMfXOji_.js";import"./index-B-FTFFET.js";import"./index-_YOXVANG.js";import"./index-bkG5Vg2p.js";import"./useEventCallback-BN5eCmSs.js";import"./SkeletonBar-DgAc_BEV.js";import"./LoadingCell-ByZjwpJ-.js";import"./ColumnConfigDialog-BEb8bZc1.js";import"./DraggableList-DcPGpTvx.js";import"./search-Dz1VIdGa.js";import"./Input-DUh3JuNM.js";import"./useControlled-BkrEcqk8.js";import"./Button-DgFOPBJa.js";import"./small-cross-BQATEOZM.js";import"./ActionButton-B5uCJtLq.js";import"./Checkbox-C6TjD974.js";import"./useValueChanged-B7A_hdZG.js";import"./CollapsiblePanel-haGA10pC.js";import"./MultiColumnSortDialog-B8zAHeEP.js";import"./MenuTrigger-BjbpFbGw.js";import"./CompositeItem-BoSufc_A.js";import"./ToolbarRootContext-Cb-1rKtx.js";import"./getDisabledMountTransitionStyles-BWzH01Nw.js";import"./getPseudoElementBounds-DuWCXYaK.js";import"./chevron-down-Du5I5wVW.js";import"./index-CF-IYV_p.js";import"./error-o2dkV_Rh.js";import"./BaseCbacBanner-CG6wm0ym.js";import"./makeExternalStore-BEcMJ506.js";import"./Tooltip-YhP-Fwkb.js";import"./PopoverPopup-CJZk_qZX.js";import"./debounce-CuU6v30l.js";import"./useOsdkClient-CBICPDeO.js";import"./tick-C2Jds8i8.js";import"./DropdownField-DuI_YZPs.js";import"./isEqual-BWBJWNbI.js";import"./withOsdkMetrics-CjW6J-ki.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
