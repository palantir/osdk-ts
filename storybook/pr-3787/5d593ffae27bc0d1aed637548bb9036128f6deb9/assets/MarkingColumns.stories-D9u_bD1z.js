import{f as p,j as e}from"./iframe-CyZmVsjD.js";import{O as i}from"./object-table-jL-n7eeX.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-HEYW5JNb.js";import"./Table-DfagIk6G.js";import"./index-BIsnimhh.js";import"./Dialog-HpVT0VIv.js";import"./cross-B2-IrGzR.js";import"./svgIconContainer-AUYrzoLK.js";import"./useBaseUiId-DxM_zxss.js";import"./InternalBackdrop-DhyG9QFu.js";import"./composite-XxoSgZbC.js";import"./index-HhNb9coI.js";import"./index-C7Hi_lc2.js";import"./index-Sw4bTcvu.js";import"./useEventCallback-b_6dFGXK.js";import"./SkeletonBar-DKpYK4KN.js";import"./LoadingCell-BtBEdwDY.js";import"./ColumnConfigDialog-CGU-JzLG.js";import"./DraggableList-WEERLRo1.js";import"./search-DjWlgkJN.js";import"./Input-Bl-GgjYI.js";import"./useControlled-xZiD0Urq.js";import"./isEqual-CcM99a7_.js";import"./isObject-N9CWWS8h.js";import"./Button-CSdeTDcp.js";import"./ActionButton-BWSG5Z25.js";import"./Checkbox-BA7muG6e.js";import"./useValueChanged-Dgwb1EH_.js";import"./CollapsiblePanel-CZznUpZ4.js";import"./MultiColumnSortDialog-BIGTB8I8.js";import"./MenuTrigger-AFm_kpRM.js";import"./CompositeItem-XqkpCBrT.js";import"./ToolbarRootContext-D0SMDc5d.js";import"./getDisabledMountTransitionStyles-BBpOe4Qf.js";import"./getPseudoElementBounds-CvJIFZOP.js";import"./chevron-down-P34Asnf7.js";import"./index-DCxG3zDk.js";import"./error-Dc4Tyqrk.js";import"./BaseCbacBanner-C5QoRx_z.js";import"./makeExternalStore-CDO6Oc7I.js";import"./Tooltip-LRCBEIFM.js";import"./PopoverPopup-JLBpa_xN.js";import"./toNumber-Ch2f3zT9.js";import"./useOsdkClient-FUHSAEzr.js";import"./tick-BAJcGr9t.js";import"./DropdownField-Pg9Ecdmk.js";import"./withOsdkMetrics-CKttVeW1.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
