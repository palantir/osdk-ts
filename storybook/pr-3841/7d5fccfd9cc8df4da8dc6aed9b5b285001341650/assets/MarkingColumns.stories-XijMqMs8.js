import{f as p,j as e}from"./iframe-BkXStBnn.js";import{O as i}from"./object-table-0OskJlcP.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-C6eJ-LAJ.js";import"./Table-BsaDm4T0.js";import"./index-CQxVyxO9.js";import"./Dialog-CEWZog5k.js";import"./cross-kW0EKRmx.js";import"./svgIconContainer-BOZhbAbH.js";import"./useBaseUiId-96F5yHVy.js";import"./InternalBackdrop-BdYFQb3t.js";import"./composite-DEOhu-ZQ.js";import"./index-CtVGck09.js";import"./index-CDh6F1Zg.js";import"./index-C4IkCmST.js";import"./useEventCallback-CH-hvduU.js";import"./SkeletonBar-Ctttl4g0.js";import"./LoadingCell-DC3q_kaJ.js";import"./ColumnConfigDialog-CDTeYQKc.js";import"./DraggableList-BYNJ4Xog.js";import"./search-BVUjqmoy.js";import"./Input-DxDpsYC6.js";import"./useControlled-Bs-hAIWu.js";import"./Button-tcqZupxX.js";import"./small-cross-Sg31I6zP.js";import"./ActionButton-Cf5BY1g0.js";import"./Checkbox-DqQ0vsU_.js";import"./useValueChanged-HslFxBcd.js";import"./CollapsiblePanel-ddkAZxfQ.js";import"./MultiColumnSortDialog-B08XNyF_.js";import"./MenuTrigger-Cv8msX7x.js";import"./CompositeItem-CqdHioqm.js";import"./ToolbarRootContext-CPU8X__7.js";import"./getDisabledMountTransitionStyles-583SAe4r.js";import"./getPseudoElementBounds-C11mWzsA.js";import"./chevron-down-BqO1VsFu.js";import"./index-mxwJCmPs.js";import"./error-BWtJwOh6.js";import"./BaseCbacBanner-DW10jlbi.js";import"./makeExternalStore-D61zLkvo.js";import"./Tooltip-COBqsjpT.js";import"./PopoverPopup-CSkaVaIl.js";import"./debounce-D3smnzmF.js";import"./useOsdkClient-B0RQ_x0Y.js";import"./tick-Bd8vtLY5.js";import"./DropdownField-CuSoYmnK.js";import"./isEqual-N3GxBSAA.js";import"./withOsdkMetrics-CndFlT5a.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
