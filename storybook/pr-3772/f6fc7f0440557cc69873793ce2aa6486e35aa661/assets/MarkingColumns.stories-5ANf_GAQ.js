import{f as p,j as e}from"./iframe-BTIka0mU.js";import{O as i}from"./object-table-Dn1D4m5-.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-px61uG1k.js";import"./Table-_U89uYE2.js";import"./index-BSUZmBMj.js";import"./Dialog-CTd2WPT7.js";import"./cross-Y1xE6j58.js";import"./svgIconContainer-_rcFoVfV.js";import"./useBaseUiId-C1-4UPjr.js";import"./InternalBackdrop-CeFBNfZq.js";import"./composite-_RYTITLD.js";import"./index-DJWApIIr.js";import"./index-BZqP7QHW.js";import"./index-BT9Z6v1L.js";import"./useEventCallback-C71sRmII.js";import"./SkeletonBar-CZabTLyj.js";import"./LoadingCell-Ci9j6m_n.js";import"./ColumnConfigDialog-DBGT53TU.js";import"./DraggableList-aQo2-qEs.js";import"./search-klzOiLLV.js";import"./Input-CHu4cTHa.js";import"./useControlled-CL1DBA2V.js";import"./isEqual--t9zKOFS.js";import"./isObject-CxBV9Ohn.js";import"./Button-C_wYQPHZ.js";import"./ActionButton-DKaLVnbU.js";import"./Checkbox-CgcbYrKi.js";import"./useValueChanged-Bz-meo30.js";import"./CollapsiblePanel-D9Wl1m7m.js";import"./MultiColumnSortDialog-BqVx8qLY.js";import"./MenuTrigger-CFDVbb7D.js";import"./CompositeItem-H6HgtU07.js";import"./ToolbarRootContext-DPmgZ9H3.js";import"./getDisabledMountTransitionStyles-Ba7aUPdV.js";import"./getPseudoElementBounds-ooqE2e_e.js";import"./chevron-down-CYoX06Sv.js";import"./index-Cz1dZR80.js";import"./error-GBqEqKOX.js";import"./BaseCbacBanner-Cx_zyMgv.js";import"./makeExternalStore-1GNwblPW.js";import"./Tooltip-C7QOXrku.js";import"./PopoverPopup-BU_dnZfL.js";import"./toNumber-DMQQ3TFc.js";import"./useOsdkClient-BQFCB37k.js";import"./tick-C8bpK66h.js";import"./DropdownField-P907ZQhX.js";import"./withOsdkMetrics-BCXnSjLq.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
