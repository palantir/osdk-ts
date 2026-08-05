import{f as p,j as e}from"./iframe-BIOsg0yg.js";import{O as i}from"./object-table-Bv-jTr_6.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-Dp1pzeXC.js";import"./Table-CEluti9g.js";import"./index-CXxxffKM.js";import"./Dialog-B14iocFB.js";import"./cross-DXVZ1txE.js";import"./svgIconContainer-BkHCNiNP.js";import"./useBaseUiId-CI5brcwC.js";import"./InternalBackdrop-tMJHepsy.js";import"./composite-Bzv73STo.js";import"./index-CTJttYim.js";import"./index-CicBu4pP.js";import"./index-PWGOaitX.js";import"./useEventCallback-DygnA5iv.js";import"./SkeletonBar-DKoFIIb5.js";import"./LoadingCell-e2dh2zV9.js";import"./ColumnConfigDialog-D1hHquyD.js";import"./DraggableList-BVMTt1Ma.js";import"./search-S6CNfqFw.js";import"./Input-C75g0i0Z.js";import"./useControlled-Ceujs-Sz.js";import"./isEqual-BDKoeOYt.js";import"./isObject-CKvn21No.js";import"./Button-CFF0wQHv.js";import"./ActionButton-CLLtbvgw.js";import"./Checkbox-3zRR2de6.js";import"./useValueChanged-DaddYqnH.js";import"./CollapsiblePanel-Biheurcv.js";import"./MultiColumnSortDialog-CWRCALSD.js";import"./MenuTrigger-BU_2xml7.js";import"./CompositeItem-Bmfg2MMt.js";import"./ToolbarRootContext-flI5qLGO.js";import"./getDisabledMountTransitionStyles-C3hhUMKD.js";import"./getPseudoElementBounds-BJvsxubx.js";import"./chevron-down-CW-QNXU8.js";import"./index-CH801GQX.js";import"./error-D8basjnA.js";import"./BaseCbacBanner-qT2RssNH.js";import"./makeExternalStore-2uOet4Ks.js";import"./Tooltip-BvO_g_qF.js";import"./PopoverPopup-Cm3NRji8.js";import"./toNumber-D-g99z2N.js";import"./useOsdkClient-BOBaZiLo.js";import"./tick-CfihsH4S.js";import"./DropdownField-CNA8fbtF.js";import"./withOsdkMetrics-l02yUZn_.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
