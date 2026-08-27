import{f as p,j as e}from"./iframe-h3cXleGN.js";import{O as i}from"./object-table-BsSmMt3L.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-BQEANbpx.js";import"./Table-BeSToCeZ.js";import"./index-BDLfEa8e.js";import"./Dialog-DeWPPo26.js";import"./cross-BpOPwjmQ.js";import"./svgIconContainer-Cgqw1YBP.js";import"./useBaseUiId-QnAE5tIH.js";import"./InternalBackdrop-BFG2CobT.js";import"./composite-C4e_-FyQ.js";import"./index-k1u2DroK.js";import"./index-vao6BJxf.js";import"./index-CZjWoi_r.js";import"./useEventCallback-BD84mdzL.js";import"./SkeletonBar-B7eIUlus.js";import"./LoadingCell-DNy4vmry.js";import"./ColumnConfigDialog-BeovBTtp.js";import"./DraggableList-BhKO-zfV.js";import"./search-PbFTowl6.js";import"./Input-DMjR7I_H.js";import"./useControlled-eLMBNmJx.js";import"./Button-DFiEOscG.js";import"./small-cross-DY1rLeT4.js";import"./ActionButton-1r00dirM.js";import"./Checkbox-JSGFEMe4.js";import"./useValueChanged-63uAN-SY.js";import"./CollapsiblePanel-Dm7jOilb.js";import"./MultiColumnSortDialog-wzESQhDR.js";import"./MenuTrigger-D8zx6dkR.js";import"./CompositeItem-C-ehMRsr.js";import"./ToolbarRootContext-C2Gw-DxP.js";import"./getDisabledMountTransitionStyles-Bd4mc9iO.js";import"./getPseudoElementBounds-rzVNYAZO.js";import"./chevron-down-rZqsJyY-.js";import"./index-CAJBKKlL.js";import"./error-DtPjeO-n.js";import"./BaseCbacBanner-DoqFMeng.js";import"./makeExternalStore-CiUy57je.js";import"./Tooltip-DrTaG1sU.js";import"./PopoverPopup-uL_4U54p.js";import"./debounce-D47KBTR0.js";import"./useOsdkClient-W_cf0x5J.js";import"./tick-Cy93K5D5.js";import"./DropdownField-ChJiaau3.js";import"./isEqual-BTkpVUie.js";import"./withOsdkMetrics-DXJIt81Q.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
