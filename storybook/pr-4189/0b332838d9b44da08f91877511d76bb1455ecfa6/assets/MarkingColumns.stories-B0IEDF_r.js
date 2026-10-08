import{f as p,j as e}from"./iframe-D2-93i0D.js";import{O as i}from"./object-table-CU4ocIYo.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-B5ioDAdF.js";import"./Table-Bz-Xnftt.js";import"./index-ZkzuTgCa.js";import"./Dialog-DDW4FXfg.js";import"./cross-XZbp8X1U.js";import"./svgIconContainer-C_WiUj7c.js";import"./useBaseUiId-O9oPLbry.js";import"./InternalBackdrop-giWMz8bK.js";import"./composite-D2489evg.js";import"./index-CouUEHg5.js";import"./index-C9V5vUYP.js";import"./index-CjjifVq9.js";import"./useEventCallback-CQR4vsZ1.js";import"./SkeletonBar-DVMts2Iv.js";import"./LoadingCell-NTlntxTv.js";import"./ColumnConfigDialog-BDuwqKar.js";import"./DraggableList-CfVTqu85.js";import"./search-e1zERwtP.js";import"./Input-BVsduhCe.js";import"./useControlled-BJsQhtpL.js";import"./Button-BaohMVfV.js";import"./small-cross-C99vIUVl.js";import"./ActionButton-cXi4c_mc.js";import"./Checkbox-Cj96SasP.js";import"./useValueChanged-D3T-RyJH.js";import"./CollapsiblePanel-4um4tHTf.js";import"./MultiColumnSortDialog-CAOIkBtn.js";import"./MenuTrigger-DqtW1DFU.js";import"./CompositeItem-D9rSr-Un.js";import"./ToolbarRootContext-CbCHGeOF.js";import"./getDisabledMountTransitionStyles-Decrs7np.js";import"./getPseudoElementBounds-Cn4hAtui.js";import"./chevron-down-vlgCUq2z.js";import"./index-bBa3vPeF.js";import"./error-C7BXsrlL.js";import"./BaseCbacBanner-Bc06xCFN.js";import"./makeExternalStore-D-FYFBVJ.js";import"./Tooltip-CZ0MFvfo.js";import"./PopoverPopup-DnrWzk-e.js";import"./debounce-DPYgmBq5.js";import"./useOsdkClient-D3LzfKgy.js";import"./tick-BlPreKBC.js";import"./DropdownField-BCaiyljy.js";import"./isEqual-DtAP17iv.js";import"./withOsdkMetrics-B-CCJubj.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
