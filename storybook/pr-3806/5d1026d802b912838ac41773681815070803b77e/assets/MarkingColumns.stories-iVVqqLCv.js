import{f as p,j as e}from"./iframe-DrKqnq_q.js";import{O as i}from"./object-table-Bbr7gxWR.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-qHDf4bMQ.js";import"./Table-Bvm4eDXb.js";import"./index-oqhI0w-j.js";import"./Dialog-Cv3pb4do.js";import"./cross-BpfGUZC-.js";import"./svgIconContainer-2L2lvnX_.js";import"./useBaseUiId-BUFR3R_E.js";import"./InternalBackdrop-D8DYQnLb.js";import"./composite-T0CUtM4R.js";import"./index-3em6fiz2.js";import"./index-DUKrIkwM.js";import"./index-Bhqm6Xwr.js";import"./useEventCallback-VcvUG8kv.js";import"./SkeletonBar-BOE9V_sT.js";import"./LoadingCell-CkW06zTq.js";import"./ColumnConfigDialog-BppvF4xo.js";import"./DraggableList-CEOtdXhw.js";import"./search-BpFzV3Uw.js";import"./Input-C3Gx_MN3.js";import"./useControlled-CzpQezbz.js";import"./isEqual-Dgb9H6ef.js";import"./isObject-CP825mKv.js";import"./Button-CxnSYTOO.js";import"./ActionButton-B48LzOD2.js";import"./Checkbox-CSw-kctn.js";import"./useValueChanged-DWsQYSJN.js";import"./CollapsiblePanel-DFSRW_5T.js";import"./MultiColumnSortDialog-BNe5q3gF.js";import"./MenuTrigger-1bEqtenk.js";import"./CompositeItem-D1W5a8R6.js";import"./ToolbarRootContext-CVGyCRId.js";import"./getDisabledMountTransitionStyles-C5iaED36.js";import"./getPseudoElementBounds-CHI2pP8V.js";import"./chevron-down-BpeVjwjl.js";import"./index-BP4U2YmN.js";import"./error-ByTGymY6.js";import"./BaseCbacBanner-BuK2t43v.js";import"./makeExternalStore-BwpiJv42.js";import"./Tooltip-CWD8QRyp.js";import"./PopoverPopup-tH08bNf5.js";import"./toNumber-D9cLtQUL.js";import"./useOsdkClient-3odUhMKY.js";import"./tick-DNZ7pV74.js";import"./DropdownField-D3eXa2F6.js";import"./withOsdkMetrics-CCERPSNj.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
