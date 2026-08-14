import{f as p,j as e}from"./iframe-D_O5GLHm.js";import{O as i}from"./object-table-D3yZaObc.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-BLPPHW2C.js";import"./Table-BtWkwFr1.js";import"./index-XDSUUcCa.js";import"./Dialog-BRGgRluV.js";import"./cross-Lj5lTaea.js";import"./svgIconContainer-8JL1zmDp.js";import"./useBaseUiId-COien2vv.js";import"./InternalBackdrop-BtehdrfI.js";import"./composite-DGHwIWe7.js";import"./index-7Ufx5a3v.js";import"./index-DFbGTOLT.js";import"./index-BCabjJxl.js";import"./useEventCallback-CNsHmTrb.js";import"./SkeletonBar-DsxSQ0fs.js";import"./LoadingCell-BqSn2AUd.js";import"./ColumnConfigDialog-CDnNCtD3.js";import"./DraggableList-02jrEExn.js";import"./search-CU5APTmq.js";import"./Input-thkDpxWB.js";import"./useControlled-Beot_qrN.js";import"./Button-BrP8Z4b1.js";import"./small-cross-CuvREWXJ.js";import"./ActionButton-BwsvAH-b.js";import"./Checkbox-KnIESxCK.js";import"./useValueChanged-BZz3GkYD.js";import"./CollapsiblePanel-D6rYACOC.js";import"./MultiColumnSortDialog-pStuKZoQ.js";import"./MenuTrigger-CTf5EtnH.js";import"./CompositeItem-DNEzxX_O.js";import"./ToolbarRootContext-D4thcjEL.js";import"./getDisabledMountTransitionStyles-Cxbvf9rA.js";import"./getPseudoElementBounds-BpGMnD2o.js";import"./chevron-down-D5_c8Y-V.js";import"./index-D_1d4DqT.js";import"./error-DjceP8bp.js";import"./BaseCbacBanner-D_5FKbl2.js";import"./makeExternalStore-YLv6cY3e.js";import"./Tooltip-9_9Lgz4D.js";import"./PopoverPopup-Ca-jp817.js";import"./debounce-Brz8Ko54.js";import"./useOsdkClient-c0rRTlqj.js";import"./tick-BUVGhtIk.js";import"./DropdownField-BbAmy0X3.js";import"./isEqual-nCkGt9mz.js";import"./withOsdkMetrics-BU8FJf48.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
