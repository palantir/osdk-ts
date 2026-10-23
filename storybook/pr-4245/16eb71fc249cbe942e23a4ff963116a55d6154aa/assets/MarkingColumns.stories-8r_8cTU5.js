import{f as p,j as e}from"./iframe-DbQMorYR.js";import{O as i}from"./object-table-CuscO_G6.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-DES03_oL.js";import"./Table-CyQzIj_n.js";import"./index-CHOCnb0f.js";import"./Dialog-h-CcUbBk.js";import"./cross-CE7V7QeW.js";import"./svgIconContainer-Cwo2AziM.js";import"./useBaseUiId-CKJO2MlM.js";import"./InternalBackdrop-Buze4txO.js";import"./composite-BjHYFgsw.js";import"./index-DpVhWfLY.js";import"./index-C0C-Vl87.js";import"./index-Dkbx_AOS.js";import"./useEventCallback-DDVJcajp.js";import"./SkeletonBar-CHw8W08J.js";import"./LoadingCell-CCoYUe9Q.js";import"./ColumnConfigDialog-CNsz8uaI.js";import"./DraggableList-DMkvCqAL.js";import"./search-ChjdgZEs.js";import"./Input-Q-MRNWMg.js";import"./useControlled-DOgj4MtD.js";import"./Button-S-V8j-aZ.js";import"./small-cross-Cq5E9zQ8.js";import"./ActionButton-CMzKEzrG.js";import"./Checkbox-Cacl4mQ_.js";import"./useValueChanged-BH_8poyT.js";import"./CollapsiblePanel-_cTDz2Uo.js";import"./MultiColumnSortDialog-C66gKvlF.js";import"./MenuTrigger-BTpBscFq.js";import"./CompositeItem-DHvx_K1s.js";import"./ToolbarRootContext-D619hRph.js";import"./getDisabledMountTransitionStyles-T22xlpK-.js";import"./getPseudoElementBounds-CcW8NnN6.js";import"./chevron-down-CVwhtMCl.js";import"./index-CwvWt_bc.js";import"./error-CkRxITwV.js";import"./BaseCbacBanner-QNT9vg-p.js";import"./makeExternalStore-smBq6vy5.js";import"./Tooltip-DxJ5tz0m.js";import"./PopoverPopup-uiUnYz9Z.js";import"./debounce-DMgjlNzy.js";import"./useOsdkClient-3n3qj0TA.js";import"./tick-DtRotk-c.js";import"./DropdownField-DwSBz2YC.js";import"./isEqual-CVwS2TLN.js";import"./withOsdkMetrics-BpNcVo1X.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
