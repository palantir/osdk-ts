import{f as p,j as e}from"./iframe-BfxMX6cT.js";import{O as i}from"./object-table-Dy7UyFzj.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-BPDao22J.js";import"./Table-C92nfJIb.js";import"./index-D5QdHG6c.js";import"./Dialog-BjV9jDBU.js";import"./cross-BQzi9cCY.js";import"./svgIconContainer-B11i6ssl.js";import"./useBaseUiId-Diys5Rd8.js";import"./InternalBackdrop-CzfUVdiw.js";import"./composite-CX7YV8L_.js";import"./index-CgOKnRwH.js";import"./index-DGcqs1ai.js";import"./index-CxMUUWdA.js";import"./useEventCallback-CBWmqZQL.js";import"./SkeletonBar-CcSf93cH.js";import"./LoadingCell-lQ3kMXKt.js";import"./ColumnConfigDialog-BmCXnw3W.js";import"./DraggableList-tDSTIq02.js";import"./search-D1ZDVnFF.js";import"./Input-C-zjcWJd.js";import"./useControlled-AEJbE5Jc.js";import"./Button-4wSek2R3.js";import"./small-cross-DukaMdQz.js";import"./ActionButton-DDdXpm0C.js";import"./Checkbox-D8LsxsuS.js";import"./useValueChanged-MAwDQy-M.js";import"./CollapsiblePanel-DC0pzIEf.js";import"./MultiColumnSortDialog-C39kjkmj.js";import"./MenuTrigger-6JM3TOuY.js";import"./CompositeItem-BPbSYDgv.js";import"./ToolbarRootContext-DYeN6dWB.js";import"./getDisabledMountTransitionStyles-CUDtZPwG.js";import"./getPseudoElementBounds-CDkHDgNY.js";import"./chevron-down-3tdgVjjI.js";import"./index-DBgFz0Qc.js";import"./error-Cw0OZsfU.js";import"./BaseCbacBanner-qin0DxGa.js";import"./makeExternalStore-Cp6FC4H6.js";import"./Tooltip-CALVvbNy.js";import"./PopoverPopup-BTJRWa40.js";import"./debounce-BMvGLHn1.js";import"./useOsdkClient-B0mdKYcq.js";import"./tick-BZki_9Xu.js";import"./DropdownField-D9jSS7VG.js";import"./isEqual-CiQuOF5j.js";import"./withOsdkMetrics-DLVxiL_Q.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
