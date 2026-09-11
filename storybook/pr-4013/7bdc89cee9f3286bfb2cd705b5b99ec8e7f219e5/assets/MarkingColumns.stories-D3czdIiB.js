import{f as p,j as e}from"./iframe-B8NhUX_0.js";import{O as i}from"./object-table-CA1teDNA.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-DjGFPnLe.js";import"./Table-C2uoaozX.js";import"./index-qsMi88gm.js";import"./Dialog-CHkRp34m.js";import"./cross-D9Q-WwoP.js";import"./svgIconContainer-Bf9SOHJ7.js";import"./useBaseUiId-Cn8iX50p.js";import"./InternalBackdrop-Zc3lnf0p.js";import"./composite-BwIOwpx5.js";import"./index-CQvGYdFy.js";import"./index-DWq__3H-.js";import"./index-Ba4Tc_iW.js";import"./useEventCallback-xA1EFPwl.js";import"./SkeletonBar-DmZ0r3ux.js";import"./LoadingCell-DtncvfD2.js";import"./ColumnConfigDialog-Di44nFKi.js";import"./DraggableList-gdzatwPU.js";import"./search-BmvHXAW1.js";import"./Input-SBCQtK3z.js";import"./useControlled-Bf5eet3i.js";import"./Button-DNRq2HIP.js";import"./small-cross-nXdJrVSH.js";import"./ActionButton-2e8flOqN.js";import"./Checkbox-BlAB2Wqb.js";import"./useValueChanged-g78IRiUM.js";import"./CollapsiblePanel-BJZlXQuG.js";import"./MultiColumnSortDialog-CpVilSt6.js";import"./MenuTrigger-DINcwWL4.js";import"./CompositeItem-C5ZLF5hx.js";import"./ToolbarRootContext-bf_wSBCX.js";import"./getDisabledMountTransitionStyles-O8DCg2MV.js";import"./getPseudoElementBounds-CbA1rS7d.js";import"./chevron-down-DxRnKcur.js";import"./index-CtzR-IoK.js";import"./error-CPePVciD.js";import"./BaseCbacBanner-Dohx4NqC.js";import"./makeExternalStore-BpOl3JpH.js";import"./Tooltip-Cw796QuD.js";import"./PopoverPopup-DU44Cqzs.js";import"./debounce-uoRbC81R.js";import"./useOsdkClient-BUtE_XGy.js";import"./tick-DJSkN9NZ.js";import"./DropdownField-BxGt7Ohj.js";import"./isEqual-C8yEni87.js";import"./withOsdkMetrics-BzqeXglY.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
