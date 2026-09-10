import{f as p,j as e}from"./iframe-fw03FCk5.js";import{O as i}from"./object-table-C0cY5G1p.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-P9E4Gy6I.js";import"./Table-Fp44mOL0.js";import"./index-cLbCIlyy.js";import"./Dialog-BpeYGZOK.js";import"./cross-Cwm_6W5t.js";import"./svgIconContainer-DTMIi6B0.js";import"./useBaseUiId-R4A3P2Wz.js";import"./InternalBackdrop-B4CFFx_T.js";import"./composite-D_MYaedS.js";import"./index-DFgmoBbG.js";import"./index-DZcROz4y.js";import"./index-C60tKhQE.js";import"./useEventCallback-DP4IinGV.js";import"./SkeletonBar-CLswlhKR.js";import"./LoadingCell-Bi1Dmks0.js";import"./ColumnConfigDialog-CLfNxsHx.js";import"./DraggableList-DHw0AQf7.js";import"./search-6gQRaMIj.js";import"./Input-Cr_VCQb2.js";import"./useControlled-Bwl7RhM1.js";import"./Button-B6XGTdgm.js";import"./small-cross-BquVTguM.js";import"./ActionButton-YSM36rBh.js";import"./Checkbox-BFEEUGNU.js";import"./useValueChanged-CG3lqo2r.js";import"./CollapsiblePanel-BSUAw99t.js";import"./MultiColumnSortDialog-DV0Rp5WR.js";import"./MenuTrigger-C7uy9UPk.js";import"./CompositeItem-BsCKjv-0.js";import"./ToolbarRootContext-BkWOeIIg.js";import"./getDisabledMountTransitionStyles-Bz-DeKbz.js";import"./getPseudoElementBounds-D0KG0Y6V.js";import"./chevron-down-CoqXE8sv.js";import"./index-Br7cHrYo.js";import"./error-Dfv9QpfZ.js";import"./BaseCbacBanner-CFFvJZA3.js";import"./makeExternalStore-Bmm8rP_V.js";import"./Tooltip-CcSsRqls.js";import"./PopoverPopup-OHXCDTwv.js";import"./debounce-Uta78yLR.js";import"./useOsdkClient-bVTcwCG3.js";import"./tick-R2G1Vx7E.js";import"./DropdownField-BI32TYx-.js";import"./isEqual-SpXDcrrv.js";import"./withOsdkMetrics-DxwGMBTH.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
