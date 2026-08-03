import{f as p,j as e}from"./iframe-CDM8VvCL.js";import{O as i}from"./object-table-BsWHLv7x.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-DfBWA75O.js";import"./Table-DNz2f0EG.js";import"./index-C6PbldxU.js";import"./Dialog-Cw7DA-a5.js";import"./cross-DMe_NFrB.js";import"./svgIconContainer-C1O7d22_.js";import"./useBaseUiId-YyZMVoz3.js";import"./InternalBackdrop-3sJqJhUy.js";import"./composite-BMzBsQCY.js";import"./index-C2c3YLny.js";import"./index-DgkciYYF.js";import"./index-BMPydb50.js";import"./useEventCallback--wvu9urt.js";import"./SkeletonBar-CCO1CZRx.js";import"./LoadingCell-BnU3j0Og.js";import"./ColumnConfigDialog-BAT6TgRk.js";import"./DraggableList-CSkLY4Wt.js";import"./search-ChMgyiyS.js";import"./Input-B__e197v.js";import"./useControlled-CPS_mZpC.js";import"./isEqual-Cw7ELw8L.js";import"./isObject-DOvv4t3H.js";import"./Button-Dow9ecKk.js";import"./ActionButton-D1zapzbS.js";import"./Checkbox-DWiRPOgD.js";import"./useValueChanged-CJQfTB0a.js";import"./CollapsiblePanel-DUVWmcbN.js";import"./MultiColumnSortDialog-Cu--lc5T.js";import"./MenuTrigger-DVnc9IN2.js";import"./CompositeItem-DG32YQLD.js";import"./ToolbarRootContext-eNrqlMGW.js";import"./getDisabledMountTransitionStyles-BcYqQrLA.js";import"./getPseudoElementBounds-CLK-CIxy.js";import"./chevron-down-GK8uglpz.js";import"./index-C_gjknLZ.js";import"./error-BLTG8w8a.js";import"./BaseCbacBanner-qQd0gBK1.js";import"./makeExternalStore-DhNYhl9Y.js";import"./Tooltip-CrrdlhKL.js";import"./PopoverPopup-K7nHHNKP.js";import"./toNumber-BqSuiLcc.js";import"./useOsdkClient-6YFeBNNr.js";import"./tick-BWD1BWlb.js";import"./DropdownField-CzJ5Q7Vg.js";import"./withOsdkMetrics-C30IttKx.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
