import{f as p,j as e}from"./iframe-B9T5oMDr.js";import{O as i}from"./object-table-DZNFhRRA.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-BPAbrKbo.js";import"./Table-CIGinEoD.js";import"./index-BbzHpAd2.js";import"./Dialog-D85F-kac.js";import"./cross-B02AaJUG.js";import"./svgIconContainer-DzM4Ci-u.js";import"./useBaseUiId-B_QbIUqB.js";import"./InternalBackdrop-wHc4Xe94.js";import"./composite-youxeV_z.js";import"./index-BDL1OtV7.js";import"./index-mRe9n3gj.js";import"./index-Cmo-Ost7.js";import"./useEventCallback-DuSPeUKo.js";import"./SkeletonBar-Bv69qq-0.js";import"./LoadingCell-DGtbyqSk.js";import"./ColumnConfigDialog-C9t4Em6N.js";import"./DraggableList-BwPDHFS6.js";import"./search-BibTnjwg.js";import"./Input-k9vi4ZnU.js";import"./useControlled-B65L2iRV.js";import"./isEqual-DgNUFbmc.js";import"./isObject-BgKMqNpZ.js";import"./Button-jzGBL2cN.js";import"./small-cross-BtSe1Br5.js";import"./ActionButton-BQALkdcW.js";import"./Checkbox-BSPhRBEZ.js";import"./useValueChanged-DAeaTOF1.js";import"./CollapsiblePanel-CB2C8DyA.js";import"./MultiColumnSortDialog-CqSPDtnN.js";import"./MenuTrigger-Bm4TpnTD.js";import"./CompositeItem-_z9g8yfT.js";import"./ToolbarRootContext-BsgfQ9_l.js";import"./getDisabledMountTransitionStyles-CabTrKoF.js";import"./getPseudoElementBounds-CawSqWOn.js";import"./chevron-down-BEQDQVHr.js";import"./index-Bq_KCjK9.js";import"./error-Con-Q4S3.js";import"./BaseCbacBanner-BUKiEgFB.js";import"./makeExternalStore-5V9xTDRp.js";import"./Tooltip-BoO118pB.js";import"./PopoverPopup-CdrQPjRj.js";import"./toNumber-B7xpL-i_.js";import"./useOsdkClient-DNxheivJ.js";import"./tick-kXmQYu5u.js";import"./DropdownField-CSSNURoZ.js";import"./withOsdkMetrics-D1MjRaaQ.js";const nr={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
