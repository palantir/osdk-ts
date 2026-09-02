import{f as p,j as e}from"./iframe-DFSfQ_aP.js";import{O as i}from"./object-table-Bo8foGJ9.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-DJLQJiWb.js";import"./Table-D8UroSLJ.js";import"./index-CHPYvPwX.js";import"./Dialog-BYw4_dN0.js";import"./cross-Ce3cqE51.js";import"./svgIconContainer-BpYc0jTS.js";import"./useBaseUiId-DCyghABl.js";import"./InternalBackdrop-C3LI9WHn.js";import"./composite-BX_h9XZf.js";import"./index-CQjeWbkR.js";import"./index-ASrgrlRW.js";import"./index-BomX2u3n.js";import"./useEventCallback-CWkq5eG5.js";import"./SkeletonBar-BXnis-nv.js";import"./LoadingCell-BDGcPLQM.js";import"./ColumnConfigDialog-BIU_6Fcg.js";import"./DraggableList-B3yfqHzs.js";import"./search-HIhGbyYm.js";import"./Input-B4nqbncu.js";import"./useControlled-DXWD0Znz.js";import"./Button-BpGPHejG.js";import"./small-cross-Ck6yssSu.js";import"./ActionButton-DNBUhcHU.js";import"./Checkbox-DoeqS_HZ.js";import"./useValueChanged-DcWoVdTs.js";import"./CollapsiblePanel-BsoK_9-k.js";import"./MultiColumnSortDialog-CxraL-OH.js";import"./MenuTrigger-YFJwhJiB.js";import"./CompositeItem-CyzwHVke.js";import"./ToolbarRootContext-BpJBwGb-.js";import"./getDisabledMountTransitionStyles-vXpnLO87.js";import"./getPseudoElementBounds-Bka1lmS1.js";import"./chevron-down-D8HcwDY0.js";import"./index-CdSacirl.js";import"./error-D7U43ngn.js";import"./BaseCbacBanner-DCmYrZdG.js";import"./makeExternalStore-DeP1q7OZ.js";import"./Tooltip-CNCLPMyb.js";import"./PopoverPopup-246_BZ4N.js";import"./debounce-C679H-9B.js";import"./useOsdkClient-Cq2Nb_5Z.js";import"./tick-B1n0K6Q7.js";import"./DropdownField-DcUwV0uD.js";import"./isEqual-ZOtwe112.js";import"./withOsdkMetrics-CFtGdwbh.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
