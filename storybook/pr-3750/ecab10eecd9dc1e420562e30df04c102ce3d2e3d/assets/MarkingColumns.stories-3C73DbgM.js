import{f as p,j as e}from"./iframe-DpDxhrTk.js";import{O as i}from"./object-table-DpLeGqXq.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-C3Wongev.js";import"./Table-D__ecISP.js";import"./index-BesxUkRl.js";import"./Dialog-3r0RUKgh.js";import"./cross-BPqRdDax.js";import"./svgIconContainer-BSn34rPU.js";import"./useBaseUiId-ZtxZdVDB.js";import"./InternalBackdrop-DMpRBF_4.js";import"./composite-XVS2lbRG.js";import"./index-DO-yw_mS.js";import"./index-CPnh_BhQ.js";import"./index-zItwV_e4.js";import"./useEventCallback-DkkG2KLw.js";import"./SkeletonBar-BUpoYDjZ.js";import"./LoadingCell-BP6FuaET.js";import"./ColumnConfigDialog-fauuEGe4.js";import"./DraggableList-CuBxnKUd.js";import"./search-FgzO_a7-.js";import"./Input-MJ2Nqs1U.js";import"./useControlled-oqkSa6n9.js";import"./isEqual-DThBZozb.js";import"./isObject-CJIWK_vn.js";import"./Button-xd1UXX3d.js";import"./ActionButton-DtlR_WNL.js";import"./Checkbox-B8mHIVlE.js";import"./useValueChanged-ffuaPj-Z.js";import"./CollapsiblePanel-Dv4TEUmo.js";import"./MultiColumnSortDialog-CwhqCqSu.js";import"./MenuTrigger-CHtag5-t.js";import"./CompositeItem-ClvJg4YM.js";import"./ToolbarRootContext-BdbZ8fbN.js";import"./getDisabledMountTransitionStyles-CP-VJqsI.js";import"./getPseudoElementBounds-CSHzYojk.js";import"./chevron-down-DNQ2sG7I.js";import"./index-knwwMd04.js";import"./error-0_EDGuUl.js";import"./BaseCbacBanner-CQZ0vW5e.js";import"./makeExternalStore-DfqxgRvK.js";import"./Tooltip-D84FofUL.js";import"./PopoverPopup-9oTcJ550.js";import"./toNumber-DPAMxLOu.js";import"./useOsdkClient-ufKnbjui.js";import"./tick-B774pe3v.js";import"./DropdownField-CXjer42C.js";import"./withOsdkMetrics-BoydcYO1.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
