import{f as p,j as e}from"./iframe-CvtnXpWI.js";import{O as i}from"./object-table-BL_5837Q.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-CRqjKMTV.js";import"./Table-CmUVnd3U.js";import"./index-jeLRGmVS.js";import"./Dialog-DCRDnXqO.js";import"./cross-CaW9jTLZ.js";import"./svgIconContainer-C107_u4J.js";import"./useBaseUiId-Dw1uN2EV.js";import"./InternalBackdrop-BoC-Z1Bo.js";import"./composite-E-ohJHTb.js";import"./index-BtiKNh2b.js";import"./index-D-06_23q.js";import"./index-CqGesz-z.js";import"./useEventCallback-CTWgCbj5.js";import"./SkeletonBar-BFsAtTQ9.js";import"./LoadingCell-BgUBUq2n.js";import"./ColumnConfigDialog-CmtAzB6p.js";import"./DraggableList-Cv5c3GqV.js";import"./search-BIqi2et5.js";import"./Input-zhgReKbn.js";import"./useControlled-D1NesXJk.js";import"./Button-UnInDvPq.js";import"./small-cross-Db9ebHG-.js";import"./ActionButton-CafTjkNJ.js";import"./Checkbox-C9BLbFtD.js";import"./useValueChanged-CoEu5z_v.js";import"./CollapsiblePanel-DbP5aWCf.js";import"./MultiColumnSortDialog-CK365kWV.js";import"./MenuTrigger-BZ_YHWTN.js";import"./CompositeItem-C6nFI7h_.js";import"./ToolbarRootContext-ChZi5vEo.js";import"./getDisabledMountTransitionStyles-6caJPnGT.js";import"./getPseudoElementBounds-Cv8mXtVl.js";import"./chevron-down-C3-hEeSa.js";import"./index-skLFeqF3.js";import"./error-BIezve7k.js";import"./BaseCbacBanner-D0TruWAx.js";import"./makeExternalStore-DHDRqvun.js";import"./Tooltip-BazKam0z.js";import"./isObject-CrBKpQd0.js";import"./debounce-BFHp0zYR.js";import"./useOsdkClient-DVkylxA-.js";import"./tick-B7O-16gu.js";import"./DropdownField-BsbKwjfj.js";import"./isEqual-DFrG572d.js";import"./_baseIsEqual-DjC_Kex7.js";import"./withOsdkMetrics-CRjxXxf-.js";const nr={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
}`,...(n=(o=r.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};const ir=["MarkingColumns"];export{r as MarkingColumns,ir as __namedExportsOrder,nr as default};
