import{f as p,j as e}from"./iframe-C1uIQEe6.js";import{O as i}from"./object-table-CQ6hETlT.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-DF4UQXjd.js";import"./Table-Bw-bXIYd.js";import"./index-nY9pkPDF.js";import"./Dialog-q2FQFGgX.js";import"./cross-C9ubRsWO.js";import"./svgIconContainer-BGeGsGPX.js";import"./useBaseUiId-CeyDEbyZ.js";import"./InternalBackdrop-SMklbAKr.js";import"./composite-kICLPGef.js";import"./index-CRvA4CpE.js";import"./index-Bnj0fwTZ.js";import"./index-BtYb8cJb.js";import"./useEventCallback-Dwt0eF5D.js";import"./SkeletonBar-BOpTwsNy.js";import"./LoadingCell-x7gRA1du.js";import"./ColumnConfigDialog-DFXOYvRy.js";import"./DraggableList-BkVauiD1.js";import"./search-CfgnKZCI.js";import"./Input-Bqj-jOKY.js";import"./useControlled-BLqDTZmr.js";import"./Button-BJ7Nz25q.js";import"./small-cross-D02DqgT9.js";import"./ActionButton-p3LXST0-.js";import"./Checkbox-CQZf3jMi.js";import"./useValueChanged-Pi9Ael4a.js";import"./CollapsiblePanel-6McyaGtD.js";import"./MultiColumnSortDialog-DzGyWtDt.js";import"./MenuTrigger-BDQtQuY6.js";import"./CompositeItem-BvnjdHPq.js";import"./ToolbarRootContext-BwNqm28T.js";import"./getDisabledMountTransitionStyles-tyNaz73q.js";import"./getPseudoElementBounds-BvXQIwgX.js";import"./chevron-down-Bo5GDX8K.js";import"./index-BkXU4FNm.js";import"./error-Qui232U8.js";import"./BaseCbacBanner-CihzJWqL.js";import"./makeExternalStore-CD_wbIQr.js";import"./Tooltip-oCOCurFb.js";import"./PopoverPopup-Cm0zY3FO.js";import"./debounce-ClD17fgr.js";import"./useOsdkClient-DaGphxm9.js";import"./tick-Cb96Z_mD.js";import"./DropdownField-Bs4L9M0h.js";import"./isEqual-nBMVAV20.js";import"./withOsdkMetrics-Dccwzuy3.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
