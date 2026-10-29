import{f as p,j as e}from"./iframe-DuPGHU0l.js";import{O as i}from"./object-table-Ba0vIJbC.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-C0i017mv.js";import"./Table-noAsufEy.js";import"./index-trCVkGnT.js";import"./Dialog-BzPqVQ2n.js";import"./cross-DX5M9gAF.js";import"./svgIconContainer-DYavZBCX.js";import"./useBaseUiId-CXOx85Ji.js";import"./InternalBackdrop-MypWFEdM.js";import"./composite-bxfGnibV.js";import"./index-BPZGrXj8.js";import"./index-CxEs7fW4.js";import"./index-D9lJQHx7.js";import"./useEventCallback-DffRG6R1.js";import"./SkeletonBar-qHgUQhEG.js";import"./LoadingCell-Bf_lcAmE.js";import"./ColumnConfigDialog-DNmXXilw.js";import"./DraggableList-1OyrW2jH.js";import"./search-lklVR3bN.js";import"./Input-jGQQmaCN.js";import"./useControlled-uIFuGzm4.js";import"./Button-kErr3Na-.js";import"./small-cross-D_ytDnoJ.js";import"./ActionButton-CpXgr1m4.js";import"./Checkbox-C21-Grtb.js";import"./useValueChanged-Czjmm1xx.js";import"./CollapsiblePanel-BYMuCAsZ.js";import"./MultiColumnSortDialog--U5HnCnj.js";import"./MenuTrigger-CgIzNycJ.js";import"./CompositeItem-D0CjBMiI.js";import"./ToolbarRootContext-wxST6T8W.js";import"./getDisabledMountTransitionStyles-D68V5Zib.js";import"./getPseudoElementBounds-DIwP7tdN.js";import"./chevron-down-2p6Ee397.js";import"./index-D-GgPzMj.js";import"./error-WnyZ_TXe.js";import"./BaseCbacBanner-mJeOJsVv.js";import"./makeExternalStore-B2yZ_Kza.js";import"./Tooltip-B0JeszV9.js";import"./PopoverPopup-Ccr61WFs.js";import"./debounce-DDzZOsHB.js";import"./useOsdkClient-6i4-GCvx.js";import"./tick-gyoLk9c6.js";import"./DropdownField-I3G12o5O.js";import"./isEqual-DxSON3wr.js";import"./withOsdkMetrics-D5QjWVGm.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
