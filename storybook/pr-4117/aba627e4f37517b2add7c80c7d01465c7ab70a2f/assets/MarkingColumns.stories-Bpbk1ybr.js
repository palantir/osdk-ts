import{f as p,j as e}from"./iframe-CUE_Kfqx.js";import{O as i}from"./object-table-CEWfoiSN.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-AIizN4Br.js";import"./Table-DCufzlWH.js";import"./index-BiahB8So.js";import"./Dialog-CFor3Klq.js";import"./cross-x00S7IUW.js";import"./svgIconContainer-BHr2UOEv.js";import"./useBaseUiId-DGLgADwu.js";import"./InternalBackdrop-DEAHptJe.js";import"./composite-hPB6o8bz.js";import"./index-Kj8T-xKz.js";import"./index-Dn1aYiaH.js";import"./index-A749wJ93.js";import"./useEventCallback-CkwTVSxb.js";import"./SkeletonBar-DhtU-Zrt.js";import"./LoadingCell-C1sz1tT0.js";import"./ColumnConfigDialog-mjBg3i76.js";import"./DraggableList-DkjQWzhC.js";import"./search-CrkbBBP3.js";import"./Input-Bbk2_em_.js";import"./useControlled-DMcW3WuP.js";import"./Button-Dhiaj79W.js";import"./small-cross-Bx0oZmc_.js";import"./ActionButton-efTfNcN1.js";import"./Checkbox-BCL1JxZu.js";import"./useValueChanged-CW7Ml1tR.js";import"./CollapsiblePanel-DdEPVr1s.js";import"./MultiColumnSortDialog-ChYV8-74.js";import"./MenuTrigger-bjQLNAOD.js";import"./CompositeItem-B7RByGkr.js";import"./ToolbarRootContext-_FDeKHlj.js";import"./getDisabledMountTransitionStyles-DiWmDOBV.js";import"./getPseudoElementBounds-DPetyz5J.js";import"./chevron-down-DAAZF-qc.js";import"./index-u0e1YJAK.js";import"./error-CgrtB7s8.js";import"./BaseCbacBanner-D-lhjRrs.js";import"./makeExternalStore-CCErHO8u.js";import"./Tooltip-BWS__Wm3.js";import"./PopoverPopup-Bdv4BgKZ.js";import"./debounce-BqRNJlyF.js";import"./useOsdkClient-DXgSXyyY.js";import"./tick-DpDkYcVx.js";import"./DropdownField-DydXRFgV.js";import"./isEqual-C2cRpP-7.js";import"./withOsdkMetrics-Z4Ee0NlE.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
