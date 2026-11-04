import{f as p,j as e}from"./iframe-DhySATRv.js";import{O as i}from"./object-table-Dg9P2Yk8.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-QnXVdlsZ.js";import"./Table-t5xUN4F0.js";import"./index-By0zFJXy.js";import"./Dialog-C9NeFGTs.js";import"./cross-dxd-Id56.js";import"./svgIconContainer-DPn7rviW.js";import"./useBaseUiId-CczNNmwY.js";import"./InternalBackdrop-CxgZaxwU.js";import"./composite-B7Q8k8Y1.js";import"./index-B5HI7DFW.js";import"./index-HQYJE3H_.js";import"./index-DxlsOiTd.js";import"./useEventCallback-DopCgfn9.js";import"./SkeletonBar-BpKKsUbf.js";import"./LoadingCell-D4H1GvHL.js";import"./ColumnConfigDialog-TpCke5_n.js";import"./DraggableList-Dietnrk6.js";import"./search-3iLspLPL.js";import"./Input-BQwljXsc.js";import"./useControlled-C3JFQqTN.js";import"./Button-BnJ18iND.js";import"./small-cross-CMpAYwo5.js";import"./ActionButton-DQQo_XtV.js";import"./Checkbox-CW7GlZ7a.js";import"./useValueChanged-Ct8XmU90.js";import"./CollapsiblePanel-Ddch5XBZ.js";import"./MultiColumnSortDialog-CGMuYggC.js";import"./MenuTrigger-dr45N3ay.js";import"./CompositeItem-CfgwqBcM.js";import"./ToolbarRootContext-COgLrlEX.js";import"./getDisabledMountTransitionStyles-PwdtwQyf.js";import"./getPseudoElementBounds-Csujpg1_.js";import"./chevron-down-dCWUIGnY.js";import"./index-C3T_yKoM.js";import"./error-DzMg1FzE.js";import"./BaseCbacBanner-BOiizU5d.js";import"./makeExternalStore-CM9PbEJi.js";import"./Tooltip-bRJHJ7Na.js";import"./PopoverPopup-BgCnKoSq.js";import"./debounce-DycsTy32.js";import"./useOsdkClient-pvjD5f0f.js";import"./tick-CP0_BxF4.js";import"./DropdownField-CUm8Lr1l.js";import"./isEqual-CdMQL4gS.js";import"./withOsdkMetrics-B8-SwDYi.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
