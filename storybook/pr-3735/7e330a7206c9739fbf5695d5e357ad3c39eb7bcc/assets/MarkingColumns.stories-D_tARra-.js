import{f as p,j as e}from"./iframe-BpkgzCfc.js";import{O as i}from"./object-table-C1Z-ccOu.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-Cqm3GHv6.js";import"./Table-uaVa5FNn.js";import"./index-BaNgrIWR.js";import"./Dialog-C1Q-SUqo.js";import"./cross-DcAJ_UsT.js";import"./svgIconContainer-DCGfkszH.js";import"./useBaseUiId-Bel2T9sH.js";import"./InternalBackdrop-5O-6_QKc.js";import"./composite-BYRdjqNf.js";import"./index-DUW9BvxD.js";import"./index-DxpCt63I.js";import"./index-CHMS5mxm.js";import"./useEventCallback-LAyONCjg.js";import"./SkeletonBar-ChZNWN60.js";import"./LoadingCell-DKZgM3UF.js";import"./ColumnConfigDialog-BKpmwDX3.js";import"./DraggableList-D94KU6vz.js";import"./search-Ct51ibPI.js";import"./Input-CsKIZdEL.js";import"./useControlled-DcPMMtt3.js";import"./isEqual-DEYDtDi9.js";import"./isObject-ApKxbA4p.js";import"./Button-CySInDHm.js";import"./ActionButton-DIuZIz2Z.js";import"./Checkbox-CxaKCMbC.js";import"./useValueChanged-CBLiCNHQ.js";import"./CollapsiblePanel-DxiMb1vS.js";import"./MultiColumnSortDialog-N9biHPZ3.js";import"./MenuTrigger-CFAMwJll.js";import"./CompositeItem-BB4wd3KB.js";import"./ToolbarRootContext-D12ftYYQ.js";import"./getDisabledMountTransitionStyles-CPDNpMoC.js";import"./getPseudoElementBounds-UNyxasqn.js";import"./chevron-down-D90rIeDb.js";import"./index-9JJ3q_YT.js";import"./error-BPGwzs_y.js";import"./BaseCbacBanner-CvFgBp_O.js";import"./makeExternalStore-BY7Bi3ZC.js";import"./Tooltip-CU8rKKB6.js";import"./PopoverPopup-CbQUEnW-.js";import"./toNumber-DKwz7U4E.js";import"./useOsdkClient-vEvQVfhh.js";import"./tick-C9esIUOv.js";import"./DropdownField-UV9CnX2Y.js";import"./withOsdkMetrics-jMVnEM0t.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
