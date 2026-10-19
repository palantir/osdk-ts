import{f as p,j as e}from"./iframe-BH9-Vfs1.js";import{O as i}from"./object-table-DkRx2TSI.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-CoJdsvxJ.js";import"./Table-CF_Gr0eJ.js";import"./index-_6Q5jVBK.js";import"./Dialog-H9PWXepR.js";import"./cross-HuW5yWPa.js";import"./svgIconContainer-BPyIUPO5.js";import"./useBaseUiId-CdU1pKU6.js";import"./InternalBackdrop-C4RHDXX9.js";import"./composite-aDEaeN1m.js";import"./index-CUm5VRBM.js";import"./index-iq-MawLa.js";import"./index-D_GYi7KZ.js";import"./useEventCallback-BM_lCHBk.js";import"./SkeletonBar-DUzCarP5.js";import"./LoadingCell-sgIDdnpb.js";import"./ColumnConfigDialog-sGa94e2C.js";import"./DraggableList-D7hjeCsQ.js";import"./search-CaTzsfhK.js";import"./Input-CYVECsi-.js";import"./useControlled-UCeQQNPP.js";import"./Button-DJTiAyTL.js";import"./small-cross-Ws2nfjsL.js";import"./ActionButton-CgXb0xmm.js";import"./Checkbox-5TgDST7R.js";import"./useValueChanged-C51YJ2lo.js";import"./CollapsiblePanel-b7brQAbP.js";import"./MultiColumnSortDialog-_aoaC3ql.js";import"./MenuTrigger-Dh7zRnlm.js";import"./CompositeItem-D5PXOQkD.js";import"./ToolbarRootContext-CbUVM7d6.js";import"./getDisabledMountTransitionStyles-Bavl1m2r.js";import"./getPseudoElementBounds-fo53-Bfk.js";import"./chevron-down-SngEWHwD.js";import"./index-CHoEIfe6.js";import"./error-BMBrp2lF.js";import"./BaseCbacBanner-DarXxyY1.js";import"./makeExternalStore-Cax4wnWM.js";import"./Tooltip-D8UPmHEX.js";import"./PopoverPopup-Diu6AqpB.js";import"./debounce-CErsKOIl.js";import"./useOsdkClient-B78DQJmL.js";import"./tick-sRS91U9j.js";import"./DropdownField-BPBBYIiE.js";import"./isEqual-C-YyuCMw.js";import"./withOsdkMetrics-DsCWHvB2.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
