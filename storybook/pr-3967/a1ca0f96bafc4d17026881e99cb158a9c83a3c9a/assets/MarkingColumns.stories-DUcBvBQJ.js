import{f as p,j as e}from"./iframe-D4qPAS-g.js";import{O as i}from"./object-table-BX28yacF.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-Cg_a2s3G.js";import"./Table-DXOu-_2d.js";import"./index-CLuwBfL-.js";import"./Dialog-T8KIwU-W.js";import"./cross-BeSpWB-4.js";import"./svgIconContainer-DyP05NDR.js";import"./useBaseUiId-DFpk5L0M.js";import"./InternalBackdrop-BCUOLFmB.js";import"./composite-Bzf0kbFg.js";import"./index-jBWRZpUn.js";import"./index-B9EWrBZS.js";import"./index-qCSwMjTE.js";import"./useEventCallback-DXfhN2Zh.js";import"./SkeletonBar-DLFcpX-9.js";import"./LoadingCell-DPxg3Lqi.js";import"./ColumnConfigDialog-6HjVnjx5.js";import"./DraggableList-DoUi86Qx.js";import"./search-CcRZw135.js";import"./Input-D6VetiDp.js";import"./useControlled-Ci6llHGb.js";import"./Button-lgQljYGT.js";import"./small-cross-vwZ-5oTM.js";import"./ActionButton-xbf5tfe7.js";import"./Checkbox-BonnwpAs.js";import"./useValueChanged-HUtJMSWa.js";import"./CollapsiblePanel-CyD6m11V.js";import"./MultiColumnSortDialog-DVZ_dGNm.js";import"./MenuTrigger-dHoqD7w2.js";import"./CompositeItem-BJpP_05A.js";import"./ToolbarRootContext-BsbBQIdg.js";import"./getDisabledMountTransitionStyles-BBrffB6S.js";import"./getPseudoElementBounds-CrC2U4pM.js";import"./chevron-down-CLf1ZLUx.js";import"./index-B7qcuAjK.js";import"./error-CPIE49XR.js";import"./BaseCbacBanner-DA0RZay7.js";import"./makeExternalStore-CgE_KKYk.js";import"./Tooltip-B_aEd4tb.js";import"./PopoverPopup-D3WK50Q9.js";import"./debounce-T1mkMtT7.js";import"./useOsdkClient-8qjnjN0r.js";import"./tick-C58ydeQv.js";import"./DropdownField-CMloR0CL.js";import"./isEqual-0jzM0xZw.js";import"./withOsdkMetrics-DgCfGEzl.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
