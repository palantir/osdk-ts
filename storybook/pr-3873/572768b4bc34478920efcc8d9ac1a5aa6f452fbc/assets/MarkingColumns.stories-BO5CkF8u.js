import{f as p,j as e}from"./iframe-HyESsXeQ.js";import{O as i}from"./object-table-C_2IRHjO.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-Bvz1Iq1b.js";import"./Table-B5sCsjcq.js";import"./index-D0OJ8Trr.js";import"./Dialog-BnKetcOK.js";import"./cross-B4WufoMD.js";import"./svgIconContainer-DoHo3GVe.js";import"./useBaseUiId-DuHypDOw.js";import"./InternalBackdrop-mPo2uYhF.js";import"./composite-DiTBIa1i.js";import"./index-DXkwEgFU.js";import"./index-CgvnsYQE.js";import"./index-Jtuu1nd4.js";import"./useEventCallback-CpzBjTdD.js";import"./SkeletonBar-D7haS-rI.js";import"./LoadingCell-BIZGKlzI.js";import"./ColumnConfigDialog-B6jiXZos.js";import"./DraggableList-lF8OD8ZD.js";import"./search-DCrGY9GL.js";import"./Input-DQmQ9_F8.js";import"./useControlled-BBW-00hW.js";import"./Button-SWnrLxVW.js";import"./small-cross-uXn_FUQJ.js";import"./ActionButton-BrQP3ZP9.js";import"./Checkbox-BBqmSbAH.js";import"./useValueChanged-BixCKPVH.js";import"./CollapsiblePanel-BjtNNYnJ.js";import"./MultiColumnSortDialog-DxInobGo.js";import"./MenuTrigger-B15PhrDH.js";import"./CompositeItem-CPmZ1gPE.js";import"./ToolbarRootContext-ChUkw_F5.js";import"./getDisabledMountTransitionStyles-I2TA2O86.js";import"./getPseudoElementBounds-nn2N1l7W.js";import"./chevron-down-BVfSkRRX.js";import"./index-CjUqhSJN.js";import"./error-Bf7Spqax.js";import"./BaseCbacBanner-COq9_cWc.js";import"./makeExternalStore-CrwMIP9a.js";import"./Tooltip-v_s4JNMl.js";import"./PopoverPopup-Kd6rHNBJ.js";import"./debounce-B8bbiEYQ.js";import"./useOsdkClient-Bnl5eD_v.js";import"./tick-CTdD_I8M.js";import"./DropdownField-DoZDhwJN.js";import"./isEqual-BJSWHtb1.js";import"./withOsdkMetrics-X96S_7mx.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
