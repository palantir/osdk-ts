import{f as p,j as e}from"./iframe-CgaQrvJX.js";import{O as i}from"./object-table-zWPUlTUx.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-B2Xmrc95.js";import"./Table-Bu9LGKjn.js";import"./index-Bzmlqe5w.js";import"./Dialog-CMx2bEhz.js";import"./cross-IeILlXDu.js";import"./svgIconContainer-DNetVQYr.js";import"./useBaseUiId-CIjmtvYO.js";import"./InternalBackdrop-BkdT6um9.js";import"./composite-B-SLP__V.js";import"./index-BwSc5cdS.js";import"./index-D_yqZm0V.js";import"./index-DUXtr9cN.js";import"./useEventCallback-CByTzmdM.js";import"./SkeletonBar-DLIA_RTq.js";import"./LoadingCell-BVf_3OyH.js";import"./ColumnConfigDialog-DPr1PGC7.js";import"./DraggableList-Ve3W3f6x.js";import"./search-BUTYKFlQ.js";import"./Input-DQR44Pu5.js";import"./useControlled-A1Soqi4e.js";import"./Button-BWSgruJ1.js";import"./small-cross-CClz0VbI.js";import"./ActionButton-B7LnHlzj.js";import"./Checkbox-d7IFsgOk.js";import"./useValueChanged-BNtiYy3l.js";import"./CollapsiblePanel-B7VLrLlP.js";import"./MultiColumnSortDialog-CYrgn_ax.js";import"./MenuTrigger-CiC5_Yxk.js";import"./CompositeItem-Dxj4Vwhq.js";import"./ToolbarRootContext-YVP2LXfw.js";import"./getDisabledMountTransitionStyles-BSI6iR4W.js";import"./getPseudoElementBounds-BD_yj4W1.js";import"./chevron-down-BU6VTUzE.js";import"./index-CTmg82ji.js";import"./error-DP9sVVUg.js";import"./BaseCbacBanner-BFsdrnBM.js";import"./makeExternalStore-BVbHcjBk.js";import"./Tooltip-C2TlaiS-.js";import"./PopoverPopup-CZsknx9j.js";import"./debounce-BrOWPCnK.js";import"./useOsdkClient-DwCcA5xy.js";import"./tick-Q1XgvJo3.js";import"./DropdownField-CwkJQmwG.js";import"./isEqual-B2SNskwK.js";import"./withOsdkMetrics-C3kX09Hw.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
