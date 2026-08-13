import{f as p,j as e}from"./iframe-9i1qquD3.js";import{O as i}from"./object-table-CIiOPICW.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-CaE5xEm4.js";import"./Table-C7QAQnNB.js";import"./index-Cn_PtrCz.js";import"./Dialog-Cp0xLvbr.js";import"./cross-ycERs_gP.js";import"./svgIconContainer-D5imF1LH.js";import"./useBaseUiId-DJQfhcf8.js";import"./InternalBackdrop-HxPhdxjx.js";import"./composite-DM30W4Iq.js";import"./index-D3xl72Ni.js";import"./index-_6ga9HMD.js";import"./index-BzYhgMC4.js";import"./useEventCallback-0vRphiCP.js";import"./SkeletonBar-DUKazIh_.js";import"./LoadingCell-BmdRfS3J.js";import"./ColumnConfigDialog-DL_Rcz3a.js";import"./DraggableList-CIB-qt-L.js";import"./search-KbjOGA9O.js";import"./Input-CYnOeAhZ.js";import"./useControlled-BNPeKpmg.js";import"./Button-C3QXTj2Z.js";import"./small-cross-Db9E4rXn.js";import"./ActionButton-CVFCNHwE.js";import"./Checkbox-BE9XtDBU.js";import"./useValueChanged-Chba_Qmf.js";import"./CollapsiblePanel-CaCqqfBH.js";import"./MultiColumnSortDialog-PgzoAEgZ.js";import"./MenuTrigger-CyObNyRF.js";import"./CompositeItem-DH17Zr6A.js";import"./ToolbarRootContext-go0Pv47B.js";import"./getDisabledMountTransitionStyles-B0-52SxF.js";import"./getPseudoElementBounds-FM95BU18.js";import"./chevron-down-9Tly55P9.js";import"./index-CNJNx8DW.js";import"./error-DLTX-bVv.js";import"./BaseCbacBanner-CM8tlOgH.js";import"./makeExternalStore-DL0J9LaB.js";import"./Tooltip-DJyWdD9X.js";import"./PopoverPopup-80njNaEX.js";import"./toNumber-Dj7u3-Bt.js";import"./useOsdkClient-ag-TPCLH.js";import"./tick-BqOAD6KG.js";import"./DropdownField-h0S7YUlm.js";import"./withOsdkMetrics-COOg86OH.js";const tr={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
}`,...(n=(o=r.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};const or=["MarkingColumns"];export{r as MarkingColumns,or as __namedExportsOrder,tr as default};
