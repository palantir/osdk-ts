import{f as p,j as e}from"./iframe-B7MJ_I4S.js";import{O as i}from"./object-table-DEsqGytw.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-Cov2K-k_.js";import"./Table-PbcymcR5.js";import"./index-C9xfkj2b.js";import"./Dialog-C8e3T8Vj.js";import"./cross-BTDYOKg8.js";import"./svgIconContainer-DK_hyPcz.js";import"./useBaseUiId-DV-TM7_o.js";import"./InternalBackdrop-RHfoBc4O.js";import"./composite-KA45R7op.js";import"./index-CZX5DcZe.js";import"./index-XczBWBXZ.js";import"./index-BQpFGUDq.js";import"./useEventCallback-MU_qS0LW.js";import"./SkeletonBar-AHFXhlYX.js";import"./LoadingCell-FHMd-CkD.js";import"./ColumnConfigDialog-CJs2XIZN.js";import"./DraggableList-BhwhcR2z.js";import"./search-Cf_AT2nS.js";import"./Input-DOi3h0W_.js";import"./useControlled-CXNm2xWR.js";import"./Button-BFw5rIiu.js";import"./small-cross-B-ffW1dD.js";import"./ActionButton-CyF4LZse.js";import"./Checkbox-BTtDSBH6.js";import"./useValueChanged-LN6HBF8u.js";import"./CollapsiblePanel-QOVGqbFt.js";import"./MultiColumnSortDialog-C6rKg7tu.js";import"./MenuTrigger-5xPBbdgO.js";import"./CompositeItem-4qcJnRqN.js";import"./ToolbarRootContext-BhG2wJHB.js";import"./getDisabledMountTransitionStyles-BIpfSkRt.js";import"./getPseudoElementBounds-i52E9W4X.js";import"./chevron-down-CsWhq03e.js";import"./index-DJVv4RIW.js";import"./error-BDRA02ra.js";import"./BaseCbacBanner-CtfAUEFc.js";import"./makeExternalStore-D-74d3Y_.js";import"./Tooltip-Dopd5vwg.js";import"./PopoverPopup-CE7yq2WN.js";import"./debounce-Clf5E167.js";import"./useOsdkClient-BqlAWOQt.js";import"./tick-DmPLJZVn.js";import"./DropdownField-C_4-TvJW.js";import"./isEqual-NQ_TKohX.js";import"./withOsdkMetrics-hrRyl2Up.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
