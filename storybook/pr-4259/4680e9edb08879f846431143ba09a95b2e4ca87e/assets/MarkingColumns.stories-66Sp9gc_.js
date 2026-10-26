import{f as p,j as e}from"./iframe-CL0v58YA.js";import{O as i}from"./object-table-Bq2bBPP-.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-YA1d6Ini.js";import"./Table-Cn0a8GAw.js";import"./index-Dbld71_D.js";import"./Dialog-CGLv1Gw3.js";import"./cross-CMjnlyn3.js";import"./svgIconContainer-C5xAXPyT.js";import"./useBaseUiId-C-B8c9Tq.js";import"./InternalBackdrop-BoEb1M5v.js";import"./composite-CnlM0z75.js";import"./index-B8Uk-bLz.js";import"./index-BvbkTHlh.js";import"./index-DXxGeQJl.js";import"./useEventCallback-BiRlE1G0.js";import"./SkeletonBar-aBATL-Tf.js";import"./LoadingCell-ClwklxX8.js";import"./ColumnConfigDialog-w4AQPypf.js";import"./DraggableList-CZJxf7TB.js";import"./search-1eZ8caHB.js";import"./Input-mgnWKdmk.js";import"./useControlled-CSC850so.js";import"./Button-D8zbKIcq.js";import"./small-cross-BtqQFOUy.js";import"./ActionButton-Bu4dL35R.js";import"./Checkbox-tY51RlBx.js";import"./useValueChanged-ByhtVHRE.js";import"./CollapsiblePanel-D2eGim3y.js";import"./MultiColumnSortDialog-CrDQobkj.js";import"./MenuTrigger-vBnLao72.js";import"./CompositeItem-DUAhoOI3.js";import"./ToolbarRootContext-Dar2Ujz6.js";import"./getDisabledMountTransitionStyles-Cjmtv4nr.js";import"./getPseudoElementBounds-DAXSaCVq.js";import"./chevron-down-BBB2aEWM.js";import"./index-B86UewVM.js";import"./error-DDQ2JALg.js";import"./BaseCbacBanner-C9gquFsU.js";import"./makeExternalStore-Bhj1U_Xf.js";import"./Tooltip-BzQZnpRI.js";import"./PopoverPopup-Xz0YTDkc.js";import"./debounce-CYoIEdAM.js";import"./useOsdkClient-C1SbSG22.js";import"./tick-DJs20ou9.js";import"./DropdownField-BclOEnPv.js";import"./isEqual-NoqYCfyd.js";import"./withOsdkMetrics-B3RxtapX.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
