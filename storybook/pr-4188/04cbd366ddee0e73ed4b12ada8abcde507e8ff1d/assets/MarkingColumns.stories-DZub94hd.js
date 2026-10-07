import{f as p,j as e}from"./iframe-BV8H6lRC.js";import{O as i}from"./object-table-C6lRfVfE.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-FghdvxpP.js";import"./Table-JaytBHn3.js";import"./index-DU9RRfrb.js";import"./Dialog-DvRIB5zl.js";import"./cross-D92mjgqE.js";import"./svgIconContainer-B2TLggqZ.js";import"./useBaseUiId-Bch4RCf-.js";import"./InternalBackdrop-DFn2kFuw.js";import"./composite-6jNJwuj9.js";import"./index-fE68LmNS.js";import"./index-ByctvPor.js";import"./index-xKI30ir_.js";import"./useEventCallback-ZwAzgc5q.js";import"./SkeletonBar-BcrwqPs9.js";import"./LoadingCell-BZ-ka11a.js";import"./ColumnConfigDialog-Dv0fubDw.js";import"./DraggableList-CHaV7Vg7.js";import"./search-BlhwHZiG.js";import"./Input-B3KKnPgU.js";import"./useControlled-DFgYtmw-.js";import"./Button-cZssApwN.js";import"./small-cross-CB3FdAHS.js";import"./ActionButton-v2nTt39b.js";import"./Checkbox-B4TDd9O8.js";import"./useValueChanged-Bqcd_ocF.js";import"./CollapsiblePanel-h5yRCfis.js";import"./MultiColumnSortDialog-CHYeqK8V.js";import"./MenuTrigger-B-EwXmEp.js";import"./CompositeItem-CfY4xOZ4.js";import"./ToolbarRootContext-B0zqLD7S.js";import"./getDisabledMountTransitionStyles-CaNIdVg_.js";import"./getPseudoElementBounds-B3RJWnEx.js";import"./chevron-down-CmiHvm8d.js";import"./index-BSOrQZ_c.js";import"./error-Bt7eKOT3.js";import"./BaseCbacBanner-CV_DEHlP.js";import"./makeExternalStore-DXngIb0h.js";import"./Tooltip-BGLVmsTF.js";import"./PopoverPopup-MAImkRcc.js";import"./debounce-CcLYKazv.js";import"./useOsdkClient-DySK7kNm.js";import"./tick-M2SHJwUO.js";import"./DropdownField-DkGcdfin.js";import"./isEqual-DY2caHIP.js";import"./withOsdkMetrics-ybYt3TTQ.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
