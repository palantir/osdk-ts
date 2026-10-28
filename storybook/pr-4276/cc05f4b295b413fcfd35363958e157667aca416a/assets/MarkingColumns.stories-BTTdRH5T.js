import{f as p,j as e}from"./iframe-B2ls_m6L.js";import{O as i}from"./object-table-CLdWUbM7.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-DP2nAHeT.js";import"./Table-UvcN073C.js";import"./index-DcpRv5Au.js";import"./Dialog-BwkAAeQ-.js";import"./cross-DiYUblgV.js";import"./svgIconContainer-Dtr7_c7L.js";import"./useBaseUiId-D1As3N2D.js";import"./InternalBackdrop-poQ1Ks4a.js";import"./composite-nADOaRwJ.js";import"./index-HgFM_z-w.js";import"./index-BKdY56eR.js";import"./index-BFbPpLDJ.js";import"./useEventCallback-C_OLTNA8.js";import"./SkeletonBar-CDSwBps9.js";import"./LoadingCell-Bc890wP7.js";import"./ColumnConfigDialog-BCy_GDuN.js";import"./DraggableList-Dz-MKiiJ.js";import"./search-C0yxcI0O.js";import"./Input-Cxa2FMNZ.js";import"./useControlled-DyDb9EZF.js";import"./Button-DJwARfG7.js";import"./small-cross-BtkQ0vb4.js";import"./ActionButton-BnyLqoQD.js";import"./Checkbox-BaAquE_6.js";import"./useValueChanged-BAEr9orZ.js";import"./CollapsiblePanel-CggaZMfT.js";import"./MultiColumnSortDialog-BLuJj5S7.js";import"./MenuTrigger-jLNdpDEJ.js";import"./CompositeItem-uAkHZ6IU.js";import"./ToolbarRootContext-BCVvVfQ9.js";import"./getDisabledMountTransitionStyles-7kyYRvXc.js";import"./getPseudoElementBounds-BzQUOkaY.js";import"./chevron-down-CD5bKFpW.js";import"./index-C3iibYgA.js";import"./error-xfz1itQC.js";import"./BaseCbacBanner-CYTc_peL.js";import"./makeExternalStore-Dex4IqlO.js";import"./Tooltip-7yrVH1gX.js";import"./isObject-CKlJzEzc.js";import"./debounce-DfStzg0U.js";import"./useOsdkClient-ODHX8UXJ.js";import"./tick-Dp72_Noz.js";import"./DropdownField-BFaK5X74.js";import"./isEqual-CY4vxoGb.js";import"./_baseIsEqual-DHT5s9nl.js";import"./withOsdkMetrics-6BgTImPT.js";const nr={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
}`,...(n=(o=r.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};const ir=["MarkingColumns"];export{r as MarkingColumns,ir as __namedExportsOrder,nr as default};
