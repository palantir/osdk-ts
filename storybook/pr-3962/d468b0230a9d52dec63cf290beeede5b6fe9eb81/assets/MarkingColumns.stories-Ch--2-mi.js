import{f as p,j as e}from"./iframe-Cd3dv8cT.js";import{O as i}from"./object-table-DoNYRMGS.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-BvamZNkq.js";import"./Table-BM2gsIQa.js";import"./index-DLxjxb8e.js";import"./Dialog-CmzL0RqW.js";import"./cross-Dn7ydKbM.js";import"./svgIconContainer-D-NoPjGJ.js";import"./useBaseUiId-BaOg2aY4.js";import"./InternalBackdrop-DvwCf0RH.js";import"./composite-CPkJv0Aj.js";import"./index-BhTIZT2w.js";import"./index-BxHsjHcu.js";import"./index-AY8LUDDe.js";import"./useEventCallback-C5kiz3QI.js";import"./SkeletonBar-CCoP-Q6v.js";import"./LoadingCell-Dz56vO0r.js";import"./ColumnConfigDialog-QrkIxj8p.js";import"./DraggableList-CH9K1l70.js";import"./search-DEQVu4Kn.js";import"./Input-BqALFs3C.js";import"./useControlled-qyMNC85h.js";import"./Button-BFlN4NNG.js";import"./small-cross-CFFZ3VmM.js";import"./ActionButton-DsAz2zkl.js";import"./Checkbox-B5AQpCuS.js";import"./useValueChanged-DO67l_ai.js";import"./CollapsiblePanel-2YcASTXk.js";import"./MultiColumnSortDialog-D9ppB96C.js";import"./MenuTrigger-DFOv8qBT.js";import"./CompositeItem-DmsI5HvC.js";import"./ToolbarRootContext-u0Mal7kP.js";import"./getDisabledMountTransitionStyles-Nf_x6EnO.js";import"./getPseudoElementBounds-rdicW1-a.js";import"./chevron-down-DhFVxk1n.js";import"./index-DSi4pYyx.js";import"./error-Dg3cLmkh.js";import"./BaseCbacBanner-DuV--lA_.js";import"./makeExternalStore-D4XV0ltY.js";import"./Tooltip-mZxcWJrw.js";import"./PopoverPopup-IaRSd_y_.js";import"./debounce-BezAcue0.js";import"./useOsdkClient-Cq-ObEKw.js";import"./tick-dgL1mLrc.js";import"./DropdownField-DJxZg7nO.js";import"./isEqual-DaKR_DAZ.js";import"./withOsdkMetrics-B9V-TBGu.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
