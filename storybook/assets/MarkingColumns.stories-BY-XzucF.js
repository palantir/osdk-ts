import{f as p,j as e}from"./iframe-BDDoLmha.js";import{O as i}from"./object-table-2yRUv6qF.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-Dp1pzeXC.js";import"./Table-K0OfJO3R.js";import"./index-BC_PGuPP.js";import"./Dialog-gwuqGGaN.js";import"./cross-ClU8WQkB.js";import"./svgIconContainer-kcsw0qZe.js";import"./useBaseUiId-C1stYciJ.js";import"./InternalBackdrop-CWUREPli.js";import"./composite-WWEtFGhY.js";import"./index-CM61V-po.js";import"./index-CGMmpBla.js";import"./index-BbA7qa9Y.js";import"./useEventCallback-BtupRWq2.js";import"./SkeletonBar-NetKSX_e.js";import"./LoadingCell-CjPDh30i.js";import"./ColumnConfigDialog-1vAQl0VU.js";import"./DraggableList-CzG4oHkI.js";import"./search-uNkqFKpB.js";import"./Input-DyN46OQh.js";import"./useControlled-fTso5J1v.js";import"./isEqual-CErs2inq.js";import"./isObject-sZPGKgw1.js";import"./Button-B67G3YaJ.js";import"./ActionButton-NuwYmZnN.js";import"./Checkbox-BmWceX2x.js";import"./useValueChanged-CBq2J-5X.js";import"./CollapsiblePanel-Dxlx4FPs.js";import"./MultiColumnSortDialog-iT-SnFfx.js";import"./MenuTrigger-DYdDZozm.js";import"./CompositeItem-C_P6sqif.js";import"./ToolbarRootContext-D9qFS7IX.js";import"./getDisabledMountTransitionStyles-BNss76gt.js";import"./getPseudoElementBounds-BZu2QF5b.js";import"./chevron-down-WvOrsc4J.js";import"./index-TFGv77Bk.js";import"./error-j5R04zP-.js";import"./BaseCbacBanner-D2UDGy-N.js";import"./makeExternalStore-DH38KA5d.js";import"./Tooltip-C5sQiB80.js";import"./PopoverPopup-CduQ6_Jd.js";import"./toNumber-BEnQy_jU.js";import"./useOsdkClient-CoksKf5J.js";import"./tick-CQFhnFcH.js";import"./DropdownField-XKEdn78n.js";import"./withOsdkMetrics-Beir_CMD.js";const or={title:"Components/ObjectTable/Features",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
