import{f as p,j as e}from"./iframe-CBNXxCfo.js";import{O as i}from"./object-table-1ghrAGJF.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-hNq2x0aF.js";import"./Table-6i4ZZb3W.js";import"./index-tOjn3DuJ.js";import"./Dialog-BL1jlSUr.js";import"./cross-ByQeE0-e.js";import"./svgIconContainer-Aeg62PdB.js";import"./useBaseUiId-DYvTCLZM.js";import"./InternalBackdrop-BuFEQUHh.js";import"./composite-DK294pzn.js";import"./index-CWKiu_fE.js";import"./index-FTKj7eco.js";import"./index-Bt0LUvaM.js";import"./useEventCallback-DpIm7-am.js";import"./SkeletonBar-BRD_fo5h.js";import"./LoadingCell-BaNdw7xG.js";import"./ColumnConfigDialog-ZH6iVasg.js";import"./DraggableList-eM-ab83r.js";import"./search-DDNU23bi.js";import"./Input-B4HJdzdZ.js";import"./useControlled-C7MVIRPF.js";import"./Button-DGZpthjp.js";import"./small-cross-CKdL694I.js";import"./ActionButton-6ZtJVgb1.js";import"./Checkbox-AlqZzEFb.js";import"./useValueChanged-6a_WmB-v.js";import"./CollapsiblePanel-CNnQ_Tqx.js";import"./MultiColumnSortDialog-XP2QzbrU.js";import"./MenuTrigger-D0T3Cl6J.js";import"./CompositeItem-CMo1LSw0.js";import"./ToolbarRootContext-BkEzRPqI.js";import"./getDisabledMountTransitionStyles-DSnPBVQi.js";import"./getPseudoElementBounds-DWf_NHYE.js";import"./chevron-down-CDGLawXt.js";import"./index-D9bbJoJ6.js";import"./error-DX2juQ7l.js";import"./BaseCbacBanner-CaUxymz7.js";import"./makeExternalStore-Bv9y4KPm.js";import"./Tooltip-DtvJQRxc.js";import"./PopoverPopup-uHJwtGzf.js";import"./debounce-D69uVilQ.js";import"./useOsdkClient-B1CDiX_g.js";import"./tick-Bz4lVOau.js";import"./DropdownField-ANoM4Blt.js";import"./isEqual-C5wCnjIr.js";import"./withOsdkMetrics-DJhX3-qL.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
