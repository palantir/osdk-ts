import{f as p,j as e}from"./iframe-DkFy_hb4.js";import{O as i}from"./object-table-tqkgHWJN.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-BICWnFyb.js";import"./Table-Czo-rNx0.js";import"./index-CVhUa1cn.js";import"./Dialog-DFAX-dbI.js";import"./cross-BZRmfado.js";import"./svgIconContainer-Cc9-LdUz.js";import"./useBaseUiId-o_BwtbxA.js";import"./InternalBackdrop-BfAbsSH4.js";import"./composite-BGBfqcyM.js";import"./index-CYtpQu4o.js";import"./index-BKrHpELt.js";import"./index-D1Z2JBnZ.js";import"./useEventCallback-D8o005mn.js";import"./SkeletonBar-BavgYnmL.js";import"./LoadingCell-Cn0CPdwq.js";import"./ColumnConfigDialog-BaazBVOL.js";import"./DraggableList-DsgYclEh.js";import"./search-CLZw3WrP.js";import"./Input-NAoVb_RW.js";import"./useControlled-DzWKWqDT.js";import"./Button-CIX_sEiv.js";import"./small-cross-4XsWs7Rg.js";import"./ActionButton-DkdJBeiD.js";import"./Checkbox-F2U6phuX.js";import"./useValueChanged-DPBclZxi.js";import"./CollapsiblePanel-CRr1BQCY.js";import"./MultiColumnSortDialog-BVI-ddvy.js";import"./MenuTrigger-DBm0Zv4A.js";import"./CompositeItem-CdeIEk-d.js";import"./ToolbarRootContext-h2PUW2Ai.js";import"./getDisabledMountTransitionStyles-DcR5RtRw.js";import"./getPseudoElementBounds-D5PVShQs.js";import"./chevron-down-DpJL6cgz.js";import"./index-BdEt_Nen.js";import"./error-GJosWbv9.js";import"./BaseCbacBanner-Bhn381V6.js";import"./makeExternalStore-C1G5lVa7.js";import"./Tooltip-BVdzPxCH.js";import"./PopoverPopup-Bc8XtssV.js";import"./debounce-DrtMuAJj.js";import"./useOsdkClient-DL12bN9E.js";import"./tick-CIdK2AnH.js";import"./DropdownField-D35PrCn4.js";import"./isEqual-BCM93oB1.js";import"./withOsdkMetrics-BuzdoqQa.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
