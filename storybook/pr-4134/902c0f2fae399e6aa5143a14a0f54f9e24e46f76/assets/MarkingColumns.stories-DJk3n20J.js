import{f as p,j as e}from"./iframe-Bhu5go17.js";import{O as i}from"./object-table-B6ipDZZ-.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-BSWPIZ9o.js";import"./Table-CnU7SaDg.js";import"./index-BczdwF9K.js";import"./Dialog-xxjOdycT.js";import"./cross-CkWL52XL.js";import"./svgIconContainer-Bcnn9wIP.js";import"./useBaseUiId-DjMEAOTb.js";import"./InternalBackdrop-CxE63-bR.js";import"./composite-uZlHnppD.js";import"./index-CuqdVt9a.js";import"./index-BWunv9eA.js";import"./index-C1X1ILrQ.js";import"./useEventCallback-B5a6fAJF.js";import"./SkeletonBar-DfPaevzv.js";import"./LoadingCell-C4LprGg5.js";import"./ColumnConfigDialog-BQxOQBdC.js";import"./DraggableList-W9skLj02.js";import"./search-x6Mg2DJR.js";import"./Input-BJnqdqBy.js";import"./useControlled-BGnzZuWo.js";import"./Button-DVcXfrSy.js";import"./small-cross-tIwGRVh9.js";import"./ActionButton-B4l5Ynsa.js";import"./Checkbox-BGu_Qera.js";import"./useValueChanged-DCvj2vHv.js";import"./CollapsiblePanel-CAZpLduE.js";import"./MultiColumnSortDialog-B7CnK4FE.js";import"./MenuTrigger-DkYHudyz.js";import"./CompositeItem-Jhmf5Smc.js";import"./ToolbarRootContext-B9BOuPbm.js";import"./getDisabledMountTransitionStyles-CwjdI3sa.js";import"./getPseudoElementBounds-MRfF10fy.js";import"./chevron-down-CB9qX917.js";import"./index-CT7iTPId.js";import"./error-DUAUa5ZT.js";import"./BaseCbacBanner-Ck0I-xcK.js";import"./makeExternalStore-BTwq4qvu.js";import"./Tooltip-DljM22fJ.js";import"./PopoverPopup-N9jR4N_b.js";import"./debounce-5wYFOWPv.js";import"./useOsdkClient-CqOWvh60.js";import"./tick-ByjNKKea.js";import"./DropdownField-S5eVipBF.js";import"./isEqual-CQVZ_loO.js";import"./withOsdkMetrics-pTv3z3ht.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
