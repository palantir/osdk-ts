import{f as p,j as e}from"./iframe-u83eKIrq.js";import{O as i}from"./object-table-CstgSJbN.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-Dp1pzeXC.js";import"./Table-CAb23y7Q.js";import"./index-DAH5uwdU.js";import"./Dialog-WPnBM2ww.js";import"./cross-BQtpAbkF.js";import"./svgIconContainer-bWBjq6xN.js";import"./useBaseUiId-PA8l4EIZ.js";import"./InternalBackdrop-HlmO7rQ4.js";import"./composite-3XcAHwyh.js";import"./index-Byvi8c4H.js";import"./index-uZ0DL954.js";import"./index-BYUqOIx_.js";import"./useEventCallback-D5UKlND-.js";import"./SkeletonBar-CsMybwHV.js";import"./LoadingCell-BQ2WwuWY.js";import"./ColumnConfigDialog-MqAiddcO.js";import"./DraggableList-DoAWVMP-.js";import"./search-D9liKBNY.js";import"./Input-BSdYhVma.js";import"./useControlled-6FyMHK6P.js";import"./isEqual-COXKDF_-.js";import"./isObject-DSSIav4-.js";import"./Button-CdLpTr9e.js";import"./ActionButton-DYLdPsdu.js";import"./Checkbox-CbSXeNsV.js";import"./useValueChanged-DLxmyEKa.js";import"./CollapsiblePanel-ChYEXrik.js";import"./MultiColumnSortDialog-DUiRfpw5.js";import"./MenuTrigger-MfwaUfhz.js";import"./CompositeItem-C9wVVHjV.js";import"./ToolbarRootContext-0AKJJTto.js";import"./getDisabledMountTransitionStyles-B25FvRYf.js";import"./getPseudoElementBounds-CwdM8KDF.js";import"./chevron-down-iwF-GvDx.js";import"./index-jMor5Orb.js";import"./error-ASL9njaz.js";import"./BaseCbacBanner-BDO9PVXw.js";import"./makeExternalStore-C_DSvJXm.js";import"./Tooltip-BLxhet1u.js";import"./PopoverPopup-Cx5w2fOt.js";import"./toNumber-eKXy_LYW.js";import"./useOsdkClient-Bfml6VSk.js";import"./tick-BmvgPI_g.js";import"./DropdownField-DWkbu1wg.js";import"./withOsdkMetrics-v2D5VOnL.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
