import{f as p,j as e}from"./iframe-DrkKxiw5.js";import{O as i}from"./object-table-bi6_WaNf.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-CoexQg1D.js";import"./Table-Cd3VvXH2.js";import"./index-9bu5FaWD.js";import"./Dialog-CLjuVpcT.js";import"./cross-CNIYbi9C.js";import"./svgIconContainer-BwjWYJj_.js";import"./useBaseUiId-NPWMEoN9.js";import"./InternalBackdrop-BHnmo_mI.js";import"./composite-BHNDyYYF.js";import"./index-BR2AMsRx.js";import"./index-YiUJ_53T.js";import"./index-B1tVzWT5.js";import"./useEventCallback-d78tTu5e.js";import"./SkeletonBar-DxwKfUAL.js";import"./LoadingCell-CLJBA_Lo.js";import"./ColumnConfigDialog-BU50e-BB.js";import"./DraggableList-CqrYiCET.js";import"./search-D4-R-e8V.js";import"./Input-DOgtVus-.js";import"./useControlled-BCrFB87J.js";import"./Button-CF-FMXcU.js";import"./small-cross-DmpTk7iL.js";import"./ActionButton-87-LtZRT.js";import"./Checkbox-BvfE16Cx.js";import"./useValueChanged-oqHjTNH5.js";import"./CollapsiblePanel-QmgD0n_V.js";import"./MultiColumnSortDialog-8pTNJexI.js";import"./MenuTrigger-kT5ygFWd.js";import"./CompositeItem-C5ekTE5F.js";import"./ToolbarRootContext-C8q64USb.js";import"./getDisabledMountTransitionStyles-C3Z8Tksw.js";import"./getPseudoElementBounds-BZjeQhGg.js";import"./chevron-down-DsVdM_C_.js";import"./index-0ErCHoJl.js";import"./error-C2HVZj6I.js";import"./BaseCbacBanner-DF6mIH5M.js";import"./makeExternalStore-D4NtYiCX.js";import"./Tooltip-DL2AUsJC.js";import"./PopoverPopup-6cHsVbHZ.js";import"./debounce-tRqZT1XJ.js";import"./useOsdkClient-2K-Ebyul.js";import"./tick-DLXEDZLW.js";import"./DropdownField-BgPaKr2p.js";import"./isEqual-1IpeczsO.js";import"./withOsdkMetrics-LuraraC5.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
