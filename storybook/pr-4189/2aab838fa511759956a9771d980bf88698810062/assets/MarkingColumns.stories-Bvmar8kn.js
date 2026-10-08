import{f as p,j as e}from"./iframe-CyyLqEr6.js";import{O as i}from"./object-table-CbR1hdH_.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-CLKx56fr.js";import"./Table-DaFGsEZ-.js";import"./index-CXVe_-qM.js";import"./Dialog-rUw7Tztf.js";import"./cross-aF3LHT_W.js";import"./svgIconContainer-BXEQoARc.js";import"./useBaseUiId-DNRq1Vj2.js";import"./InternalBackdrop-VqPqEODt.js";import"./composite-Cu366ztE.js";import"./index-Btxr5vyt.js";import"./index-DplZ--1V.js";import"./index-CIcqP63k.js";import"./useEventCallback-BkrIhA4F.js";import"./SkeletonBar-hSnelWIw.js";import"./LoadingCell-DtrB1isk.js";import"./ColumnConfigDialog-B_4Ulu0K.js";import"./DraggableList-8Ob4ZCYO.js";import"./search-9XevuXRY.js";import"./Input-CGZ9tgdl.js";import"./useControlled-SLbcZlz1.js";import"./Button-CE0RBh88.js";import"./small-cross-CeBhb5K4.js";import"./ActionButton-5WAWMSR-.js";import"./Checkbox-CHHV-n-v.js";import"./useValueChanged-CfwgduQf.js";import"./CollapsiblePanel-DobbT5mN.js";import"./MultiColumnSortDialog-RYejZIqi.js";import"./MenuTrigger-BvcjDDgI.js";import"./CompositeItem-4N3XpUmD.js";import"./ToolbarRootContext-Dx3qy1zP.js";import"./getDisabledMountTransitionStyles-DqpTbrQs.js";import"./getPseudoElementBounds-B0QwFzeX.js";import"./chevron-down-C0fFk26N.js";import"./index-BNa8gt2p.js";import"./error-Dp6C50rF.js";import"./BaseCbacBanner-Dqcr-F5q.js";import"./makeExternalStore-B6005TWn.js";import"./Tooltip-1zWBtBzZ.js";import"./PopoverPopup-CjI5fBm4.js";import"./debounce-Kl0LOmqT.js";import"./useOsdkClient-TJGS2RfR.js";import"./tick-Bt0G-C4s.js";import"./DropdownField-77S-oXAU.js";import"./isEqual-Cm4IXkcb.js";import"./withOsdkMetrics-D87Y42PU.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
