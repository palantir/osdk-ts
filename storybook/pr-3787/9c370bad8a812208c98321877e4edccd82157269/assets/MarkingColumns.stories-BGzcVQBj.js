import{f as p,j as e}from"./iframe-B28z8hIY.js";import{O as i}from"./object-table-DuX6yprJ.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-D8qOl9Xf.js";import"./Table-CkDfUUL2.js";import"./index-DMpY9C2v.js";import"./Dialog-Bp7hHvol.js";import"./cross-CDkShHPW.js";import"./svgIconContainer-Dhm8X-BV.js";import"./useBaseUiId-DM58hJy6.js";import"./InternalBackdrop-CeDlVTrh.js";import"./composite-DNMsan99.js";import"./index-djAwGKCo.js";import"./index-Bq3ZgDfN.js";import"./index-BlVCSLA8.js";import"./useEventCallback-DrAp6rDo.js";import"./SkeletonBar-DXYlcYZk.js";import"./LoadingCell-Djdd6Yw8.js";import"./ColumnConfigDialog-D9VX9ial.js";import"./DraggableList-CMVFvtRa.js";import"./search-CmPRdAAA.js";import"./Input-DcxMr_KP.js";import"./useControlled-ss5L4whE.js";import"./isEqual-CO9g_nbd.js";import"./isObject-DSQXr_fO.js";import"./Button-uH6gdAsd.js";import"./ActionButton-D748JeaI.js";import"./Checkbox-C6RfZG6k.js";import"./useValueChanged-tTHj3kBw.js";import"./CollapsiblePanel-BQoexJm7.js";import"./MultiColumnSortDialog-Bnz8XLD9.js";import"./MenuTrigger-BmcDv0Yc.js";import"./CompositeItem-Bq1q5tVI.js";import"./ToolbarRootContext-D22XPhTr.js";import"./getDisabledMountTransitionStyles-B48XXR4D.js";import"./getPseudoElementBounds-MzI8NVer.js";import"./chevron-down-D_GWy34J.js";import"./index-BZgkCUQe.js";import"./error-CObZLwnt.js";import"./BaseCbacBanner-D7jyfgJe.js";import"./makeExternalStore-Dcx7-1vD.js";import"./Tooltip-DdCN7MaI.js";import"./PopoverPopup-D6bOInCn.js";import"./toNumber-CS-3Wsgc.js";import"./useOsdkClient-CV7QSUV2.js";import"./tick-DSR81z-h.js";import"./DropdownField-CUOugPeD.js";import"./withOsdkMetrics-GTEGqRPt.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
