import{f as p,j as e}from"./iframe-iUGaKF-g.js";import{O as i}from"./object-table-BeD6fwla.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-C5QJwAu5.js";import"./Table-C4RNDYAH.js";import"./index-biVvCra3.js";import"./Dialog-Bwv5xC9X.js";import"./cross-BFNp-6V_.js";import"./svgIconContainer-D9SYWNzR.js";import"./useBaseUiId-Bf0uFdSS.js";import"./InternalBackdrop-DdW_D627.js";import"./composite-BdFuHmfd.js";import"./index-CABXZzlk.js";import"./index-CoBHmv7L.js";import"./index-Cof45HYg.js";import"./useEventCallback-C5wssiyI.js";import"./SkeletonBar-rf2cqXI-.js";import"./LoadingCell-VJOGm1a0.js";import"./ColumnConfigDialog-CCPWvcTE.js";import"./DraggableList-BY7dHUoN.js";import"./search-Bn0ITWKa.js";import"./Input-ChMcCw-p.js";import"./useControlled-BHtZ5WxN.js";import"./Button-DOHDr1Yv.js";import"./small-cross-BBd4zvtL.js";import"./ActionButton-C7IaQGOT.js";import"./Checkbox-CQTlFCNu.js";import"./useValueChanged-BzjxvPA-.js";import"./CollapsiblePanel-BziHNyai.js";import"./MultiColumnSortDialog-D1Z559Ip.js";import"./MenuTrigger-BwLCZgAB.js";import"./CompositeItem-BJtdPIpL.js";import"./ToolbarRootContext-CsWu5MBg.js";import"./getDisabledMountTransitionStyles-C6suAbyK.js";import"./getPseudoElementBounds-D3JDCaRV.js";import"./chevron-down-D6OM1qR9.js";import"./index-DIFFZVPL.js";import"./error-BPV1DyS9.js";import"./BaseCbacBanner-LmEMDQ7B.js";import"./makeExternalStore-DYociY-T.js";import"./Tooltip-CQC9ZA-1.js";import"./PopoverPopup-CjX0FeDE.js";import"./debounce-JprLheFU.js";import"./useOsdkClient-cV4LfF2W.js";import"./tick-BKSCw9Ac.js";import"./DropdownField-C0bAgzFB.js";import"./isEqual-B7Me7IYR.js";import"./withOsdkMetrics-BvgX9Hqp.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
