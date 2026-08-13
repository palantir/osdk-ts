import{f as p,j as e}from"./iframe-B8OEhgWY.js";import{O as i}from"./object-table-DQNXwE_L.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-ByWlNfie.js";import"./Table-BpSB7MVn.js";import"./index-DFDa3HCE.js";import"./Dialog-DtOGQTLE.js";import"./cross-B7JEOmUk.js";import"./svgIconContainer-RSMqo_RJ.js";import"./useBaseUiId--A2TBCqG.js";import"./InternalBackdrop-Bf8xAy0N.js";import"./composite-CW87OmHg.js";import"./index-IXwruU6G.js";import"./index-CjJR_vEs.js";import"./index-Cd5CYSKi.js";import"./useEventCallback-G4jkJ5fn.js";import"./SkeletonBar-DhZkXaM9.js";import"./LoadingCell-C2jj6t5V.js";import"./ColumnConfigDialog-BPBGuPXG.js";import"./DraggableList-CyLbuf3Q.js";import"./search-Bm_NlUyw.js";import"./Input-DDY-S42g.js";import"./useControlled-EzFF0Sep.js";import"./Button-D8jsB0ym.js";import"./small-cross-CbvoJ13v.js";import"./ActionButton-B-hjiAnp.js";import"./Checkbox-jR4ezztm.js";import"./useValueChanged-B1riSZpf.js";import"./CollapsiblePanel-D0eBNgMU.js";import"./MultiColumnSortDialog-DwaOpnUr.js";import"./MenuTrigger-DMH56Nqe.js";import"./CompositeItem-CpHqNhbJ.js";import"./ToolbarRootContext-BwylGkXM.js";import"./getDisabledMountTransitionStyles-xVNp9XId.js";import"./getPseudoElementBounds-Do3QOUWH.js";import"./chevron-down-CTrU3kVW.js";import"./index-BWmpo11p.js";import"./error-dwUY3hfK.js";import"./BaseCbacBanner-Ap0KLQwZ.js";import"./makeExternalStore-Ce0vXOLT.js";import"./Tooltip-b5P3MGoa.js";import"./PopoverPopup-Lf0f4QYv.js";import"./debounce-CuGp1sPk.js";import"./useOsdkClient-Dq6Ca_96.js";import"./tick-B-jte_gc.js";import"./DropdownField-DlUxmIdO.js";import"./isEqual-DfUQGoTX.js";import"./withOsdkMetrics-CWt0J4jT.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
