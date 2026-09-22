import{f as p,j as e}from"./iframe-DbTMqywr.js";import{O as i}from"./object-table-B4NijfTH.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-CplCMsOq.js";import"./Table-ivRLn4Th.js";import"./index-DrdNpw1u.js";import"./Dialog-DCrT0Gtt.js";import"./cross-D4suWXRq.js";import"./svgIconContainer-1kdK0av6.js";import"./useBaseUiId-kPb3HUGs.js";import"./InternalBackdrop-C2r_bKtU.js";import"./composite-EoFmCbIV.js";import"./index-B_vDPu9R.js";import"./index-BCeNJbNy.js";import"./index-D8QZGzUD.js";import"./useEventCallback-BukFJMlj.js";import"./SkeletonBar-DxAs7_Je.js";import"./LoadingCell-B5t-9nBu.js";import"./ColumnConfigDialog-BoEEyPIP.js";import"./DraggableList-ChICZTX-.js";import"./search-CUcR83Lr.js";import"./Input-BLknSyNo.js";import"./useControlled-DbEVD0lO.js";import"./Button-B7bNBfe0.js";import"./small-cross-Ch5rXEbe.js";import"./ActionButton-L8rz2KEU.js";import"./Checkbox-DNMwhsGI.js";import"./useValueChanged-bqR-PJWE.js";import"./CollapsiblePanel-C4Fd8GWr.js";import"./MultiColumnSortDialog-C2m7wdIH.js";import"./MenuTrigger-C4ayYf8h.js";import"./CompositeItem-hF1oPeOK.js";import"./ToolbarRootContext-D1MHZAC5.js";import"./getDisabledMountTransitionStyles-CKr3XGAi.js";import"./getPseudoElementBounds-H03pfPE9.js";import"./chevron-down-Bh3KWvIp.js";import"./index-BioKUlDZ.js";import"./error-Du92aaZX.js";import"./BaseCbacBanner-B4a-77eR.js";import"./makeExternalStore-mtSSB5CA.js";import"./Tooltip-X97LD_qB.js";import"./PopoverPopup-yvtzY1iK.js";import"./debounce-BgRvR_Oe.js";import"./useOsdkClient-T0bLDe_N.js";import"./tick-Dk-mGEMR.js";import"./DropdownField-AShWiiqn.js";import"./isEqual-C3spmmnW.js";import"./withOsdkMetrics-C049M_96.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
