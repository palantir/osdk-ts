import{f as p,j as e}from"./iframe-BAp-mBFg.js";import{O as i}from"./object-table-BwMsZml0.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-DMA-8k7h.js";import"./Table-D-OYfOQU.js";import"./index-BL8Ey2sj.js";import"./Dialog-DgJAG6u4.js";import"./cross-YEQVvPJ0.js";import"./svgIconContainer-CBRcPR9-.js";import"./useBaseUiId-CLc976mR.js";import"./InternalBackdrop-BMvkPGPo.js";import"./composite-ziK8MZ0d.js";import"./index-bbZZKUgK.js";import"./index-CZnpWueQ.js";import"./index-r6qGL197.js";import"./useEventCallback-DsNDBn2R.js";import"./SkeletonBar-CE7RHls9.js";import"./LoadingCell-FXeHl9Cp.js";import"./ColumnConfigDialog-CV59x_CT.js";import"./DraggableList-CsxMBOz_.js";import"./search-CXHMKnff.js";import"./Input-CAD3JQQ8.js";import"./useControlled-DqAef5Et.js";import"./Button-jiVV_CtX.js";import"./small-cross-DtUlhkvJ.js";import"./ActionButton-CwoDW7qs.js";import"./Checkbox-Dh8EGbK5.js";import"./useValueChanged-Bu3JV_v0.js";import"./CollapsiblePanel-DsuV6JMN.js";import"./MultiColumnSortDialog-CdOmge7j.js";import"./MenuTrigger-NtnRBXis.js";import"./CompositeItem-DuZe3uzk.js";import"./ToolbarRootContext-Ul6dl8O6.js";import"./getDisabledMountTransitionStyles-F5l8rP_A.js";import"./getPseudoElementBounds-rnzBkK8G.js";import"./chevron-down-DRRMSp6v.js";import"./index-BPbKBD04.js";import"./error-WBAOjD-R.js";import"./BaseCbacBanner-7Xyx8yME.js";import"./makeExternalStore-Ct8XmniK.js";import"./Tooltip-CKf84lvP.js";import"./PopoverPopup-BjqCWmO1.js";import"./debounce-Cb4zQ-Dj.js";import"./useOsdkClient-CWsVjcHT.js";import"./tick-DsIbBRWu.js";import"./DropdownField-ClNc4bFA.js";import"./isEqual-BrCdU8a1.js";import"./withOsdkMetrics-BuxsjMHL.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
