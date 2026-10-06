import{f as p,j as e}from"./iframe-C-FIv6o_.js";import{O as i}from"./object-table-BR87vr8J.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-BlbsPBXS.js";import"./Table-CBWq0j-k.js";import"./index-DiYvs7cZ.js";import"./Dialog-CyW6OFQd.js";import"./cross-D6R41ZsP.js";import"./svgIconContainer-CH0vCO_z.js";import"./useBaseUiId-8fHz63fW.js";import"./InternalBackdrop-BUgLvfLu.js";import"./composite-DY-2h9J_.js";import"./index-B0FBWnJm.js";import"./index-Bbgv3w0b.js";import"./index-RlrlxoXZ.js";import"./useEventCallback-D7-_pjQT.js";import"./SkeletonBar-CqlWLlhL.js";import"./LoadingCell-B_YSRND_.js";import"./ColumnConfigDialog-50fShswv.js";import"./DraggableList-Dt_d4Esq.js";import"./search-kQP18GK_.js";import"./Input-BU1-9D_8.js";import"./useControlled-CSYe1hyF.js";import"./Button-CDwEbwO9.js";import"./small-cross-L8XNZVST.js";import"./ActionButton-Bqe7jk2Y.js";import"./Checkbox-DJeoxJY1.js";import"./useValueChanged-kbkB87xa.js";import"./CollapsiblePanel-BelOvsl6.js";import"./MultiColumnSortDialog-D1ECuTCa.js";import"./MenuTrigger-CY0Gj9Qo.js";import"./CompositeItem-C0WJbRI5.js";import"./ToolbarRootContext-Kc9KsJC5.js";import"./getDisabledMountTransitionStyles-BT087-qm.js";import"./getPseudoElementBounds-CNOiwK5k.js";import"./chevron-down-CGWHDi30.js";import"./index-CqnCJeYa.js";import"./error-BRmo5GmE.js";import"./BaseCbacBanner-BJugMq6i.js";import"./makeExternalStore-DtEBDbfK.js";import"./Tooltip-WyT2Q4mR.js";import"./PopoverPopup-BCj1y_R3.js";import"./debounce-UNygtkmW.js";import"./useOsdkClient-Bg9loZzt.js";import"./tick-q20xBySf.js";import"./DropdownField-DG5FyFzv.js";import"./isEqual-CFBwihmD.js";import"./withOsdkMetrics-CUO4ZO-M.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
