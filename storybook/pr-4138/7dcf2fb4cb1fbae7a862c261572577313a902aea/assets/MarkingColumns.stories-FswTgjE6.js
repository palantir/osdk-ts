import{f as p,j as e}from"./iframe-E4YUsTVF.js";import{O as i}from"./object-table-DWM0-L5g.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-DS93hH50.js";import"./Table-5CsWYwnt.js";import"./index-33WajHAP.js";import"./Dialog-Cl3CkdMS.js";import"./cross-B0teiHtj.js";import"./svgIconContainer-BpDOXtMt.js";import"./useBaseUiId-Cmr5xOLR.js";import"./InternalBackdrop-6uJFTnu9.js";import"./composite-BPb4GIr2.js";import"./index-BD5alyvs.js";import"./index-C6lnPhSr.js";import"./index-BOSZpFJm.js";import"./useEventCallback-s63RPRIc.js";import"./SkeletonBar-COMgymc7.js";import"./LoadingCell-Bn9Rt80S.js";import"./ColumnConfigDialog-C1-Mg0Dr.js";import"./DraggableList-BBZ0k5a3.js";import"./search-C6TyODke.js";import"./Input-DzBskEWR.js";import"./useControlled-DcS_dYjp.js";import"./Button-D8Hq8qlo.js";import"./small-cross-DNql_UiE.js";import"./ActionButton-BNsdbYhX.js";import"./Checkbox-B1QYVWe8.js";import"./useValueChanged-_zlf4vQL.js";import"./CollapsiblePanel-CG_xY-4r.js";import"./MultiColumnSortDialog-DslMmcvG.js";import"./MenuTrigger-Bq0YGNRA.js";import"./CompositeItem-Dy6HQ5ii.js";import"./ToolbarRootContext-Z5Mk8e8P.js";import"./getDisabledMountTransitionStyles-nCIeRxS6.js";import"./getPseudoElementBounds-BB4Ow9wc.js";import"./chevron-down-BXAN807d.js";import"./index-C0oG0k9r.js";import"./error-C7OFda1X.js";import"./BaseCbacBanner-qUBT9zEy.js";import"./makeExternalStore-BPwvobNb.js";import"./Tooltip-FSxkyrOa.js";import"./PopoverPopup-Dp3SH3RM.js";import"./debounce-Dxqh-VtF.js";import"./useOsdkClient-COGErPcP.js";import"./tick-CpUkHDlc.js";import"./DropdownField-F9-Dgqve.js";import"./isEqual-DuvhWdoj.js";import"./withOsdkMetrics-BjBJAZAm.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
