import{f as p,j as e}from"./iframe-BqwIL6HW.js";import{O as i}from"./object-table-DMbi1Pvy.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-C2aBQR0i.js";import"./Table-bpA5xtcE.js";import"./index-Cae-eAYf.js";import"./Dialog-DuCy0N3k.js";import"./cross-BT2F3WaS.js";import"./svgIconContainer-COFarK7B.js";import"./useBaseUiId-BrjtMHRo.js";import"./InternalBackdrop-CgHzff8o.js";import"./composite-ByfMjDoy.js";import"./index-B_ClGvof.js";import"./index-D80ub2hK.js";import"./index-CNDTMQ3q.js";import"./useEventCallback-DCC9o1g_.js";import"./SkeletonBar-Cjqtl2vi.js";import"./LoadingCell-q9zY1XLH.js";import"./ColumnConfigDialog-GrepuD1S.js";import"./DraggableList-aOzgfBps.js";import"./search-B46OZpsx.js";import"./Input-5dPcAYXy.js";import"./useControlled-Cn8olvRX.js";import"./Button-DY9YVtH3.js";import"./small-cross-CrN3j_m1.js";import"./ActionButton-D68kU6Ew.js";import"./Checkbox-OHzaDy7X.js";import"./useValueChanged-CQ0JMvBl.js";import"./CollapsiblePanel-C-zhrpZe.js";import"./MultiColumnSortDialog-J1D7KJHQ.js";import"./MenuTrigger-B6yCrZ6W.js";import"./CompositeItem-CbgN92a5.js";import"./ToolbarRootContext-DUNP2109.js";import"./getDisabledMountTransitionStyles-Og5LYC2n.js";import"./getPseudoElementBounds-BNlxAt2r.js";import"./chevron-down-S5K5GEQg.js";import"./index-BkbUCulf.js";import"./error-rHIfSgQZ.js";import"./BaseCbacBanner-CTgoipjB.js";import"./makeExternalStore-CWQKdOgP.js";import"./Tooltip-BHtmGDUn.js";import"./PopoverPopup-Mlz_yO9l.js";import"./debounce-CjNb2h4-.js";import"./useOsdkClient-D1PnuLrI.js";import"./tick-gHUj1QgS.js";import"./DropdownField-DPc-zral.js";import"./isEqual-qyY3U0dF.js";import"./withOsdkMetrics-BCVV0LnC.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
