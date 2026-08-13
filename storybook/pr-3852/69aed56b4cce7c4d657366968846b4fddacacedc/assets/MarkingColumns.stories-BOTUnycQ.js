import{f as p,j as e}from"./iframe-B8GoyF7c.js";import{O as i}from"./object-table-DylVuKP0.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-B5kMgiMb.js";import"./Table-Bv_egrMe.js";import"./index-CL1eTbPH.js";import"./Dialog-wsrf6qLX.js";import"./cross-D9o3BuIu.js";import"./svgIconContainer-BNTJvbOM.js";import"./useBaseUiId-Bu2Afjul.js";import"./InternalBackdrop-CuOf1tUN.js";import"./composite-CN8JawkT.js";import"./index-B5C9ERo8.js";import"./index-1KpX_3Nf.js";import"./index-0XyaG4Ey.js";import"./useEventCallback-CxcEgKkZ.js";import"./SkeletonBar-2B0KuUAQ.js";import"./LoadingCell-D9wQxhLO.js";import"./ColumnConfigDialog-DOoFhFmI.js";import"./DraggableList-LwSvRxKn.js";import"./search-ChHon717.js";import"./Input-BoB_S2Yy.js";import"./useControlled-7SLzbWAF.js";import"./isEqual-E-iok-b5.js";import"./isObject-Px9ak30s.js";import"./Button-6Xf5SjjR.js";import"./ActionButton-DYJsKJBt.js";import"./Checkbox-BkmSl6q3.js";import"./useValueChanged-D1lqtZHd.js";import"./CollapsiblePanel-BaaA3CTx.js";import"./MultiColumnSortDialog-DeqDny7L.js";import"./MenuTrigger-BwiZ3WBk.js";import"./CompositeItem-59wLeDqw.js";import"./ToolbarRootContext-Cv3hvHkJ.js";import"./getDisabledMountTransitionStyles-CJn3nWEJ.js";import"./getPseudoElementBounds-4xJQNf4z.js";import"./chevron-down-BUm8spsZ.js";import"./index-D3EOgLBg.js";import"./error-D_8Foosf.js";import"./BaseCbacBanner-UWn7WJB6.js";import"./makeExternalStore-CPUAg4gi.js";import"./Tooltip-DwXyVsXL.js";import"./PopoverPopup-D7j3OXl0.js";import"./toNumber-CTVo6Cd-.js";import"./useOsdkClient-CmwQl11w.js";import"./tick-8N_MNRu5.js";import"./DropdownField-DBIGyTkw.js";import"./withOsdkMetrics-CFIv4gRX.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
