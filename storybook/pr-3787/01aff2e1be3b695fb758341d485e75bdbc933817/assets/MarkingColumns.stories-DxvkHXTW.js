import{f as p,j as e}from"./iframe-Bm3fa2Ga.js";import{O as i}from"./object-table-CN32R2L8.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-D06pMuuX.js";import"./Table-CMOQFdw2.js";import"./index-exHa5srN.js";import"./Dialog-DPgA7HA4.js";import"./cross-BU7xL5ZY.js";import"./svgIconContainer-BMtH4hPo.js";import"./useBaseUiId-gpm2SMjj.js";import"./InternalBackdrop-Bhfp83tH.js";import"./composite-CeJsh_Dj.js";import"./index-LSlomKTu.js";import"./index-CSBVc4TV.js";import"./index-rk6eXQfS.js";import"./useEventCallback-CEmf2hqV.js";import"./SkeletonBar-Co7WW1h8.js";import"./LoadingCell-DbwzZSTM.js";import"./ColumnConfigDialog-BFIB5_qm.js";import"./DraggableList-BncsMZN7.js";import"./search-hZlNybQI.js";import"./Input-Bs9zmxov.js";import"./useControlled-CeZ9aCri.js";import"./isEqual-DYSA09uA.js";import"./isObject-BQ5tPhs4.js";import"./Button-CKJng19p.js";import"./ActionButton-FTSH7zNj.js";import"./Checkbox-De3q9A2T.js";import"./useValueChanged-8-72OZ4e.js";import"./CollapsiblePanel-BDf8BElQ.js";import"./MultiColumnSortDialog-C47pH7Rr.js";import"./MenuTrigger-txaj9CZA.js";import"./CompositeItem-DeL1bikB.js";import"./ToolbarRootContext-thHFFfWO.js";import"./getDisabledMountTransitionStyles-C3HmR4g3.js";import"./getPseudoElementBounds-n_2JPh_k.js";import"./chevron-down-CaanKCC-.js";import"./index-C8gxRxXp.js";import"./error-CUc3n5dL.js";import"./BaseCbacBanner-BsVIQ_Ip.js";import"./makeExternalStore-RYoaG-HB.js";import"./Tooltip-DKabOtn5.js";import"./PopoverPopup-C85aR5Bs.js";import"./toNumber-ChFXJ0W2.js";import"./useOsdkClient-BF01c34H.js";import"./tick-DSLlXIp8.js";import"./DropdownField-BAzEMy-q.js";import"./withOsdkMetrics-B-jEgCV5.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
