import{f as p,j as e}from"./iframe-BzWIB64s.js";import{O as i}from"./object-table-DhfCjMZa.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-rFyywtxe.js";import"./Table-4uZ9_6Ne.js";import"./index-DfNwDZkB.js";import"./Dialog-DWNafTlc.js";import"./cross-Ckuh3sxL.js";import"./svgIconContainer-CqmqwQ_y.js";import"./useBaseUiId-CxW8wnCT.js";import"./InternalBackdrop-DGQzj-kD.js";import"./composite-CAPd73HO.js";import"./index-OSq7gO3K.js";import"./index-CSOQLHLc.js";import"./index-CicY2RuE.js";import"./useEventCallback-P1ZgnZOE.js";import"./SkeletonBar-bYTd4rJZ.js";import"./LoadingCell-Dq6XtdVW.js";import"./ColumnConfigDialog-Dme3oykV.js";import"./DraggableList-CZAZg46n.js";import"./search-BwW8B6vN.js";import"./Input-jzz_WLdV.js";import"./useControlled-BurtOwE_.js";import"./isEqual-CI8dWNwP.js";import"./isObject-Cqjoz7ZR.js";import"./Button-D-HHsrb0.js";import"./ActionButton-BOXurmj1.js";import"./Checkbox-DlkLdICv.js";import"./useValueChanged-BExBI2qc.js";import"./CollapsiblePanel-C_abRnbI.js";import"./MultiColumnSortDialog-Ci4Tj2Gu.js";import"./MenuTrigger-BUuYNFK-.js";import"./CompositeItem-Cko4FjAL.js";import"./ToolbarRootContext-BvYqQjl4.js";import"./getDisabledMountTransitionStyles-n0VH86Np.js";import"./getPseudoElementBounds-CycmnbqW.js";import"./chevron-down-OVbf4Oys.js";import"./index-hj2OXCFm.js";import"./error-BOU7Ocpj.js";import"./BaseCbacBanner-Q96kxK1u.js";import"./makeExternalStore-CND2K_mN.js";import"./Tooltip-Cx8rylOT.js";import"./PopoverPopup-B11pUap8.js";import"./toNumber-CNhbAXun.js";import"./useOsdkClient-PaKg2no4.js";import"./tick-CB79yduw.js";import"./DropdownField-Dd008IEL.js";import"./withOsdkMetrics-DLIsJJkp.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
