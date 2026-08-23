import{f as p,j as e}from"./iframe-Dyt2g367.js";import{O as i}from"./object-table-BGrb6iBk.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-Iy-_aWsL.js";import"./Table-Dbyfkzfz.js";import"./index-CVbuIiNF.js";import"./Dialog-Dd_kDCnz.js";import"./cross-BGMDayEl.js";import"./svgIconContainer-CQnuEYht.js";import"./useBaseUiId-CNdrP4cM.js";import"./InternalBackdrop-D_O2FDbV.js";import"./composite-CioN3i6x.js";import"./index-C3uS1quW.js";import"./index-DX_nn_2Y.js";import"./index-CQBiAgvJ.js";import"./useEventCallback-B4DeWEdX.js";import"./SkeletonBar-COKv4C1t.js";import"./LoadingCell-D4jVSLP5.js";import"./ColumnConfigDialog-DPusEu3Q.js";import"./DraggableList-CDKAtbXG.js";import"./search-Dlesc_Bn.js";import"./Input-EjY_nd8e.js";import"./useControlled-B5GqLh5A.js";import"./Button-RkRB1WVt.js";import"./small-cross-F18Oi3GF.js";import"./ActionButton-B8gmucK7.js";import"./Checkbox-BEe2g6L-.js";import"./useValueChanged-CTa1gX9Z.js";import"./CollapsiblePanel-D1P_utse.js";import"./MultiColumnSortDialog-C1sdqr4R.js";import"./MenuTrigger-vstZFNDR.js";import"./CompositeItem-GHEjzrAu.js";import"./ToolbarRootContext-DbHSAu67.js";import"./getDisabledMountTransitionStyles-BFGyiY2l.js";import"./getPseudoElementBounds-B26mWoJW.js";import"./chevron-down-CoqmzOf8.js";import"./index-FIX-qPnt.js";import"./error-CoUpGJie.js";import"./BaseCbacBanner-EauHrW6a.js";import"./makeExternalStore-CoWyK-bl.js";import"./Tooltip-BqdBfPty.js";import"./PopoverPopup-DTLPFEsG.js";import"./debounce-CcTcFdOE.js";import"./useOsdkClient-BnH7y6EI.js";import"./tick-_Azp_NBs.js";import"./DropdownField-CGjuW6yJ.js";import"./isEqual-qXkbevHO.js";import"./withOsdkMetrics-C7K3xDQn.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
